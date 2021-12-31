fetch("msmfiles/listapplysort_eng.txt")
    .then(res => res.text())
    .then(text => {
        const lines = text.split('\n');

        const obj = {
            truck: [],
            engine: [],
            recall: [],
            afc: [],
            tsi: []
        }

        const tabValFromLine = (ln) => (tag) => {
            const s = ln;
            const vals = [];

            if (['CIRCUIT', 'TROUBLE'].includes(tag)) return s.indexOf(`<${tag}>`) !== -1;
            if (s.indexOf(`<${tag}>`) === -1) return ""

            s.split(new RegExp(`<${tag}>|</${tag}>`)).map(val => {
                if (!/(?=.*<)(?=.*>)/g.test(val) && val.length && val !== '\r') vals.push(val)
            })

            return vals.length > 1 || ['engfam', 'tm', 'uc'].includes(tag)
                ? vals
                : vals[0]
        }

        lines.map(line => {
            const val = tabValFromLine(line);

            const getTags = (tags) => {
                const obj = {};
                tags.map(tag =>
                    obj[tag] = val(tag)
                )
                return obj
            }

            const tagList = ['grp', 'root', 'filename', 'title', 'tm', 'engfam', 'formnum', 'startdate', 'enddate', 'vendor', 'CIRCUIT', 'TROUBLE', 'uc'];
            if (line.startsWith('<SVCSECTION><TRUCK>')) {
                obj.truck.push(getTags(tagList))
            } else if (line.startsWith('<SVCSECTION><ENGINE>')) {
                obj.engine.push(getTags(tagList))
            } else if (line.startsWith('<RECALL>')) {
                obj.recall.push(getTags(tagList))
            } else if (line.startsWith('<AFC>')) {
                obj.afc.push(getTags(tagList))
            } else if (line.startsWith('<TSI>')) {
                obj.tsi.push(getTags(tagList))
            }
        })

        const newObj = {}
        Object.keys(obj).map(key => {
            newObj[key] = obj[key].map(row => {

                if (typeof row.engfam === 'string') row.engfam = []
                if (typeof row.tm === 'string') row.tm = []

                return row
            })
        })

        console.log(JSON.stringify(newObj))
    })
