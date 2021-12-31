const view = document.getElementById('View')

const data = {
    "truck": [
        {
            "grp": "s01",
            "root": "01001",
            "filename": "s01001.htm",
            "title": "FRAME",
            "tm": [
                "1000",
                "1552",
                "1652",
                "2000",
                "2500",
                "2574",
                "2600",
                "2674",
                "3000 FE",
                "3000 RE",
                "3000",
                "3200",
                "3200 IM",
                "3300",
                "3400",
                "3600",
                "3700",
                "3800",
                "3900",
                "4100",
                "4200",
                "4300",
                "4400",
                "4700",
                "4800",
                "4900",
                "5000",
                "5000I",
                "5500I",
                "5600I",
                "5900I",
                "7100",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8100",
                "8200",
                "8300",
                "8500",
                "8600",
                "9000",
                "9000I",
                "9100",
                "9100I",
                "9200",
                "9200I",
                "9300",
                "9400",
                "9400I",
                "9600",
                "9700",
                "9800",
                "9800SFA",
                "9900",
                "9900I",
                "9900IX",
                "BE 200",
                "CE 200",
                "CE 300",
                "CE BUS",
                "CE S BUS",
                "FE BUS",
                "IC BUS",
                "RE 300",
                "RE BUS",
                "RE S BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s01",
            "root": "01002",
            "filename": "s01002.htm",
            "title": "FRAME - MXT",
            "tm": [
                "MXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "02001K",
            "filename": "s02001k.htm",
            "title": "STEERING GENERAL SERVICE INFORMATION AND FRONT WHEEL ALIGNMENT",
            "tm": [
                "4200"
            ],
            "engfam": [],
            "formnum": "CTS-5027K",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "02002S",
            "filename": "s02002s.htm",
            "title": "HUBS, BEARINGS, AND SEALS (NON-DRIVE AXLES)",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5136S",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "02003",
            "filename": "s02003.htm",
            "title": "FRONT AXLE LOCKING HUBS",
            "tm": [
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5148",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02915"
            ]
        },
        {
            "grp": "s02",
            "root": "02004T",
            "filename": "s02004t.htm",
            "title": "FRONT AXLES: INTERNATIONAL BY SPICER I-BEAM",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5026T",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02ADA",
                "02ADB",
                "02ADC",
                "02ADD",
                "02ADE",
                "02ADG",
                "02ADH",
                "02ADJ",
                "02ADK",
                "02ADL",
                "02ADM",
                "02ADN",
                "02ADP",
                "02ADT",
                "02KDA"
            ]
        },
        {
            "grp": "s02",
            "root": "02005R",
            "filename": "s02005r.htm",
            "title": "FRONT NON-DRIVE STEERING AXLE: ROCKWELL",
            "tm": [
                "2000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5046R",
            "startdate": "",
            "enddate": "",
            "vendor": "ROCKWELL",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02ARA",
                "02ARB",
                "02191",
                "02227",
                "02231",
                "02232",
                "02233",
                "02239"
            ]
        },
        {
            "grp": "s02",
            "root": "02006",
            "filename": "s02006.htm",
            "title": "FRONT STEER AXLE: EATON EFA-12",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5171",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02250",
                "02AEA"
            ]
        },
        {
            "grp": "s02",
            "root": "02007",
            "filename": "s02007.htm",
            "title": "FRONT STEER AXLE: EATON E1200I I-BEAM",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5212",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02AED"
            ]
        },
        {
            "grp": "s02",
            "root": "02008",
            "filename": "s02008.htm",
            "title": "FRONT DRIVE AXLE WHEEL ENDS: ROCKWELL",
            "tm": [
                "5000"
            ],
            "engfam": [],
            "formnum": "CTS-5081",
            "startdate": "",
            "enddate": "",
            "vendor": "ROCKWELL",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02191",
                "02ERD",
                "02ERE",
                "02ERG"
            ]
        },
        {
            "grp": "s02",
            "root": "02009",
            "filename": "s02009.htm",
            "title": "FRONT DRIVE AXLE: SPICER S-9000",
            "tm": [
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5128",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02064"
            ]
        },
        {
            "grp": "s02",
            "root": "02010",
            "filename": "s02010.htm",
            "title": "FRONT DRIVE AXLE WHEEL ENDS: FABCO SDA-12",
            "tm": [
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5147",
            "startdate": "",
            "enddate": "",
            "vendor": "FABCO",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02082",
                "02083",
                "02EYB"
            ]
        },
        {
            "grp": "s02",
            "root": "02011",
            "filename": "s02011.htm",
            "title": "STEERABLE DRIVE AXLE END UNIT: FABCO",
            "tm": [
                "4000",
                "4300",
                "4400",
                "5000"
            ],
            "engfam": [],
            "formnum": "CTS-5149",
            "startdate": "",
            "enddate": "",
            "vendor": "FABCO",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02EYC",
                "02EYG",
                "02EYH"
            ]
        },
        {
            "grp": "s02",
            "root": "02012",
            "filename": "s02012.htm",
            "title": "Meritor Medium Duty Front Drive Steer Axle",
            "tm": [
                "7000"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "MERITOR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02ESA",
                "02ESB",
                "02ESC",
                "02ESX"
            ]
        },
        {
            "grp": "s02",
            "root": "02013",
            "filename": "s02013.htm",
            "title": "Carraro Axle Repair Manual and Parts Catalog",
            "tm": [
                "MXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "03001K",
            "filename": "s03001k.htm",
            "title": "INTERNATIONAL AIR SUSPENSION WITH TAPERED LEAF SPRINGS",
            "tm": [
                "1000",
                "3000",
                "4000",
                "7000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5025K",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "03269",
                "03SAC",
                "03SAD",
                "03SAJ",
                "03SAK",
                "03SAL",
                "03SAM",
                "03SAS",
                "03SAT",
                "03SAU",
                "03SAW"
            ]
        },
        {
            "grp": "s03",
            "root": "03002R",
            "filename": "s03002r.htm",
            "title": "NEWAY AIR SUSPENSION",
            "tm": [
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9900"
            ],
            "engfam": [],
            "formnum": "CTS-5028R",
            "startdate": "",
            "enddate": "",
            "vendor": "NEWAY",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14592",
                "14641",
                "14648",
                "14676",
                "14677",
                "14682",
                "14686",
                "14689",
                "14692"
            ]
        },
        {
            "grp": "s03",
            "root": "03003X",
            "filename": "s03003x.htm",
            "title": "SUSPENSION ALIGNMENT",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5033K",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "03004R",
            "filename": "s03004r.htm",
            "title": "SPRING ASSEMBLIES AND SHOCK ABSORBERS",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5044R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "03005S",
            "filename": "s03005s.htm",
            "title": "REYCO 101A, 102, 102W SUSPENSIONS",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5045S",
            "startdate": "",
            "enddate": "",
            "vendor": "REYCO",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "03006S",
            "filename": "s03006s.htm",
            "title": "HENDRICKSON SUSPENSION SYSTEMS",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5047S",
            "startdate": "",
            "enddate": "",
            "vendor": "HENDRICKSON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "03007",
            "filename": "s03007.htm",
            "title": "HENDRICKSON AIR SUSPENSION WITH TRAILING LEAF SPRINGS",
            "tm": [
                "2000",
                "5000",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5125",
            "startdate": "",
            "enddate": "",
            "vendor": "HENDRICKSON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14UJG",
                "14UJH"
            ]
        },
        {
            "grp": "s03",
            "root": "03008",
            "filename": "s03008.htm",
            "title": "INTERNATIONAL 4X2 AND 6X4 SPRING SUSPENSION WITH TORQUE RODS",
            "tm": [
                "7000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5144",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "03660",
                "03AAJ",
                "14670",
                "14671",
                "14UNA",
                "14UNC"
            ]
        },
        {
            "grp": "s03",
            "root": "03009",
            "filename": "s03009.htm",
            "title": "MOR/RYDE RUBBER SPRING SUSPENSION",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "CTS-5177",
            "startdate": "",
            "enddate": "",
            "vendor": "MOR/RYDE",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "03010",
            "filename": "s03010.htm",
            "title": "NEWAY AD-123/246 DRIVE AXLE AIR SUSPENSIONS",
            "tm": [
                "2000",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5191",
            "startdate": "",
            "enddate": "",
            "vendor": "NEWAY",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14UKN",
                "14UKR",
                "14UKU",
                "14UKV",
                "14UKW",
                "14UKX",
                "14UKY"
            ]
        },
        {
            "grp": "s03",
            "root": "03011",
            "filename": "s03011.htm",
            "title": "HENDRICKSON HN-460 SUSPENSION",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5221",
            "startdate": "",
            "enddate": "",
            "vendor": "HENDRICKSON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14UJZ",
                "14VHA"
            ]
        },
        {
            "grp": "s03",
            "root": "03012",
            "filename": "s03012.htm",
            "title": "INTERNATIONAL RIDE OPTIMIZED SUSPENSION (IROS)",
            "tm": [
                "4000",
                "4200",
                "4300",
                "4400",
                "7000",
                "8100",
                "8200",
                "8300",
                "9000I"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14UNN",
                "14UNM",
                "14UNL",
                "14UNH",
                "14TBJ",
                "14TBG",
                "14TBH",
                "14TBK",
                "14TBL",
                "14TBM",
                "14TBN"
            ]
        },
        {
            "grp": "s03",
            "root": "03013",
            "filename": "s03013.htm",
            "title": "INTERNATIONAL RIDE OPTIMIZED SUSPENSION (IROS)",
            "tm": [
                "3200",
                "3300",
                "CE BUS",
                "CE 200",
                "CE 300",
                "FE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14TBJ",
                "14TBG",
                "14TBH",
                "14TBT",
                "14WAW"
            ]
        },
        {
            "grp": "s03",
            "root": "03014",
            "filename": "s03014.htm",
            "title": "CF 500, CF 600 Suspension",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "03AGN",
                "03GAP",
                "14VAK",
                "14VAL",
                "14VAP",
                "14VAR"
            ]
        },
        {
            "grp": "s03",
            "root": "03015",
            "filename": "s03015.htm",
            "title": "MULTI-LINK FRONT AIR SUSPENSION",
            "tm": [
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04002R",
            "filename": "s04002r.htm",
            "title": "BRAKE COMPONENTS: This Service Manual Section should be used for reference only.  For more current service information on all components go to the Bendix website from the ISIS Suppliers menu and refer to the Service Data Sheets.",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5020R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04003R",
            "filename": "s04003r.htm",
            "title": "AIR COMPRESSOR: BENDIX TU-FLO 550 AND TU-FLO 750",
            "tm": [
                "2000",
                "3000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5056R",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04004",
            "filename": "s04004.htm",
            "title": "AIR COMPRESSOR: BENDIX 2150",
            "tm": [
                "1000",
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5058",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04005",
            "filename": "s04005.htm",
            "title": "CAM AIR FOUNDATION BRAKES",
            "tm": [
                "2000",
                "3000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5060",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04006",
            "filename": "s04006.htm",
            "title": "AUTOMATIC SLACK ADJUSTERS: ROCKWELL",
            "tm": [
                "2000",
                "3000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "ROCKWELL",
                "ARVINMERITOR"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04007",
            "filename": "s04007.htm",
            "title": "RECONDITIONING BRAKE DRUMS AND SHOES",
            "tm": [
                "2000",
                "3000",
                "3900",
                "4000",
                "5000",
                "7000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5085",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04008",
            "filename": "s04008.htm",
            "title": "SPLIT AIR BRAKE SYSTEM",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5109",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04009",
            "filename": "s04009.htm",
            "title": "AUTOMATIC SLACK ADJUSTERS: HALDEX/EATON",
            "tm": [
                "2000",
                "3000",
                "4000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "HALDEX/EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04LAA",
                "04LGA"
            ]
        },
        {
            "grp": "s04",
            "root": "04010",
            "filename": "s04010.htm",
            "title": "AIR COMPRESSOR: BENDIX TU-FLO 501",
            "tm": [
                "2000",
                "3000",
                "4000",
                "7000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5145",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04011",
            "filename": "s04011.htm",
            "title": "AIR COMPRESSOR: MIDLAND MODELS EL-1300 AND EL-1600",
            "tm": [
                "2000",
                "3000",
                "4000",
                "5000",
                "7000",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5146",
            "startdate": "",
            "enddate": "",
            "vendor": "MIDLAND",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04SMB",
                "04SMC"
            ]
        },
        {
            "grp": "s04",
            "root": "04012",
            "filename": "s04012.htm",
            "title": "BP-R1 BOBTAIL BRAKE PROPORTIONING RELAY VALVE AND LQ-5 BOBTAIL LIMITING VALVE",
            "tm": [
                "4000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5170",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04WAM",
                "04WAL"
            ]
        },
        {
            "grp": "s04",
            "root": "04013",
            "filename": "s04013.htm",
            "title": "STOPMASTER WEDGE TYPE BRAKE",
            "tm": [
                "5000"
            ],
            "engfam": [],
            "formnum": "CTS-5172",
            "startdate": "",
            "enddate": "",
            "vendor": "STOPMASTER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04014",
            "filename": "s04014.htm",
            "title": "AIR COMPRESSOR: HOLSET SS 296 AND QE 296/338",
            "tm": [
                "2000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5197",
            "startdate": "",
            "enddate": "",
            "vendor": "HOLSET",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04SCA",
                "04SCH",
                "04SCJ"
            ]
        },
        {
            "grp": "s04",
            "root": "04015",
            "filename": "s04015.htm",
            "title": "AUTOMATIC SLACK ADJUSTERS: BENDIX ASA-5",
            "tm": [
                "2000",
                "3000",
                "4000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04016K",
            "filename": "s04016k.htm",
            "title": "CALIPER DISC BRAKES",
            "tm": [
                "1000",
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5009K",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04114",
                "04145",
                "04146",
                "04237",
                "04238"
            ]
        },
        {
            "grp": "s04",
            "root": "04017Y",
            "filename": "s04017y.htm",
            "title": "HYDRO-MAX BRAKE BOOSTER AND MASTER CYLINDER",
            "tm": [
                "1000",
                "3000",
                "4000",
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "CTS-5018K",
            "startdate": "",
            "enddate": "",
            "vendor": "BOSCH",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04040",
                "04083",
                "04084"
            ]
        },
        {
            "grp": "s04",
            "root": "04018W",
            "filename": "s04018w.htm",
            "title": "RECONDITIONING ROTORS",
            "tm": [
                "1000",
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5086W",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04019",
            "filename": "s04019.htm",
            "title": "DOUBLE DIAPHRAGM ANCHORLOK SPRING BRAKE",
            "tm": [
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5074",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "ANCHORLOK",
                "GOLD SEAL"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04020X",
            "filename": "s04020x.htm",
            "title": "DOUBLE DIAPHRAGM MGM SPRING BRAKE",
            "tm": [
                "2000",
                "3000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5107X",
            "startdate": "",
            "enddate": "",
            "vendor": "MGM",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04021TA",
            "filename": "s04021ta.htm",
            "title": "DCM AND DDM DRUM TYPE PARKING BRAKE",
            "tm": [
                "1000",
                "3000",
                "3200 IM",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5135TA",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04GAB",
                "04GAC",
                "04GAG",
                "04009",
                "04036",
                "04519"
            ]
        },
        {
            "grp": "s04",
            "root": "04022",
            "filename": "s04022.htm",
            "title": "ANTILOCK AIR BRAKE SYSTEM: BENDIX",
            "tm": [
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5059",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04AZA"
            ]
        },
        {
            "grp": "s04",
            "root": "04023",
            "filename": "s04023.htm",
            "title": "ANTILOCK AIR BRAKE SYSTEM: BENDIX",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5113",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04AZA"
            ]
        },
        {
            "grp": "s04",
            "root": "04024",
            "filename": "s04024.htm",
            "title": "ANTILOCK AIR BRAKE SYSTEM: BENDIX - 3000",
            "tm": [
                "3000",
                "3600"
            ],
            "engfam": [],
            "formnum": "CTS-5114",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04AZA"
            ]
        },
        {
            "grp": "s04",
            "root": "04025",
            "filename": "s04025.htm",
            "title": "ANTILOCK AIR BRAKE SYSTEM: BENDIX - 3900",
            "tm": [
                "3900"
            ],
            "engfam": [],
            "formnum": "CTS-5115",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04AZA"
            ]
        },
        {
            "grp": "s04",
            "root": "04026",
            "filename": "s04026.htm",
            "title": "ANTILOCK RELAY VALVE: AR-1",
            "tm": [
                "3000",
                "4000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5150",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04028",
            "filename": "s04028.htm",
            "title": "ANTILOCK AIR BRAKE SYSTEM WITH TRACTION CONTROL: BENDIX - 9200, 9300 and 9400",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5192S",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04AZA",
                "04AZC",
                "04AZD"
            ]
        },
        {
            "grp": "s04",
            "root": "04029",
            "filename": "s04029.htm",
            "title": "ANTILOCK BRAKES/TRACTION CONTROL: BENDIX - PRINCIPLES, OPERATION AND SERVICE",
            "tm": [
                "2000",
                "3000",
                "4000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5246",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04030",
            "filename": "s04030.htm",
            "title": "ANTILOCK MODULATOR ASSEMBLY: BENDIX M-21 AND M-22",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5247",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04031",
            "filename": "s04031.htm",
            "title": "ANTILOCK TRACTION CONTROL RELAY VALVE: BENDIX ATR-2",
            "tm": [
                "2000",
                "3000",
                "4000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5248",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04032",
            "filename": "s04032.htm",
            "title": "EC-16 CONTROLLER",
            "tm": [
                "2000",
                "3000",
                "4000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5249",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04033",
            "filename": "s04033.htm",
            "title": "ANTILOCK BRAKES/TRACTION CONTROL: BENDIX - TROUBLESHOOTING - 2000, 4000 & 8000 MODELS",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5250",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04034",
            "filename": "s04034.htm",
            "title": "ANTILOCK BRAKES/TRACTION CONTROL: BENDIX - TROUBLESHOOTING - 9200, 9300 & 9400 MODELS",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5251",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04035V",
            "filename": "s04035v.htm",
            "title": "ANTILOCK BRAKES/TRACTION CONTROL: BENDIX - TROUBLESHOOTING - 9800 MODEL",
            "tm": [
                "9000",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5252",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04036",
            "filename": "s04036.htm",
            "title": "ANTILOCK BRAKES/TRACTION CONTROL: ROCKWELL WABCO 4 CHANNEL",
            "tm": [
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5253",
            "startdate": "",
            "enddate": "",
            "vendor": "ROCKWELL",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04AZE",
                "04AZH"
            ]
        },
        {
            "grp": "s04",
            "root": "04037",
            "filename": "s04037.htm",
            "title": "ANTILOCK BRAKES/TRACTION CONTROL: MERITOR WABCO WITH \"D\" VERSION ECU",
            "tm": [
                "8000",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5289",
            "startdate": "02/02/1998",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04038",
            "filename": "s04038.htm",
            "title": "EC-17 ANTILOCK TRACTION CONTROLLER",
            "tm": [
                "2000",
                "3000",
                "4000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5292",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "040393",
            "filename": "s040393.htm",
            "title": "Lucas Varity/TRW Hydraulic Antilock Brake System",
            "tm": [
                "1000",
                "1552",
                "1652",
                "3000 FE",
                "3000 RE",
                "3400",
                "3800",
                "4700",
                "4900",
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/1999",
            "enddate": "",
            "vendor": [
                "LUCAS VARITY",
                "TRW"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04083"
            ]
        },
        {
            "grp": "s04",
            "root": "040402",
            "filename": "s040402.htm",
            "title": "DIAMONDLIFE (BOSCH PIN SLIDE) DISC BRAKES For Vehicles Built Before June 3, 2002",
            "tm": [],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "06/03/2002",
            "vendor": "BOSCH",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04JNA",
                "04JNB",
                "04NNB",
                "04NNC"
            ]
        },
        {
            "grp": "s04",
            "root": "04042",
            "filename": "s04042.htm",
            "title": "ANTILOCK BRAKES/ TRACTION CONTROL TROUBLESHOOTING: BENDIX - 9100, 9200, 9300 and 9400 Models Built March 1, 1998 and After",
            "tm": [
                "9000",
                "9100",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5291",
            "startdate": "03/01/1998",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04043",
            "filename": "s04043.htm",
            "title": "EC-30 ABS / ATC CONTROLLER",
            "tm": [],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04044",
            "filename": "s04044.htm",
            "title": "Bosch Parking Brake: Manual or Power Brake",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "BOSCH",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04045",
            "filename": "s04045.htm",
            "title": "Meritor/WABCO Hydraulic ABS for Medium-Duty Trucks, Buses and Motor Home Chassis",
            "tm": [],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "MERITOR",
                "WABCO"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04046",
            "filename": "s04046.htm",
            "title": "TROUBLESHOOTING EC-30 ANTILOCK SYSTEMS",
            "tm": [],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04047",
            "filename": "s04047.htm",
            "title": "DIAMONDLIFE (BOSCH PIN SLIDE) DISC BRAKES For Vehicles Built After June 2, 2002",
            "tm": [],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "BOSCH",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04JNA",
                "04JNB",
                "04NNB",
                "04NNC"
            ]
        },
        {
            "grp": "s04",
            "root": "04048",
            "filename": "s04048.htm",
            "title": "FULL POWER HYDRAULIC ABS BRAKE SYSTEM",
            "tm": [
                "BE 200",
                "CE 200",
                "CE 300",
                "CE BUS",
                "CE S BUS",
                "3300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/15/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04085"
            ]
        },
        {
            "grp": "s04",
            "root": "04049",
            "filename": "s04049.htm",
            "title": "CF 500, CF 600 Brakes",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04GAX",
                "04JNH",
                "04NNH",
                "04086"
            ]
        },
        {
            "grp": "s04",
            "root": "04050",
            "filename": "s04050.htm",
            "title": "FULL POWER HYDRAULIC ABS BRAKE SYSTEM for Models Built 8/21/2006 Through 03/05/2007",
            "tm": [
                "3200",
                "4100",
                "4200",
                "4300",
                "4400",
                "RXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "08/21/2006",
            "enddate": "03/05/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04085",
                "04JNG"
            ]
        },
        {
            "grp": "s04",
            "root": "04051",
            "filename": "s04051.htm",
            "title": "FULL POWER HYDRAULIC ABS BRAKE SYSTEM for Models Built Starting 3/5/2007",
            "tm": [
                "3200",
                "4100",
                "4300",
                "4400",
                "RXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/05/2007",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04085",
                "04JNG"
            ]
        },
        {
            "grp": "s04",
            "root": "04052",
            "filename": "s04052.htm",
            "title": "Bosch Diagnostic Guide for Hydraulic Brake Systems - Class 5 to 7 Truck/Bus",
            "tm": [],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "BOSCH",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04083",
                "04JNA",
                "04JNB",
                "04NNB",
                "04NNC"
            ]
        },
        {
            "grp": "s04",
            "root": "V04001",
            "filename": "v04001.htm",
            "title": "Hydraulic Anti-Lock Braking System (HABS) Installation Guide for OEMs and Body Builders (Includes Body Builder Installation Information)",
            "tm": [],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "MERITOR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "05002Y",
            "filename": "s05002y.htm",
            "title": "POWER STEERING GEAR: SHEPPARD M-SERIES",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5141",
            "startdate": "",
            "enddate": "",
            "vendor": "SHEPPARD",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "05003Y",
            "filename": "s05003y.htm",
            "title": "POWER STEERING GEAR: TRW/ROSS-TAS 40, 55, 65 AND 85",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "4300",
                "4400",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5215",
            "startdate": "",
            "enddate": "",
            "vendor": "TRW",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "05004",
            "filename": "s05004.htm",
            "title": "POWER STEERING GEAR: SHEPPARD MODEL 292, 392, 492",
            "tm": [
                "5000"
            ],
            "engfam": [],
            "formnum": "CTS-5218",
            "startdate": "",
            "enddate": "",
            "vendor": "SHEPPARD",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "05PTC",
                "05PTY",
                "05PTZ",
                "05297",
                "05298",
                "05356"
            ]
        },
        {
            "grp": "s05",
            "root": "05005S",
            "filename": "s05005s.htm",
            "title": "POWER STEERING PUMP: VICKERS (LUK) V10NF AND V20NF",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5023S",
            "startdate": "",
            "enddate": "",
            "vendor": "VICKERS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "05006W",
            "filename": "s05006w.htm",
            "title": "POWER STEERING PUMP: EATON MODEL BB135 R, L",
            "tm": [
                "3900"
            ],
            "engfam": [],
            "formnum": "CTS-5160",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "05007",
            "filename": "s05007.htm",
            "title": "POWER STEERING PUMPS LUK VT73 AND LF93",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5229",
            "startdate": "",
            "enddate": "",
            "vendor": "LUK",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "05008T",
            "filename": "s05008t.htm",
            "title": "STEERING COLUMN ASSEMBLY, TILT",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "CTS-5049T",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "05708"
            ]
        },
        {
            "grp": "s05",
            "root": "05009T",
            "filename": "s05009t.htm",
            "title": "STEERING COLUMN ASSEMBLY, TILT/TELESCOPING",
            "tm": [
                "3000",
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5072T",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "05710"
            ]
        },
        {
            "grp": "s05",
            "root": "05010T",
            "filename": "s05010t.htm",
            "title": "STEERING COLUMN ASSEMBLY, TILT - 9600, 9700, 9800",
            "tm": [
                "9000",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5073T",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "05708"
            ]
        },
        {
            "grp": "s05",
            "root": "05011",
            "filename": "s05011.htm",
            "title": "STEERING COLUMN ASSEMBLY, STANDARD - 5000, 9000 CONV.",
            "tm": [
                "5000",
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5078",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "05012",
            "filename": "s05012.htm",
            "title": "STEERING COLUMN ASSEMBLY, TILT/TELESCOPING - 2000, 4000, 8000",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5167",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "05710"
            ]
        },
        {
            "grp": "s05",
            "root": "05013",
            "filename": "s05013.htm",
            "title": "STEERING COLUMN ASSEMBLY, STANDARD AND TILT - 2000, 3000, 4000, 8000",
            "tm": [
                "2000",
                "3000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5168",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "05014",
            "filename": "s05014.htm",
            "title": "TRW MANUAL STEERING GEAR",
            "tm": [
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5261",
            "startdate": "",
            "enddate": "",
            "vendor": "TRW",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "05MRA"
            ]
        },
        {
            "grp": "s05",
            "root": "05015Y",
            "filename": "s05015y.htm",
            "title": "POWER STEERING GEAR: SHEPPARD M-SERIES",
            "tm": [
                "2000",
                "3000",
                "4000",
                "4300",
                "4400",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5262",
            "startdate": "",
            "enddate": "",
            "vendor": "SHEPPARD",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "05PSA",
                "05PSH",
                "05PTA",
                "05PTB"
            ]
        },
        {
            "grp": "s05",
            "root": "05016",
            "filename": "s05016.htm",
            "title": "STEERING WHEEL REMOVAL AND INSTALLATION",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "05017",
            "filename": "s05017.htm",
            "title": "CF 500, CF 600 Steering",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "05CAV",
                "05PRN",
                "05710"
            ]
        },
        {
            "grp": "s05",
            "root": "05018",
            "filename": "s05018.htm",
            "title": "STEERING COLUMN ASSEMBLY, TILT/TELESCOPING - ProStar",
            "tm": [
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s06",
            "root": "06001",
            "filename": "s06001.htm",
            "title": "PROPELLER SHAFT",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5143S",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s06",
            "root": "06002",
            "filename": "s06002.htm",
            "title": "CF 500, CF 600 Driveshaft",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s07",
            "root": "07001",
            "filename": "s07001.htm",
            "title": "Catalyzed Diesel Particulate Filter (CDPF) Maintenance",
            "tm": [],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s07",
            "root": "07002",
            "filename": "s07002.htm",
            "title": "CF 500, CF 600 Exhaust System",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "07ADR"
            ]
        },
        {
            "grp": "s07",
            "root": "07003",
            "filename": "s07003.htm",
            "title": "DIESEL PARTICULATE FILTER (DPF) SERVICE MANUAL",
            "tm": [
                "3200",
                "4100",
                "4300",
                "4400",
                "5000I",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "9000I",
                "9200I",
                "9900I",
                "CF 500",
                "CF 600",
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08003",
            "filename": "s08003.htm",
            "title": "ALLISON WT TRANSMISSION ELECTRONIC CONTROLS",
            "tm": [
                "1000",
                "2000",
                "3000",
                "3600",
                "3700",
                "3800",
                "3900",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5090",
            "startdate": "",
            "enddate": "",
            "vendor": "ALLISON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13WTA",
                "13WTB",
                "13WTC",
                "13WTD",
                "13WTE"
            ]
        },
        {
            "grp": "s08",
            "root": "08007",
            "filename": "s08007.htm",
            "title": "PRO SLEEPER ELECTRICAL SYSTEM",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5201",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08010",
            "filename": "s08010.htm",
            "title": "TEST EQUIPMENT AND CONNECTOR REPAIR",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5234",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08012",
            "filename": "s08012.htm",
            "title": "ALTERNATOR: DELCO-REMY 10-SI SERIES, TYPE 116",
            "tm": [
                "1000",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5037",
            "startdate": "",
            "enddate": "",
            "vendor": "DELCO-REMY",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08GBG"
            ]
        },
        {
            "grp": "s08",
            "root": "08013",
            "filename": "s08013.htm",
            "title": "ALTERNATOR: DELCO-REMY 20-SI SERIES, TYPE 300 (BRUSHLESS)",
            "tm": [
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5038",
            "startdate": "",
            "enddate": "",
            "vendor": "DELCO-REMY",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08GAR"
            ]
        },
        {
            "grp": "s08",
            "root": "08014",
            "filename": "s08014.htm",
            "title": "ALTERNATOR: DELCO-REMY 25-SI SERIES, TYPES 400 AND 450",
            "tm": [
                "2000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5039",
            "startdate": "",
            "enddate": "",
            "vendor": "DELCO-REMY",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08GAB",
                "08GAZ"
            ]
        },
        {
            "grp": "s08",
            "root": "08015",
            "filename": "s08015.htm",
            "title": "ALTERNATOR: DELCO-REMY 27-SI SERIES, TYPE 200",
            "tm": [
                "2000"
            ],
            "engfam": [],
            "formnum": "CTS-5040",
            "startdate": "",
            "enddate": "",
            "vendor": "DELCO-REMY",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08GAC",
                "08GAV",
                "08GAW"
            ]
        },
        {
            "grp": "s08",
            "root": "08016",
            "filename": "s08016.htm",
            "title": "ALTERNATOR: DELCO-REMY 30-SI AND 30-SI/TR SERIES",
            "tm": [
                "2000",
                "3000",
                "4000",
                "5000",
                "7000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5041",
            "startdate": "",
            "enddate": "",
            "vendor": "DELCO-REMY",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08GAA",
                "08155",
                "08159"
            ]
        },
        {
            "grp": "s08",
            "root": "08017J",
            "filename": "s08017j.htm",
            "title": "ALTERNATOR: DELCO-REMY 21-SI SERIES",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5042J",
            "startdate": "",
            "enddate": "",
            "vendor": "DELCO-REMY",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08GBA",
                "08GBB",
                "08GBC",
                "08GBD",
                "08GBE"
            ]
        },
        {
            "grp": "s08",
            "root": "08018",
            "filename": "s08018.htm",
            "title": "ALTERNATOR: DELCO-REMY 26-SI SERIES",
            "tm": [
                "2000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5077",
            "startdate": "",
            "enddate": "",
            "vendor": "DELCO-REMY",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08GBK"
            ]
        },
        {
            "grp": "s08",
            "root": "08019",
            "filename": "s08019.htm",
            "title": "ALTERNATOR: DELCO-REMY CS-130 SERIES",
            "tm": [
                "1000",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5116",
            "startdate": "",
            "enddate": "",
            "vendor": "DELCO-REMY",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08GBN"
            ]
        },
        {
            "grp": "s08",
            "root": "08020",
            "filename": "s08020.htm",
            "title": "ALTERNATOR: LEECE NEVILLE AND PRESTOLITE JN SERIES",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5202",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "LEECE NEVILLE",
                "PRESTOLITE"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08GAH",
                "08GAJ",
                "08GAK",
                "08GCD",
                "08GAL",
                "08GAU"
            ]
        },
        {
            "grp": "s08",
            "root": "08022K",
            "filename": "s08022k.htm",
            "title": "BATTERY",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5021K",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08033",
            "filename": "s08033.htm",
            "title": "GENERAL INSTRUMENT ELECTRONIC PROGRAMMABLE SPEEDOMETER/TACHOMETER",
            "tm": [
                "9000",
                "9300",
                "9400",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5048",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08034X",
            "filename": "s08034x.htm",
            "title": "INSTRUMENTS",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "CTS-5088K",
            "startdate": "03/01/1992",
            "enddate": "11/01/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08035X",
            "filename": "s08035x.htm",
            "title": "GAUGES AND WARNING LIGHTS",
            "tm": [
                "5000",
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5180S",
            "startdate": "06/01/1994",
            "enddate": "10/01/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08036",
            "filename": "s08036.htm",
            "title": "STARTING MOTORS",
            "tm": [
                "2000",
                "3000",
                "4000",
                "5000",
                "7000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5054",
            "startdate": "",
            "enddate": "",
            "vendor": "DELCO-REMY",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08051",
            "filename": "s08051.htm",
            "title": "ELECTRICAL SYSTEM TROUBLESHOOTING GUIDE - 9200, 9300, 9400 Models Built After January 1, 1995",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5211-01",
            "startdate": "01/01/1995",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08127",
            "filename": "s08127.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - GENERAL INFORMATION - 1991",
            "tm": [
                "9000",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5051-I",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08128",
            "filename": "s08128.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - CATERPILLAR 3406B -1991",
            "tm": [
                "9000",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5051-II",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08129",
            "filename": "s08129.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - CATERPILLAR 3176",
            "tm": [
                "9000",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5051-III",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08130",
            "filename": "s08130.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - CUMMINS CELECT -1991",
            "tm": [
                "9000",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5051-IV",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08131",
            "filename": "s08131.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - CUMMINS PT PACER - 1991",
            "tm": [
                "9000",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5051-V",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08132",
            "filename": "s08132.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - GENERAL INFORMATION - 1992 - 1993",
            "tm": [
                "2000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5091-I",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08133",
            "filename": "s08133.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - CATERPILLAR 3176 - 1992 - 1993",
            "tm": [
                "2000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [
                "CATERPILLAR"
            ],
            "formnum": "CTS-5091-II",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08134",
            "filename": "s08134.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - CUMMINS PT PACER - 1992 - 1993",
            "tm": [
                "2000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [
                "CUMMINS"
            ],
            "formnum": "CTS-5091-III",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08135",
            "filename": "s08135.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - CUMMINS CELECT - 1992 - 1993",
            "tm": [
                "2000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [
                "CUMMINS"
            ],
            "formnum": "CTS-5091-IV",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08136",
            "filename": "s08136.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - DETROIT DIESEL SERIES 60 - 1992 - 1993",
            "tm": [
                "2000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [
                "DETROIT DIESEL"
            ],
            "formnum": "CTS-5091-V",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08137",
            "filename": "s08137.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - GENERAL INFORMATION - 1992-1993",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5092-I",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08138",
            "filename": "s08138.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - CATERPILLAR - 1992 - 1993",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5092-II",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08139",
            "filename": "s08139.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - CUMMINS PACE - 1992 - 1993",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5092-III",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08140",
            "filename": "s08140.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - CUMMINS CELECT 1992 - 1993",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5092-IV",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08141",
            "filename": "s08141.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - DETROIT DIESEL SERIES 60 - 1992 - 1993",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5092-V",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08142",
            "filename": "s08142.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - GENERAL INFORMATION - 1992 - 1993",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5093-I",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08143",
            "filename": "s08143.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - CUMMINS CELECT - 1992-1993",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5092-II",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08144",
            "filename": "s08144.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - CUMMINS PT PACER - 1992-1993",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5093-III",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08145",
            "filename": "s08145.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - CATERPILLAR - 1992-1993",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5093-IV",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08146",
            "filename": "s08146.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - DETROIT DIESEL SERIES 60 - 1992-1993",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5093-V",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08147",
            "filename": "s08147.htm",
            "title": "ELECTRONIC ENGINE CONTROLS - GENERAL INFORMATION - 1994",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5158-I",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08148",
            "filename": "s08148.htm",
            "title": "CATERPILLAR 3176B/3406E ELECTRONIC ENGINE CONTROLS - 1994",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5158-II",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08154X",
            "filename": "s08154x.htm",
            "title": "SPEEDOMETER/TACHOMETER DIAGNOSTICS AND SERVICE",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "8000",
                "5000",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800",
                "9900"
            ],
            "engfam": [],
            "formnum": "CTS-5257",
            "startdate": "01/01/1989",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08155X",
            "filename": "s08155x.htm",
            "title": "INSTRUMENTS (New Data Link Driven Instrument Cluster)",
            "tm": [
                "2000",
                "3000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "CTS-5228",
            "startdate": "11/01/1997",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08156",
            "filename": "s08156.htm",
            "title": "HEATING, VENTILATION, AND AIR CONDITIONING (HVAC) TROUBLESHOOTING GUIDE - 9800",
            "tm": [
                "9000",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5275",
            "startdate": "07/01/1997",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08157",
            "filename": "s08157.htm",
            "title": "HEATING, VENTILATION, AND AIR CONDITIONING (HVAC) TROUBLESHOOTING GUIDE",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5284",
            "startdate": "05/01/1997",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08170",
            "filename": "s08170.htm",
            "title": "HEHR POWER SYSTEMS/POWERLINE ALTERNATORS USED ON EMERGENCY VEHICLES",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5290",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08GBM",
                "08GBR",
                "08GCA",
                "08GCK"
            ]
        },
        {
            "grp": "s08",
            "root": "08184",
            "filename": "s08184.htm",
            "title": "9200, 9400 and 9900 Chassis - Only With Pro Sleeper Cab - Built October 1, 1998 to July 18, 1999- ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "9000",
                "9200",
                "9400",
                "9900"
            ],
            "engfam": [],
            "formnum": "CTS-5273W",
            "startdate": "10/01/1998",
            "enddate": "07/18/1999",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08185",
            "filename": "s08185.htm",
            "title": "5000, 9100, 9200, 9400 and 9900 Chassis - Only With Daycab and With or Without Box Sleeper - Built October 1, 1998 To July 18, 1999 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "5000",
                "9000",
                "9100",
                "9200",
                "9400",
                "9900"
            ],
            "engfam": [],
            "formnum": "CTS-5119W",
            "startdate": "10/01/1998",
            "enddate": "07/18/1999",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08186",
            "filename": "s08186.htm",
            "title": "2000, 4000, 8000 SERIES Built October 1, 1998 To September 30, 1999 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "2000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "CTS-5122W",
            "startdate": "10/01/1998",
            "enddate": "09/30/1999",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08186X",
            "filename": "s08186x.htm",
            "title": "2000, 4000, 8000 SERIES Built October 1, 1999 and After - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "2000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "CTS-5122X",
            "startdate": "10/01/1999",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08191",
            "filename": "s08191.htm",
            "title": "ELECTRICAL SYSTEM TROUBLESHOOTING GUIDE - 5000, 9100, 9200, 9400, AND 9900 MODELS",
            "tm": [
                "5000",
                "9000",
                "9100",
                "9200",
                "9400",
                "9900"
            ],
            "engfam": [],
            "formnum": "CTS-5301",
            "startdate": "10/01/1998",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08206",
            "filename": "s08206.htm",
            "title": "INSTRUMENTS - 1000 SERIES From 01/01/1998 to 02/07/2004",
            "tm": [
                "1000"
            ],
            "engfam": [],
            "formnum": "CTS-5288",
            "startdate": "01/01/1998",
            "enddate": "02/07/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "082064",
            "filename": "s082064.htm",
            "title": "INSTRUMENTS - 1000 SERIES Starting 02/08/2004",
            "tm": [
                "1000"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "02/08/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08207X",
            "filename": "s08207x.htm",
            "title": "GAUGES AND WARNING LIGHTS - 5000, 5000i, 9000, 9000i",
            "tm": [
                "5000",
                "5000I",
                "9000",
                "9100",
                "9000I",
                "9100I",
                "9200",
                "9200I",
                "9300",
                "9300I",
                "9400",
                "9400I",
                "9900",
                "9900I"
            ],
            "engfam": [],
            "formnum": "CTS-5293",
            "startdate": "10/01/1997",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08208X",
            "filename": "s08208x.htm",
            "title": "3000FE, 3000RE Models Built January 11, 1999 To July 31, 2000 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "CTS-5216W",
            "startdate": "01/11/1999",
            "enddate": "07/31/2000",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08208Y",
            "filename": "s08208y.htm",
            "title": "3000FE, 3000RE Models Built August 1, 2000 to February 29, 2004 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "3000 FE",
                "3000 RE"
            ],
            "engfam": [],
            "formnum": "CTS-5216W",
            "startdate": "08/01/2000",
            "enddate": "02/29/2004",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08209",
            "filename": "s08209.htm",
            "title": "1000 Series Built March 1, 1999 To July 31, 2000 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "1000"
            ],
            "engfam": [],
            "formnum": "CTS-5272X",
            "startdate": "03/01/1999",
            "enddate": "07/31/2000",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08209Y",
            "filename": "s08209y.htm",
            "title": "1000 Series Built August 1, 2000 to February 7, 2004 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "1000"
            ],
            "engfam": [],
            "formnum": "CTS-5272X",
            "startdate": "08/01/2000",
            "enddate": "02/07/2004",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08210",
            "filename": "s08210.htm",
            "title": "ELECTRICAL SYSTEM TROUBLESHOOTING GUIDE - 5000i and 9000i",
            "tm": [
                "5000I",
                "9000I",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "startdate": "05/01/1999",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "082252",
            "filename": "s082252.htm",
            "title": "5000i, 9100i, 9200i, 9400i and 9900i Chassis  Built from June 3, 2002 To November 3, 2002 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "5000I",
                "9000I",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "CTS-5298",
            "startdate": "06/03/2002",
            "enddate": "11/03/2002",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "082252A",
            "filename": "s082252a.htm",
            "title": "5000i, 9200i, 9400i and 9900i Chassis  Built November 4, 2002 to November 30, 2005 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "5000I",
                "9000I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "CTS-5298",
            "startdate": "11/04/2002",
            "enddate": "11/30/2005",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08225Y",
            "filename": "s08225y.htm",
            "title": "5000i, 9100i, 9200i, 9400i and 9900i Chassis  Built July 19, 1999 To August 31, 2000 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "5000I",
                "9000I",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "CTS-5298",
            "startdate": "07/19/1999",
            "enddate": "08/31/2000",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08225YA",
            "filename": "s08225ya.htm",
            "title": "5000i, 9100i, 9200i, 9400i and 9900i Chassis  Built September 1, 2000 To June 2, 2002 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "5000I",
                "9000I",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "CTS-5298",
            "startdate": "09/01/2000",
            "enddate": "06/02/2002",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08226",
            "filename": "s08226.htm",
            "title": "3400, 3800, 4000 FBC CHASSIS Built March 1, 1999 To September 30, 1999 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "3000",
                "3400",
                "3800",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5123X",
            "startdate": "03/01/1999",
            "enddate": "09/30/1999",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08226XA",
            "filename": "s08226xa.htm",
            "title": "3400, 3800, 4000 FBC CHASSIS Built October 1, 1999 and After - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "3400",
                "3800",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5123X",
            "startdate": "10/01/1999",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08230",
            "filename": "s08230.htm",
            "title": "ELECTRICAL SYSTEM TROUBLESHOOTING GUIDE - 2000, 4000, 8000",
            "tm": [
                "2000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "CTS-5300",
            "startdate": "10/01/1998",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08242W",
            "filename": "s08242w.htm",
            "title": "9800 Model Built November 1, 1998 to March 31, 2004 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "9000",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5254W",
            "startdate": "11/01/1998",
            "enddate": "03/31/2004",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08245X",
            "filename": "s08245x.htm",
            "title": "SPEEDOMETER/TACHOMETER, GAUGES AND WARNING LIGHTS - 9800",
            "tm": [
                "9000",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5258",
            "startdate": "03/01/1996",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08246",
            "filename": "s08246.htm",
            "title": "ALLISON WT TRANSMISSION WITH WTEC III ELECTRONIC CONTROLS",
            "tm": [
                "2000",
                "3600",
                "3800",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "CTS-5264",
            "startdate": "11/01/1997",
            "enddate": "",
            "vendor": "ALLISON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13ABA",
                "13ABB",
                "13ABC",
                "13ABD",
                "13ABE",
                "13ABG",
                "13ABH",
                "13ABJ",
                "13ABK",
                "13ABV",
                "13ABW"
            ]
        },
        {
            "grp": "s08",
            "root": "08247",
            "filename": "s08247.htm",
            "title": "ALLISON 2000 SERIES (LCT) TRANSMISSION ELECTRONIC CONTROLS",
            "tm": [
                "3400",
                "3800",
                "4700"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "ALLISON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13ACS",
                "13ACP"
            ]
        },
        {
            "grp": "s08",
            "root": "08248",
            "filename": "s08248.htm",
            "title": "IC BUS CHASSIS Built March 1, 2000 and After - ELECTRICAL CIRCUIT DIAGRAMS (Chassis Only)",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/2000",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08249",
            "filename": "s08249.htm",
            "title": "ELECTRICAL SYSTEM TROUBLESHOOTING GUIDE - 1000 MODELS From 01/01/1998 to 02/07/2004",
            "tm": [
                "1000"
            ],
            "engfam": [],
            "formnum": "CTS-5271",
            "startdate": "01/01/1998",
            "enddate": "02/07/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "082503",
            "filename": "s082503.htm",
            "title": "ELECTRICAL SYSTEM TROUBLESHOOTING GUIDE - 3200, 4200, 4300, 4400, 7300, 7400, 7500, 7600, 8500, 8600 Models Built Before 05/20/2003",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "10/16/2000",
            "enddate": "05/19/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "082504",
            "filename": "s082504.htm",
            "title": "ELECTRICAL SYSTEM TROUBLESHOOTING GUIDE - 3200, 4100, 4200, 4300, 4400, 7300, 7400, 7500, 7600, 8500, 8600 Models Built After 05/19/2003",
            "tm": [
                "3200",
                "4100",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "05/20/2003",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08266",
            "filename": "s08266.htm",
            "title": "ELECTRICAL SYSTEM TROUBLESHOOTING GUIDE - IC BUS",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/2000",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08267",
            "filename": "s08267.htm",
            "title": "ELECTRICAL SYSTEM TROUBLESHOOTING GUIDE - 3600, 3800, 4000FBC",
            "tm": [
                "3600",
                "3800",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5283",
            "startdate": "11/01/1997",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08268",
            "filename": "s08268.htm",
            "title": "HYDRO-MAX II BRAKE MONITOR SYSTEM",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5280",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08269",
            "filename": "s08269.htm",
            "title": "ELECTRICAL SYSTEM TROUBLESHOOTING GUIDE - 3000FE, 3000RE",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "CTS-5282",
            "startdate": "11/17/1997",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08270",
            "filename": "s08270.htm",
            "title": "ELECTRICAL SYSTEM TROUBLESHOOTING GUIDE - 9800 MODEL",
            "tm": [
                "9000",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5304",
            "startdate": "11/01/1998",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08285",
            "filename": "s08285.htm",
            "title": "4200, 4300, 4400 SERIES Built October 16, 2000 to December 31, 2001 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "10/16/2000",
            "enddate": "12/31/2001",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "082852",
            "filename": "s082852.htm",
            "title": "4200, 4300, 4400, 7300, 7400, 7500, 8500, 8600 SERIES Built January 1, 2002 To September 30, 2002 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "01/01/2002",
            "enddate": "09/30/2002",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "082852A",
            "filename": "s082852a.htm",
            "title": "3200, 4200, 4300, 4400, 7300, 7400, 7500, 7600, 8500, 8600 SERIES Built October 1, 2002 to September 15, 2003 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "10/01/2002",
            "enddate": "09/15/2003",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "082853",
            "filename": "s082853.htm",
            "title": "3200, 4200, 4300, 4400, 7300, 7400, 7500, 7600, 8500, 8600 SERIES Built September 16, 2003 to March 10, 2004 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "09/16/2003",
            "enddate": "03/10/2004",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "082854",
            "filename": "s082854.htm",
            "title": "3200, 4100, 4200, 4300, 4400, 7300, 7400, 7500, 7600, 8500, 8600 SERIES Built March 11, 2004 to September 30, 2005 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "3200",
                "4100",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/11/2004",
            "enddate": "09/30/2005",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08286",
            "filename": "s08286.htm",
            "title": "IC BUS Models Built March 1, 2000 and After - ELECTRICAL CIRCUIT DIAGRAMS (Body Diagrams)",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/2000",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08287",
            "filename": "s08287.htm",
            "title": "FUSES AND CIRCUIT BREAKERS - 1000-4000, 7000, 8000",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "7000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-4410",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08289",
            "filename": "s08289.htm",
            "title": "DIAGNOSTIC TROUBLE CODES",
            "tm": [
                "3200",
                "4100",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "BE 200",
                "CE BUS",
                "RXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08290",
            "filename": "s08290.htm",
            "title": "Electrical System Troubleshooting Guide - BE 200, CE 200, CE 300 Model",
            "tm": [
                "BE 200",
                "CE 200",
                "CE 300",
                "CE BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08291",
            "filename": "s08291.htm",
            "title": "BE, CE Bus Starting March, 2004 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "BE 200",
                "CE BUS",
                "CE 200",
                "CE 300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08292",
            "filename": "s08292.htm",
            "title": "Iraqi Bus Starting September, 2004 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "IRAQI BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "09/10/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08293",
            "filename": "s08293.htm",
            "title": "Advanced Electrical Technical Information for International's High Performance Trucks",
            "tm": [],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08294",
            "filename": "s08294.htm",
            "title": "1000 SERIES Starting February 8, 2004 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "1000"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "02/08/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08295",
            "filename": "s08295.htm",
            "title": "ELECTRICAL SYSTEM TROUBLESHOOTING GUIDE - 1000 MODELS",
            "tm": [
                "1000"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "02/08/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08296",
            "filename": "s08296.htm",
            "title": "ELECTRICAL SYSTEM TROUBLESHOOTING GUIDE - FE 300, RE 200, RE 300",
            "tm": [
                "FE 300",
                "RE 200",
                "RE 300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08297",
            "filename": "s08297.htm",
            "title": "FE 300, RE 200, RE 300 Models Built March 1, 2004 and After - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "FE 300",
                "RE 200",
                "RE 300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08298",
            "filename": "s08298.htm",
            "title": "Electrical System Troubleshooting Guide - 3300 Model",
            "tm": [
                "3300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "04/01/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08299",
            "filename": "s08299.htm",
            "title": "3300 Model From March, 2004 to December, 2006 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "3300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/2004",
            "enddate": "12/31/2006",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08300",
            "filename": "s08300.htm",
            "title": "Body Builder Electrical Data Book for Models Built January 2001 to February 28, 2007",
            "tm": [
                "3200",
                "4100",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "PBB-73000B",
            "startdate": "01/01/2001",
            "enddate": "02/28/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08301",
            "filename": "s08301.htm",
            "title": "INSTRUMENTS - 1000 SERIES",
            "tm": [
                "1000"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "02/08/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08302",
            "filename": "s08302.htm",
            "title": "ProStar Chassis  Built January, 2007 and After - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "01/15/2007",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08303",
            "filename": "s08303.htm",
            "title": "ELECTRICAL SYSTEM TROUBLESHOOTING GUIDE - 4100, 4300, 4400, 7300, 7400, 7500, 7600, 7700, 8500, 8600, ProStar Models Built After 03/01/2007 (Preliminary)",
            "tm": [
                "4100",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/2007",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08307",
            "filename": "s08307.htm",
            "title": "CF 500, CF 600 - Electrical",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08GEV",
                "08MGB",
                "08MEZ",
                "08WNH",
                "08000",
                "16HBA",
                "16HBB",
                "16XAL"
            ]
        },
        {
            "grp": "s08",
            "root": "08308",
            "filename": "s08308.htm",
            "title": "Diamond Logic PowerPack 3 Dynamic Power System Service/ Troubleshooting Guide",
            "tm": [
                "4100",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "60AAC",
                "60AAE"
            ]
        },
        {
            "grp": "s08",
            "root": "08311",
            "filename": "s08311.htm",
            "title": "CF 500, CF 600 Models to Build End Date 01/31/2006 - Electrical Circuit Diagrams",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "01/31/2006",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08312",
            "filename": "s08312.htm",
            "title": "Aware Vehicle Intelligence System Diagnostic Trouble Codes",
            "tm": [
                "3200",
                "4100",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "BE 200",
                "CE BUS",
                "RXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08313",
            "filename": "s08313.htm",
            "title": "INSTRUMENTS (Data Link Driven Instrument Cluster) - FE 300 and IC Bus",
            "tm": [
                "FE 300",
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/2000",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08314",
            "filename": "s08314.htm",
            "title": "INSTRUMENTS (Data Link Driven Instrument Cluster) - RE 200 and RE 300",
            "tm": [
                "RE 200",
                "RE 300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08315",
            "filename": "s08315.htm",
            "title": "3200, 4100, 4200, 4300, 4400, 7300, 7400, 7500, 7600, 7700, 8500, 8600, RXT Models Built October 1, 2005 to February 28, 2007 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "3200",
                "4100",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "RXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "10/01/2005",
            "enddate": "02/28/2007",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08316",
            "filename": "s08316.htm",
            "title": "5500i, 5600i, 5900i, 9200i, 9400i and 9900i Chassis  Built December 1, 2005 to February 28, 2007 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "5000I",
                "5500I",
                "5600I",
                "5900I",
                "9000I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "12/01/2005",
            "enddate": "02/28/2007",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08317",
            "filename": "s08317.htm",
            "title": "CF 500, CF 600 Models Built February 1, 2006 to August 31, 2007 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "02/01/2006",
            "enddate": "08/31/2007",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08318",
            "filename": "s08318.htm",
            "title": "9800 Model  Built April 1, 2004 and After - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "9000",
                "9800"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "04/01/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08319",
            "filename": "s08319.htm",
            "title": "Inverter/Charger Power System",
            "tm": [
                "9000I",
                "9200I",
                "9400I",
                "9900I",
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "VANNER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08WES"
            ]
        },
        {
            "grp": "s08",
            "root": "08320",
            "filename": "s08320.htm",
            "title": "BE, CE Bus Built August, 2006 Through February, 2007 - ELECTRICAL CIRCUIT DIAGRAMS (Chassis Only)",
            "tm": [
                "BE 200",
                "CE BUS",
                "CE 200",
                "CE 300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "08/01/2006",
            "enddate": "02/28/2007",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08322",
            "filename": "s08322.htm",
            "title": "3200, 4100, 4300, 4400, 7300, 7400, 7500, 7600, 7700, 8500, 8600, RXT Models Built March 1, 2007 and After - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "3200",
                "4100",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "RXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/2007",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08323",
            "filename": "s08323.htm",
            "title": "Body Builder Electrical Data Book for Models Built Starting March 1, 2007",
            "tm": [],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08326",
            "filename": "s08326.htm",
            "title": "5500i, 5600i, 5900i, 9200i,  and 9900i Chassis  Built March 1, 2007 and After - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "5000I",
                "5500I",
                "5600I",
                "5900I",
                "9000I",
                "9200I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/2007",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08327",
            "filename": "s08327.htm",
            "title": "BODY CONTROLLER DIAGNOSTIC TROUBLE CODES",
            "tm": [
                "3200",
                "4100",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "BE 200",
                "CE BUS",
                "CXT",
                "LONESTAR",
                "MXT",
                "PROSTAR",
                "RXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08328",
            "filename": "s08328.htm",
            "title": "Advanced Energy Hybrid CE Model Starting March, 2007 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "CE BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08329",
            "filename": "s08329.htm",
            "title": "BE, CE Bus Starting March, 2007 - ELECTRICAL CIRCUIT DIAGRAMS (Chassis Only)",
            "tm": [
                "BE 200",
                "CE BUS",
                "CE 200",
                "CE 300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/2007",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08331",
            "filename": "s08331.htm",
            "title": "FE 300 Models Built June 11, 2007 and After - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "FE 300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "06/11/2007",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08332",
            "filename": "s08332.htm",
            "title": "CF 500, CF 600 Models Starting September 1, 2007 - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "09/01/2007",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08333",
            "filename": "s08333.htm",
            "title": "4300 Eaton Hybrid Drive System Built November 2006 through February 2007 - Electrical Circuit Diagrams",
            "tm": [
                "4300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "11/01/2006",
            "enddate": "02/01/2007",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08334",
            "filename": "s08334.htm",
            "title": "RE Bus Models Built July 01, 2007 and After - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "RE 200",
                "RE 300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "07/01/2007",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08335",
            "filename": "s08335.htm",
            "title": "RE Bus Models Built 1999 to 2006 BODY ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "RE 200",
                "RE 300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "01/01/1999",
            "enddate": "12/31/2006",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08337",
            "filename": "s08337.htm",
            "title": "3200, 4100, 4300, 4400, 7300, 7400, 7500, 7600, 7700, 8500, 8600, RXT Models Built March, 2008 and After - ELECTRICAL CIRCUIT DIAGRAMS",
            "tm": [
                "3200",
                "4100",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "RXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/19/2008",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "09001V",
            "filename": "s09001v.htm",
            "title": "HOOD, GRILLE, AND FENDERS - 5000, 9100, 9200, 9300, AND 9400",
            "tm": [
                "5000",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5154V",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "09002",
            "filename": "s09002.htm",
            "title": "HOOD, GRILLE AND FENDERS - 2000, 4000, 8000",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5269",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "09003",
            "filename": "s09003.htm",
            "title": "HOOD, GRILLE, FENDERS AND BUMPER - 4100, 4200, 4300, 4400",
            "tm": [
                "4100",
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "09004",
            "filename": "s09004.htm",
            "title": "HOOD, GRILLE, AND FENDERS - 5000i, 9000i",
            "tm": [
                "5000I",
                "5500I",
                "5600I",
                "5900I",
                "9000I",
                "9100I",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "09005",
            "filename": "s09005.htm",
            "title": "HOOD, GRILLE AND FENDERS - IC BUS",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "09006",
            "filename": "s09006.htm",
            "title": "HOOD, GRILLE, FENDERS AND BUMPER - 8500",
            "tm": [
                "8500"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "09007",
            "filename": "s09007.htm",
            "title": "HOOD, GRILLE, FENDERS AND BUMPER - 7000",
            "tm": [
                "7300",
                "7400",
                "7500",
                "7600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "09008",
            "filename": "s09008.htm",
            "title": "HOOD, GRILLE, FENDERS AND BUMPER - 8600",
            "tm": [
                "8600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "09009",
            "filename": "s09009.htm",
            "title": "CE 200, CE 300 - HOOD, GRILLE, FENDERS AND BUMPER",
            "tm": [
                "CE 200",
                "CE 300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "09010",
            "filename": "s09010.htm",
            "title": "3300 HOOD, GRILLE, FENDERS AND BUMPER",
            "tm": [
                "3300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "09011",
            "filename": "s09011.htm",
            "title": "HOOD, GRILLE, FENDERS, AND BUMPER - PROSTAR",
            "tm": [
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "09012",
            "filename": "s09012.htm",
            "title": "CF 500, CF 600 Front End",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "09HAD"
            ]
        },
        {
            "grp": "s09",
            "root": "09013",
            "filename": "s09013.htm",
            "title": "HOOD, GRILLE, FENDERS, BUMPER AND RUNNING BOARDS - MXT",
            "tm": [
                "MXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "09014",
            "filename": "s09014.htm",
            "title": "HOOD, GRILLE, FENDERS, AND BUMPER - WorkStar Series Starting March 2007",
            "tm": [
                "7300",
                "7400",
                "7500",
                "7600",
                "7700"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/2007",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10001S",
            "filename": "s10001s.htm",
            "title": "LUBRICATION AND SEALERS",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5065S",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10002",
            "filename": "s10002.htm",
            "title": "CONVERSION CHARTS",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5132",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10003",
            "filename": "s10003.htm",
            "title": "FASTENER TORQUE",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5142",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10004",
            "filename": "s10004.htm",
            "title": "PRE-DELIVERY/QUALITY INSPECTION INSTRUCTION MANUAL FOR FBC/BUS/STRIPPED CHASSIS",
            "tm": [
                "1000",
                "3000"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10005",
            "filename": "s10005.htm",
            "title": "New Vehicle Processing Manual",
            "tm": [],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10006",
            "filename": "s10006.htm",
            "title": "LUBRICATION, SEALERS AND MAINTENANCE INTERVALS",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5065W",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10009",
            "filename": "s10009.htm",
            "title": "PRE-DELIVERY/QUALITY INSPECTION INSTRUCTION MANUAL FOR 4100, 4300, 4400, MXT, and RXT MODELS",
            "tm": [
                "4100",
                "4300",
                "4400",
                "MXT",
                "RXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10011",
            "filename": "s10011.htm",
            "title": "PRE-DELIVERY/QUALITY INSPECTION INSTRUCTION MANUAL FOR 7300, 7400, 7500, 7600, 7700, 8500, 8600, and CXT MODELS",
            "tm": [
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "CXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10012",
            "filename": "s10012.htm",
            "title": "PRE-DELIVERY/QUALITY INSPECTION INSTRUCTION MANUAL FOR 3300 MODEL",
            "tm": [
                "3300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10013",
            "filename": "s10013.htm",
            "title": "New Vehicle Loss and Damage Procedures Manual",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-1157",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10014",
            "filename": "s10014.htm",
            "title": "PRE-DELIVERY/QUALITY INSPECTION INSTRUCTION MANUAL FOR BE, CE, FE, and RE MODELS",
            "tm": [
                "BE 200",
                "CE 200",
                "CE 300",
                "FE 300",
                "RE 200",
                "RE 300"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10015",
            "filename": "s10015.htm",
            "title": "PRE-DELIVERY/QUALITY INSPECTION INSTRUCTION MANUAL FOR CF 500 and CF 600 MODELS",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10016",
            "filename": "s10016.htm",
            "title": "PRE-DELIVERY/QUALITY INSPECTION INSTRUCTION MANUAL FOR 3200, 3200 IM, HC, and LC  MODELS",
            "tm": [
                "3200",
                "3200 IM",
                "HC",
                "LC"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10017",
            "filename": "s10017.htm",
            "title": "PRE-DELIVERY/QUALITY INSPECTION INSTRUCTION MANUAL FOR 5500i, 5600i, 5900i, 9200i, 9400i and 9900i MODELS",
            "tm": [
                "5000I",
                "5500I",
                "5600I",
                "5900I",
                "9000I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10018",
            "filename": "s10018.htm",
            "title": "3200 Integrated Mobility Option Service Manual",
            "tm": [
                "3200 IM"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "10WZN",
                "10WZP",
                "10WZR",
                "10WZU"
            ]
        },
        {
            "grp": "s10",
            "root": "10019",
            "filename": "s10019.htm",
            "title": "CF 500, CF 600 - General",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10020",
            "filename": "s10020.htm",
            "title": "USPS International 4400 Master Index",
            "tm": [
                "4400",
                "USPS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10022",
            "filename": "s10022.htm",
            "title": "Pre-Delivery Inspection Instruction Manual For ProStar Model",
            "tm": [
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "10023",
            "filename": "s10023.htm",
            "title": "Pre-Delivery Inspection Master Instruction Manual",
            "tm": [],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s11",
            "root": "11001S",
            "filename": "s11001s.htm",
            "title": "SPICER 14-INCH (356 MM) AND 15 1/2-INCH (394 MM) TWO-PLATE, PULL-TYPE CLUTCH",
            "tm": [
                "2000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5043S",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "11LDN",
                "11LDP",
                "11LDR",
                "11LDS",
                "11LDT",
                "11LDU",
                "11MDD",
                "11MDE",
                "11MDH",
                "11MDL",
                "11MDM",
                "11MDN",
                "11MDP",
                "11MDS",
                "11MDT",
                "11MDU",
                "11MDW",
                "11MDX",
                "11155",
                "11239",
                "11249",
                "11250",
                "11254"
            ]
        },
        {
            "grp": "s11",
            "root": "11002",
            "filename": "s11002.htm",
            "title": "SPICER 13-INCH (310 MM) AND 14-INCH (350 MM) ANGLE-RING SINGLE PLATE PUSH-TYPE CLUTCH",
            "tm": [
                "1000",
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5057",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "11265",
                "11266"
            ]
        },
        {
            "grp": "s11",
            "root": "11003",
            "filename": "s11003.htm",
            "title": "SPICER 14-INCH (355.6 MM) STAMPED ANGLE-SPRING CLUTCH",
            "tm": [
                "2000",
                "3000",
                "4000",
                "4300",
                "4400",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5140",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "11LDK",
                "11LDL",
                "11LDM",
                "11LDY"
            ]
        },
        {
            "grp": "s11",
            "root": "11004",
            "filename": "s11004.htm",
            "title": "SPICER 14 INCH (350 MM) SOLO CLUTCH",
            "tm": [
                "2000",
                "3000",
                "4000",
                "4300",
                "4400",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5256",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "11LEC",
                "11LED"
            ]
        },
        {
            "grp": "s11",
            "root": "11005R",
            "filename": "s11005r.htm",
            "title": "CLUTCH CONTROL LINKAGE - 1000 SERIES",
            "tm": [
                "1000"
            ],
            "engfam": [],
            "formnum": "CTS-5052R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "11000"
            ]
        },
        {
            "grp": "s11",
            "root": "11006R",
            "filename": "s11006r.htm",
            "title": "CLUTCH CONTROL LINKAGE - 2000, 4000, 7000, AND 8000 SERIES",
            "tm": [
                "2000",
                "4000",
                "7000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5053R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "11000"
            ]
        },
        {
            "grp": "s11",
            "root": "11007R",
            "filename": "s11007r.htm",
            "title": "CLUTCH CONTROL LINKAGE - 3700 AND 3800 SERIES",
            "tm": [
                "3700",
                "3800"
            ],
            "engfam": [],
            "formnum": "CTS-5061R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "11000"
            ]
        },
        {
            "grp": "s11",
            "root": "11008R",
            "filename": "s11008r.htm",
            "title": "CLUTCH CONTROL LINKAGE - 5000, 9300 AND 9400 SERIES",
            "tm": [
                "5000",
                "9000",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5063R",
            "startdate": "",
            "enddate": "12/31/1992",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s11",
            "root": "11009R",
            "filename": "s11009r.htm",
            "title": "CLUTCH CONTROL LINKAGE - 9600, 9700 AND 9800 SERIES",
            "tm": [
                "9000",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5064R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s11",
            "root": "11010K",
            "filename": "s11010k.htm",
            "title": "CLUTCH CONTROL LINKAGE - 9200, 9300 AND 9400 SERIES",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5117K",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s11",
            "root": "11011",
            "filename": "s11011.htm",
            "title": "CLUTCH CONTROL LINKAGE - 9800 SERIES",
            "tm": [
                "9000",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5231",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s11",
            "root": "11012",
            "filename": "s11012.htm",
            "title": "SPICER 15-1/2 INCH (394 MM) SOLO CLUTCH",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5268",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "11MDY",
                "11MDZ"
            ]
        },
        {
            "grp": "s12",
            "root": "12001J",
            "filename": "s12001j.htm",
            "title": "FAN DRIVE CLUTCH: KYSOR 1090 (8000 SERIES)",
            "tm": [
                "2000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5015J",
            "startdate": "",
            "enddate": "",
            "vendor": "KYSOR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12TKG",
                "12TKH",
                "12TKJ",
                "12TKK",
                "12TKL"
            ]
        },
        {
            "grp": "s12",
            "root": "12002Y",
            "filename": "s12002y.htm",
            "title": "VISCOUS FAN DRIVES",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5055T",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12TSA",
                "12TSB",
                "12TSG",
                "12TSJ",
                "12TSL",
                "12TSS",
                "12TST",
                "12TSU",
                "12TSV",
                "12TSW"
            ]
        },
        {
            "grp": "s12",
            "root": "12003R",
            "filename": "s12003r.htm",
            "title": "ENGINE COOLING SYSTEM",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5071R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "12004R",
            "filename": "s12004r.htm",
            "title": "FAN DRIVE CLUTCH: HORTON ON/OFF",
            "tm": [
                "2000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5083R",
            "startdate": "",
            "enddate": "",
            "vendor": "HORTON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12THA"
            ]
        },
        {
            "grp": "s12",
            "root": "12005",
            "filename": "s12005.htm",
            "title": "RADIATOR SHUTTERS",
            "tm": [
                "2000",
                "3000",
                "3900",
                "4000",
                "5000",
                "7000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5084",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12UJA",
                "12UJB",
                "12801",
                "12802"
            ]
        },
        {
            "grp": "s12",
            "root": "12006",
            "filename": "s12006.htm",
            "title": "AIR-TO-AIR CHARGE AIR COOLER",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5087",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "12008",
            "filename": "s12008.htm",
            "title": "RADIATOR, REMOVE AND REPLACE",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400",
                "8500"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "12010",
            "filename": "s12010.htm",
            "title": "RADIATOR, REMOVE AND REPLACE - 7300, 7400, 7500, 7600, 7700 Models",
            "tm": [
                "7300",
                "7400",
                "7500",
                "7600",
                "7700"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "12014",
            "filename": "s12014.htm",
            "title": "CF 500, CF 600 Intake Air Distribution/Filtering and Charge Air Cooler",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "12015",
            "filename": "s12015.htm",
            "title": "CF 500, CF 600 Cooling System",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12THU",
                "12UWR",
                "12890"
            ]
        },
        {
            "grp": "s12",
            "root": "12016",
            "filename": "s12016.htm",
            "title": "Green Diesel Retrofit",
            "tm": [],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "12017",
            "filename": "s12017.htm",
            "title": "MWM Acteon Engine Workshop Manual",
            "tm": [],
            "engfam": [
                "MWM"
            ],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "MWM",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "12018",
            "filename": "s12018.htm",
            "title": "MWM Acteon Engine Troubleshooting Manual",
            "tm": [],
            "engfam": [
                "MWM"
            ],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "MWM",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "12019",
            "filename": "s12019.htm",
            "title": "RADIATOR, REMOVE AND REPLACE - MXT",
            "tm": [
                "MXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "12020",
            "filename": "s12020.htm",
            "title": "Kubota 68mm Stroke Series Diesel Engine Workshop Manual",
            "tm": [],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "KUBOTA",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "12021",
            "filename": "s12021.htm",
            "title": "RADIATOR/COOLING SYSTEM SERVICE MANUAL - PROSTAR",
            "tm": [
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "12023",
            "filename": "s12023.htm",
            "title": "SIDE MOUNT COOLING PACKAGE",
            "tm": [
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "13001",
            "filename": "s13001.htm",
            "title": "SHIFT CONTROL LINKAGE ADJUSTMENT PROCEDURE WITH MANUAL TRANSMISSION",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5094",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "13002",
            "filename": "s13002.htm",
            "title": "DRIVETRAIN FAILURE ANALYSIS",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5198",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "13003",
            "filename": "s13003.htm",
            "title": "POWER TAKE OFF: ROCKWELL REAR ENGINE MOUNTED",
            "tm": [
                "5000"
            ],
            "engfam": [],
            "formnum": "CTS-5210",
            "startdate": "",
            "enddate": "",
            "vendor": "ROCKWELL",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12WPB",
                "12WPD"
            ]
        },
        {
            "grp": "s13",
            "root": "13004",
            "filename": "s13004.htm",
            "title": "SHIFT CONTROL LINKAGE WITH MANUAL TRANSMISSION",
            "tm": [
                "9000",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5230",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "13005V",
            "filename": "s13005v.htm",
            "title": "9 SPEED TRANSMISSIONS INTERNATIONAL PS125-9A, PS140-9A, PSO125-9A, PSO140-9A AND PSO150-9A",
            "tm": [
                "2000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5019H",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13DDC",
                "13DHH",
                "13DHJ",
                "13DHK",
                "13DHL",
                "13DHM",
                "13MAB",
                "13MAC",
                "13MAW",
                "13MAX",
                "13MAY",
                "13MBL",
                "13MBM",
                "13MBN",
                "13MBP",
                "13MBR",
                "13MBS",
                "13MBT",
                "13MBU",
                "13MBV",
                "13MBW",
                "13MBX",
                "13MBZ",
                "13MCA",
                "13MCB",
                "13MCC"
            ]
        },
        {
            "grp": "s13",
            "root": "13006H",
            "filename": "s13006h.htm",
            "title": "6 SPEED TRANSMISSIONS INTERNATIONAL MODEL ES52-7A AND ESO65-7A 6-PLUS",
            "tm": [
                "2000",
                "3000",
                "4000",
                "4300",
                "4400",
                "7000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5029",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13MAG",
                "13MAH",
                "13MCG"
            ]
        },
        {
            "grp": "s13",
            "root": "13007",
            "filename": "s13007.htm",
            "title": "13 SPEED AND 18 SPEED TRANSMISSIONS EATON RTLO-713/18 SERIES",
            "tm": [
                "2000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5176",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GDJ",
                "13GDK",
                "13GDL",
                "13GDM",
                "13GDY",
                "13GES"
            ]
        },
        {
            "grp": "s13",
            "root": "13008",
            "filename": "s13008.htm",
            "title": "6 SPEED TRANSMISSIONS EATON SERIES FS-5106 AND FS-6206",
            "tm": [
                "3000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5179",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GAD",
                "13GAN"
            ]
        },
        {
            "grp": "s13",
            "root": "13009",
            "filename": "s13009.htm",
            "title": "5 SPEED TRANSMISSIONS SPICER ES43-5 AND ES53-5",
            "tm": [
                "1000",
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5181",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13DBA",
                "13DBB",
                "13DBC",
                "13DBD"
            ]
        },
        {
            "grp": "s13",
            "root": "13010",
            "filename": "s13010.htm",
            "title": "5 SPEED TRANSMISSIONS SPICER ES62-5A, ES62-5D, ES67-5A AND ES67-5D",
            "tm": [
                "2000",
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5182",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13DBT",
                "13DBU",
                "13DBV",
                "13DBW"
            ]
        },
        {
            "grp": "s13",
            "root": "13011",
            "filename": "s13011.htm",
            "title": "5 SPEED TRANSMISSIONS SPICER ES70-5",
            "tm": [
                "2000",
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5183",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13DBX",
                "13DBY"
            ]
        },
        {
            "grp": "s13",
            "root": "13012",
            "filename": "s13012.htm",
            "title": "5 SPEED TRANSMISSIONS SPICER ES60-5",
            "tm": [
                "2000",
                "3000",
                "4000",
                "7000"
            ],
            "engfam": [],
            "formnum": "CTS-5184",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13299",
                "13670"
            ]
        },
        {
            "grp": "s13",
            "root": "13013",
            "filename": "s13013.htm",
            "title": "5 SPEED TRANSMISSIONS SPICER ES65-5",
            "tm": [
                "2000",
                "3000",
                "4000",
                "7000"
            ],
            "engfam": [],
            "formnum": "CTS-5185",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13310",
                "13676",
                "13678"
            ]
        },
        {
            "grp": "s13",
            "root": "13014",
            "filename": "s13014.htm",
            "title": "6 SPEED TRANSMISSIONS SPICER PSO140-61",
            "tm": [
                "2000",
                "5000",
                "9000",
                "9200",
                "9300",
                "9400",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5186",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13447"
            ]
        },
        {
            "grp": "s13",
            "root": "13015",
            "filename": "s13015.htm",
            "title": "10 SPEED AND 15 SPEED TRANSMISSIONS EATON RT, RTO, AND RTX SERIES",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5187",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GAG",
                "13GAL",
                "13GAS",
                "13286",
                "13293",
                "13438",
                "13470",
                "13493",
                "13689",
                "13693"
            ]
        },
        {
            "grp": "s13",
            "root": "13016",
            "filename": "s13016.htm",
            "title": "7 SPEED TRANSMISSIONS SPICER PS110-7, PS145-7",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5188",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13DBG",
                "13DBH",
                "13DBJ"
            ]
        },
        {
            "grp": "s13",
            "root": "13017",
            "filename": "s13017.htm",
            "title": "10 SPEED TRANSMISSIONS EATON RTLO SERIES",
            "tm": [
                "2000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5196",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GDE",
                "13GDG",
                "13GDH",
                "13GDR",
                "13GDS"
            ]
        },
        {
            "grp": "s13",
            "root": "13018",
            "filename": "s13018.htm",
            "title": "8 SPEED, 9 SPEED, AND 13 SPEED TRANSMISSIONS EATON SERIES",
            "tm": [
                "2000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5205",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GAA",
                "13GAV",
                "13GAW",
                "13GAX",
                "13GBN",
                "13GBP",
                "13GBW",
                "13408",
                "13410",
                "13462",
                "13467",
                "13468"
            ]
        },
        {
            "grp": "s13",
            "root": "13019",
            "filename": "s13019.htm",
            "title": "18 SPEED TRANSMISSIONS EATON RTLO-14618 AND RTLO-16618 SERIES",
            "tm": [
                "2000",
                "5000",
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5206",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GAU"
            ]
        },
        {
            "grp": "s13",
            "root": "13020",
            "filename": "s13020.htm",
            "title": "9 SPEED AND 11 SPEED TRANSMISSIONS EATON RTO-1X707LL/DLL/MLL AND RTO-1X709MLL MODELS",
            "tm": [
                "2000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5207",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GCK",
                "13GEP",
                "13GER"
            ]
        },
        {
            "grp": "s13",
            "root": "13021",
            "filename": "s13021.htm",
            "title": "9 SPEED AND 10 SPEED TRANSMISSIONS EATON 16709 AND 16710 SERIES",
            "tm": [
                "2000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5208",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GBA",
                "13GBB",
                "13GBC",
                "13GBE",
                "13GBH",
                "13GBR",
                "13GBT",
                "13GCB",
                "13GCC",
                "13GCD",
                "13GCH",
                "13GCJ",
                "13GCR",
                "13GCS",
                "13GCT",
                "13GCU",
                "13GCW",
                "13GCX",
                "13GCY",
                "13GCZ",
                "13GDA",
                "13GDB",
                "13GDT",
                "13GDU",
                "13GDW",
                "13GDX"
            ]
        },
        {
            "grp": "s13",
            "root": "13022X",
            "filename": "s13022x.htm",
            "title": "10 SPEED TRANSMISSIONS SPICER AUTOMATE-2",
            "tm": [
                "4000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5219",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13DDE",
                "13DBZ",
                "13DCH",
                "13DCJ",
                "13DCK",
                "13DCL",
                "13DDE",
                "13DDG",
                "13DDH",
                "13DDJ",
                "13DDK",
                "13DEE",
                "13DEG",
                "13DEH",
                "13DEJ",
                "13DEK",
                "13DEL",
                "13DEM",
                "13DEN",
                "13DEP",
                "13DER",
                "13DES",
                "13DET",
                "13DGD",
                "13DGE",
                "13DGG",
                "13DGH",
                "13DGJ",
                "13DGK",
                "13DGL",
                "13DGM"
            ]
        },
        {
            "grp": "s13",
            "root": "13023X",
            "filename": "s13023x.htm",
            "title": "10 SPEED TRANSMISSIONS SPICER",
            "tm": [
                "2000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5220",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13DAS",
                "13DAT",
                "13DAU",
                "13DAW",
                "13DAX",
                "13DCT",
                "13DCU",
                "13DCV",
                "13DCW",
                "13DCX",
                "13DCY",
                "13DCZ",
                "13DDA",
                "13DDB",
                "13DDD",
                "13DDR",
                "13DDS",
                "13DDT",
                "13DDU",
                "13DEU",
                "13DEW",
                "13DEX",
                "13DEY",
                "13DEZ",
                "13DGA",
                "13DGB",
                "13DGC",
                "13DHN",
                "13DHP",
                "13DHR",
                "13DHS",
                "13DHT",
                "13DHU"
            ]
        },
        {
            "grp": "s13",
            "root": "13024",
            "filename": "s13024.htm",
            "title": "10 SPEED TRANSMISSIONS FULLER RT-610 SERIES",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5222",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13448"
            ]
        },
        {
            "grp": "s13",
            "root": "13025",
            "filename": "s13025.htm",
            "title": "7 SPEED TRANSMISSIONS FULLER SERIES",
            "tm": [
                "2000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5223",
            "startdate": "",
            "enddate": "",
            "vendor": "FULLER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13289",
                "13290"
            ]
        },
        {
            "grp": "s13",
            "root": "13026",
            "filename": "s13026.htm",
            "title": "5 SPEED AND 6 SPEED TRANSMISSIONS EATON SERIES",
            "tm": [
                "2000",
                "3000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5224",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GEU",
                "13GEW",
                "13GEX",
                "13GEY"
            ]
        },
        {
            "grp": "s13",
            "root": "13027",
            "filename": "s13027.htm",
            "title": "13 SPEED TRANSMISSIONS EATON RTLO-14613",
            "tm": [
                "2000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5225",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GCP"
            ]
        },
        {
            "grp": "s13",
            "root": "13029",
            "filename": "s13029.htm",
            "title": "9 SPEED TRANSMISSIONS EATON RT-8609 SERIES",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5235",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13367"
            ]
        },
        {
            "grp": "s13",
            "root": "13030",
            "filename": "s13030.htm",
            "title": "13 SPEED TRANSMISSIONS EATON RT-6613 SERIES",
            "tm": [
                "2000",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5237",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13422"
            ]
        },
        {
            "grp": "s13",
            "root": "13031",
            "filename": "s13031.htm",
            "title": "AUTOMATIC TRANSMISSION SHIFT LINKAGE",
            "tm": [
                "1000",
                "4000"
            ],
            "engfam": [],
            "formnum": "CTS-5270",
            "startdate": "",
            "enddate": "",
            "vendor": "ALLISON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "13032",
            "filename": "s13032.htm",
            "title": "FULLER 10 SPEED TRANSMISSIONS",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5226",
            "startdate": "",
            "enddate": "",
            "vendor": "FULLER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GGK",
                "13GGL",
                "13GGM",
                "13GGN",
                "13GGT",
                "13GGU",
                "13GGV",
                "13GGW",
                "13GHA",
                "13GHB",
                "13GHC",
                "13GHJ",
                "13GHK",
                "13GHL",
                "13GHM",
                "13GHN",
                "13GHP",
                "13GHR",
                "13GHS"
            ]
        },
        {
            "grp": "s13",
            "root": "13033",
            "filename": "s13033.htm",
            "title": "ROCKWELL 9, 10, AND 13 SPEED TRANSMISSIONS",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5260",
            "startdate": "",
            "enddate": "",
            "vendor": "ROCKWELL",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13MRA",
                "13MRB",
                "13MRC",
                "13MRE",
                "13MRG",
                "13MRH",
                "13MRJ",
                "13MRK",
                "13MRL",
                "13MRM",
                "13MRR",
                "13MRS",
                "13MRT",
                "13MRU",
                "13MRV",
                "13MRW",
                "13MRX",
                "13MRZ",
                "13MSA",
                "13MSB",
                "13MSC",
                "13MSD",
                "13MSE",
                "13MSG",
                "13MSH",
                "13MSJ",
                "13MSK"
            ]
        },
        {
            "grp": "s13",
            "root": "13034",
            "filename": "s13034.htm",
            "title": "TRANSFER CASES",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5242",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13TDC",
                "13TDE",
                "13176",
                "13177",
                "13180"
            ]
        },
        {
            "grp": "s13",
            "root": "13035",
            "filename": "s13035.htm",
            "title": "Meritor Transfer Cases MTC-4208, -4210, and -4213",
            "tm": [
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "MERITOR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "13036",
            "filename": "s13036.htm",
            "title": "CF 500, CF 600 Transmission",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13ADK",
                "13ADL"
            ]
        },
        {
            "grp": "s13",
            "root": "13037",
            "filename": "s13037.htm",
            "title": "OMSI PFT-PCV/3000 Split Shaft PTO",
            "tm": [
                "7600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "OMSI",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13TSC",
                "13TSD",
                "13TSE",
                "13TSG",
                "13TSH",
                "13TSJ",
                "13TSK",
                "13TSL",
                "13TSM",
                "13TSN",
                "13TSP"
            ]
        },
        {
            "grp": "s13",
            "root": "13038",
            "filename": "s13038.htm",
            "title": "MXT Magna MP1528 Transfer Case - Service and Electrical Troubleshooting",
            "tm": [
                "MXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": true,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "14001T",
            "filename": "s14001t.htm",
            "title": "HUBS, BEARINGS, AND SEALS",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5137",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "14002",
            "filename": "s14002.htm",
            "title": "2 SPEED AXLE SHIFT UNIT: EATON",
            "tm": [
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5166",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "14003",
            "filename": "s14003.htm",
            "title": "AUTOMATIC POSITIVE LOCKING TRACTION DIFFERENTIALS (NOSPIN/DETROIT LOCKER)",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5217",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14877",
                "14880",
                "14881",
                "14882",
                "14883",
                "14886",
                "14887"
            ]
        },
        {
            "grp": "s14",
            "root": "14004",
            "filename": "s14004.htm",
            "title": "SINGLE REDUCTION, TANDEM AXLES: SPICER J400-S, W460-S",
            "tm": [
                "2000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5259",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14472",
                "14474"
            ]
        },
        {
            "grp": "s14",
            "root": "14006T",
            "filename": "s14006t.htm",
            "title": "SINGLE REDUCTION CARRIERS: ROCKWELL",
            "tm": [
                "2000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5080T",
            "startdate": "",
            "enddate": "",
            "vendor": "ROCKWELL",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14040",
                "14051",
                "14052",
                "14ARB",
                "14ARC",
                "14ARD",
                "14ARG",
                "14ARH",
                "14ARJ",
                "14ARS",
                "14ARV",
                "14ARW",
                "14ARX",
                "14ARY",
                "14ARZ",
                "14ASA",
                "14ASB",
                "14ASC",
                "14ASD",
                "14GRA",
                "14GRB",
                "14GRC",
                "14GRD",
                "14GRE",
                "14GRG",
                "14GRH",
                "14GRN",
                "14GRP",
                "14GRR",
                "14GRS",
                "14GRU",
                "14GRW",
                "14GRY",
                "14GRZ",
                "14GSA",
                "14GSB",
                "14GSC",
                "14GSE",
                "14GSG",
                "14GSH",
                "14GSU",
                "14GSX",
                "14GTD",
                "14GTH",
                "14GTJ",
                "14GTL",
                "14GTM",
                "14GTN",
                "14GTP",
                "14GTR",
                "14GTS",
                "14GTT",
                "14GTU"
            ]
        },
        {
            "grp": "s14",
            "root": "14007T",
            "filename": "s14007t.htm",
            "title": "SINGLE SPEED AXLE: SPICER",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5095t",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14ACD",
                "14ADW",
                "14ADZ",
                "14036",
                "14044",
                "14047",
                "14057",
                "14437"
            ]
        },
        {
            "grp": "s14",
            "root": "14008T",
            "filename": "s14008t.htm",
            "title": "SINGLE SPEED REAR AXLE: INTERNATIONAL",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5108t",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14ACA",
                "14ACE",
                "14ACG",
                "14ADB",
                "14ADC",
                "14ADD",
                "14ADH",
                "14ADK",
                "14ADL",
                "14ADM",
                "14ADV",
                "14ADY"
            ]
        },
        {
            "grp": "s14",
            "root": "14009",
            "filename": "s14009.htm",
            "title": "SINGLE REDUCTION, TANDEM AXLE: INTERNATIONAL",
            "tm": [
                "2000",
                "4000",
                "7000",
                "8000",
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5124",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14GDA",
                "14GDC"
            ]
        },
        {
            "grp": "s14",
            "root": "14010",
            "filename": "s14010.htm",
            "title": "SINGLE REDUCTION AXLES WITH CONTROLLED TRACTION DIFFERENTIALS: EATON",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5194",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14AED",
                "14AEK",
                "14AEL",
                "14AER",
                "14AEU",
                "14AEZ",
                "14GEH",
                "14GEJ",
                "14GEL",
                "14GEM",
                "14GEZ",
                "14GJA",
                "14GJB",
                "14088",
                "14095"
            ]
        },
        {
            "grp": "s14",
            "root": "14011",
            "filename": "s14011.htm",
            "title": "ROCKWELL TANDEM AXLE FORWARD REAR DRIVE UNITS",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5199",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14GRA",
                "14GRB",
                "14GRC",
                "14GRD",
                "14GRN",
                "14GRP",
                "14GRR",
                "14GRS",
                "14GRU",
                "14GRW",
                "14GRZ",
                "14GSB",
                "14GSG",
                "14GSU",
                "14GSX",
                "14GTG",
                "14GTH"
            ]
        },
        {
            "grp": "s14",
            "root": "14012",
            "filename": "s14012.htm",
            "title": "SINGLE REDUCTION, SINGLE DRIVE AXLES: EATON",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5209",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14AEB",
                "14AEE",
                "14AEG",
                "14AEH",
                "14AEJ",
                "14AEK",
                "14AEL",
                "14AEP",
                "14AER",
                "14AEW",
                "14AEX",
                "14AEY",
                "14AGA",
                "14AGB",
                "14GJA",
                "14GJB",
                "14097"
            ]
        },
        {
            "grp": "s14",
            "root": "14013",
            "filename": "s14013.htm",
            "title": "SINGLE REDUCTION, TANDEM DRIVE AXLES: EATON",
            "tm": [
                "2000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5213",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14GEP",
                "14GER",
                "14GES",
                "14GET",
                "14GEZ"
            ]
        },
        {
            "grp": "s14",
            "root": "14014",
            "filename": "s14014.htm",
            "title": "SINGLE REDUCTION, SINGLE SPEED AXLES: SPICER D135-S, F155-S, F170-S SERIES",
            "tm": [
                "1000",
                "3000",
                "4000",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5233",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14ADA",
                "14ADE",
                "14ADJ",
                "14029",
                "14030",
                "14039"
            ]
        },
        {
            "grp": "s14",
            "root": "14015",
            "filename": "s14015.htm",
            "title": "2 SPEED REAR AXLES: SPICER",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "7000"
            ],
            "engfam": [],
            "formnum": "CTS-5193",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14CDA",
                "14CDB",
                "14130",
                "14131",
                "14132",
                "14133"
            ]
        },
        {
            "grp": "s14",
            "root": "14016",
            "filename": "s14016.htm",
            "title": "2 SPEED AND DOUBLE REDUCTION SINGLE DRIVE AXLES: EATON",
            "tm": [
                "2000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5195",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14CEA",
                "14CEB",
                "14CEJ",
                "14CEK",
                "14EEB",
                "14EEC",
                "14EED",
                "14EEH",
                "14GEC",
                "14GED",
                "14GEL",
                "14GEW",
                "14282",
                "14309"
            ]
        },
        {
            "grp": "s14",
            "root": "14017V",
            "filename": "s14017v.htm",
            "title": "SINGLE REDUCTION AXLES: SPICER S100-S, S105-S, S135-S, S150-S",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5239",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14ACB",
                "14ADN",
                "14ADP",
                "14AHS"
            ]
        },
        {
            "grp": "s14",
            "root": "14019",
            "filename": "s14019.htm",
            "title": "LIFT AXLE SYSTEMS",
            "tm": [
                "7400",
                "7500",
                "7600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "14020",
            "filename": "s14020.htm",
            "title": "CF 500, CF 600 Rear Axle",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14ACK",
                "14ACL"
            ]
        },
        {
            "grp": "s15",
            "root": "15001",
            "filename": "s15001.htm",
            "title": "DUAL DRAW DUAL RETURN FUEL TANKS",
            "tm": [
                "4000",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "8500",
                "8600",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5245",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s15",
            "root": "15002",
            "filename": "s15002.htm",
            "title": "CF 500, CF 600 Fuel Tanks",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "15DPB",
                "15SGY",
                "15SGZ"
            ]
        },
        {
            "grp": "s16",
            "root": "16001",
            "filename": "s16001.htm",
            "title": "MAJOR STRUCTURAL REPAIR: 9600",
            "tm": [
                "9000",
                "9600"
            ],
            "engfam": [],
            "formnum": "CTS-4338",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16000"
            ]
        },
        {
            "grp": "s16",
            "root": "16002",
            "filename": "s16002.htm",
            "title": "PAINT AND REFINISHING",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5139",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16003",
            "filename": "s16003.htm",
            "title": "REPAIR INSTRUCTIONS FOR FIBERGLASS AND PLASTIC (ABS) MATERIAL",
            "tm": [
                "2000",
                "3000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5173",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16005V",
            "filename": "s16005v.htm",
            "title": "CAB: 5000, 9100, 9200, 9300, 9400",
            "tm": [
                "5000",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5024V",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16006",
            "filename": "s16006.htm",
            "title": "CAB - TILT: 9600 AND 9700 SLEEPER AND NON-SLEEPER CABS",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5129",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16007S",
            "filename": "s16007s.htm",
            "title": "CAB: 2000, 4000, AND 8000",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5130S",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16030"
            ]
        },
        {
            "grp": "s16",
            "root": "16008",
            "filename": "s16008.htm",
            "title": "ADD-ON SLEEPER BOX",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5152",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16009",
            "filename": "s16009.htm",
            "title": "AERODYNAMIC PANELS",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5153",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16010",
            "filename": "s16010.htm",
            "title": "AERODYNAMIC PANELS",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "CTS-5155",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16012V",
            "filename": "s16012v.htm",
            "title": "AIR CONDITIONING BASIC THEORY, SYSTEM DIAGNOSIS AND SERVICE (WITH R-12 REFRIGERANT SYSTEM)",
            "tm": [
                "5000",
                "9000",
                "9200",
                "9300",
                "9400",
                "2000",
                "4000",
                "8000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5062",
            "startdate": "",
            "enddate": "01/01/1993",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16013J",
            "filename": "s16013j.htm",
            "title": "AIR CONDITIONING COMPRESSOR AND CLUTCH TWO CYLINDER RECIPROCATING TYPE - BEFORE 01/01/1993 (R-12)",
            "tm": [
                "5000",
                "9000",
                "9200",
                "9300",
                "9400",
                "2000",
                "4000",
                "8000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "CTS-5068J",
            "startdate": "",
            "enddate": "01/01/1993",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16014",
            "filename": "s16014.htm",
            "title": "AIR CONDITIONING - HEATER SYSTEM: 2000, 4000, AND 8000 - Before 12/06/1994",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "CTS-5069",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16015",
            "filename": "s16015.htm",
            "title": "AIR CONDITIONING - HEATER SYSTEM: 5000, 9000 Series Without Lowered heater Box",
            "tm": [
                "5000",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800",
                "9900"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "11/30/1992",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16016",
            "filename": "s16016.htm",
            "title": "AIR CONDITIONING - HEATER SYSTEM: 2000, 4000, AND 8000 - 12/06/1994 and After",
            "tm": [
                "2000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "CTS-5227",
            "startdate": "12/06/1994",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16017X",
            "filename": "s16017x.htm",
            "title": "AIR CONDITIONING COMPRESSOR AND CLUTCH, TWO CYLINDER RECIPROCATING TYPE - After 01/01/1993 (R-134a)",
            "tm": [
                "5000",
                "9000",
                "9200",
                "9300",
                "9400",
                "1000",
                "2000",
                "4000",
                "8000",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5241",
            "startdate": "11/29/1992",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16000"
            ]
        },
        {
            "grp": "s16",
            "root": "16018",
            "filename": "s16018.htm",
            "title": "CAB - TILT: 9800",
            "tm": [
                "9000",
                "9800"
            ],
            "engfam": [],
            "formnum": "CTS-5232",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16019",
            "filename": "s16019.htm",
            "title": "AIR CONDITIONING BASIC THEORY, SYSTEM DIAGNOSIS AND SERVICE (with R-134a Refrigerant System)",
            "tm": [
                "1000",
                "2000",
                "4000",
                "5000",
                "5000I",
                "8000",
                "9000",
                "9100",
                "9000I",
                "9100I",
                "9200",
                "9200I",
                "9300",
                "9400",
                "9400I",
                "9600",
                "9700",
                "9800",
                "9900",
                "9900I"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "11/30/1992",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16020",
            "filename": "s16020.htm",
            "title": "AIR CONDITIONING - HEATER SYSTEM: 9000 Pro Sleeper After 05/01/1997, and 9800 Model After 07/01/1997",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400",
                "9800",
                "9900"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "05/01/1997",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16021",
            "filename": "s16021.htm",
            "title": "CAB: 5000i AND 9000i CONVENTIONAL",
            "tm": [
                "5000I",
                "5500I",
                "5600I",
                "5900I",
                "9000I",
                "9100I",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16022Y",
            "filename": "s16022y.htm",
            "title": "AIR CONDITIONING PROTECTION AND DIAGNOSTIC SYSTEM (APAds) DESCRIPTION, OPERATION, TROUBLESHOOTING, REMOVE, INSTALL, AND ELECTRICAL CIRCUIT DIAGRAMS MAINTENANCE MANUAL",
            "tm": [
                "4000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9800",
                "9900"
            ],
            "engfam": [],
            "formnum": "CTS-5294",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": true,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16023",
            "filename": "s16023.htm",
            "title": "AIR CONDITIONING - HEATER SYSTEM: 5000i, 9100i, 9200i, 9400i, 9900i MODELS - Starting 03/01/1999",
            "tm": [
                "5000I",
                "9000I",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "03/01/1999",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16024",
            "filename": "s16024.htm",
            "title": "SKIRT PANELS, AERO SIDE SKIRT PANELS, BODY AIR DEFLECTORS, BUMPERS AND ROOFS",
            "tm": [
                "9000I",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16025",
            "filename": "s16025.htm",
            "title": "HEAT VENTILATION AIR CONDITIONING (HVAC), Orifice Tube System, Pre-March 2007 - 3200, 4100, 4200, 4300, 4400, 7300, 7400, 7500, 7600, 7700, 8500, 8600",
            "tm": [
                "3200",
                "4100",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "160263",
            "filename": "s160263.htm",
            "title": "CAB: 4100, 4200, 4300 AND 4400 MODELS",
            "tm": [
                "4100",
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16027",
            "filename": "s16027.htm",
            "title": "SERVICE CAB",
            "tm": [
                "4100",
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16028",
            "filename": "s16028.htm",
            "title": "WEST COAST MAGNUM MIRRORS AND AERO MIRRORS",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16WRT",
                "16WRU",
                "16WRV",
                "16WRW",
                "16WSM",
                "16WSP"
            ]
        },
        {
            "grp": "s16",
            "root": "160295",
            "filename": "s160295.htm",
            "title": "CAB: 7300, 7400, 7500, 7600, 7700, 8500 AND 8600 MODELS",
            "tm": [
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16030",
            "filename": "s16030.htm",
            "title": "CF 500, CF 600 Heat Ventilation Air Conditioning (HVAC) System",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "05/01/2005",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16VBV",
                "16WLN"
            ]
        },
        {
            "grp": "s16",
            "root": "16031",
            "filename": "s16031.htm",
            "title": "CF 500, CF 600 Entertainment System",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08RGD",
                "08RGW",
                "08RGX",
                "08RHM",
                "08787"
            ]
        },
        {
            "grp": "s16",
            "root": "16032",
            "filename": "s16032.htm",
            "title": "CF 500, CF 600 Cab",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16AAK",
                "16LBA",
                "16LBL",
                "16LJU",
                "16LJV",
                "16PJA",
                "16PJB",
                "16PPR",
                "16PPS",
                "16SEU",
                "16WJU",
                "16WRX",
                "16WRZ"
            ]
        },
        {
            "grp": "s16",
            "root": "16033",
            "filename": "s16033.htm",
            "title": "CAB: DAYCAB AND SLEEPER CAB for ProStar, ProStar Premium, and ProStar Limited Models",
            "tm": [
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16034",
            "filename": "s16034.htm",
            "title": "HEAT VENTILATION AIR CONDITIONING (HVAC), Thermostatic Expansion Valve (TXV)  System, March 2007 and Later",
            "tm": [
                "3200",
                "4100",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "CXT",
                "RXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16036",
            "filename": "s16036.htm",
            "title": "CAB - MXT",
            "tm": [
                "MXT"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16037",
            "filename": "s16037.htm",
            "title": "No Idle APU/HVAC System",
            "tm": [
                "9000I",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12WTK",
                "12WTN",
                "16UZV"
            ]
        },
        {
            "grp": "s16",
            "root": "16038",
            "filename": "s16038.htm",
            "title": "CAB: 7000 AND 8000 SERIES MODELS",
            "tm": [
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "16039",
            "filename": "s16039.htm",
            "title": "HEAT VENTILATION AIR CONDITIONING (HVAC) SYSTEM - ProStar",
            "tm": [
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s17",
            "root": "17001Y",
            "filename": "s17001y.htm",
            "title": "WHEELS, RIMS AND TIRES",
            "tm": [],
            "engfam": [],
            "formnum": "CTS-5017",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s17",
            "root": "17002",
            "filename": "s17002.htm",
            "title": "CF 500, CF 600 Wheels and Tires",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "27DAU",
                "27DAV"
            ]
        },
        {
            "grp": "s17",
            "root": "17003",
            "filename": "s17003.htm",
            "title": "Tire Pressure Monitoring System (Feature Code 16VCM)",
            "tm": [],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16VCM"
            ]
        },
        {
            "grp": "s47",
            "root": "47001Y",
            "filename": "s47001y.htm",
            "title": "IC BUS SERVICE MANUAL",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "47003",
            "filename": "s47003.htm",
            "title": "FE 300 BUS BODY COMPONENTS",
            "tm": [
                "FE 300",
                "FE BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "47004",
            "filename": "s47004.htm",
            "title": "CE 200 AND CE 300 BUS BODY COMPONENTS",
            "tm": [
                "CE 200",
                "CE 300",
                "CE BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "47005",
            "filename": "s47005.htm",
            "title": "RE 200, RE 300 BUS BODY COMPONENTS",
            "tm": [
                "RE 200",
                "RE 300",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "47006",
            "filename": "s47006.htm",
            "title": "BE 200 BUS FRONT END AND BODY COMPONENTS",
            "tm": [
                "BE 200"
            ],
            "engfam": [],
            "formnum": "",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        }
    ],
    "engine": [
        {
            "grp": "s12",
            "root": "105",
            "filename": "e105.htm",
            "title": "530 and DT-466/408 Diesel Engine",
            "tm": [
                "1000",
                "2000",
                "3000",
                "3600",
                "4000",
                "5000",
                "8000"
            ],
            "engfam": [
                "DT 408",
                "DT 466",
                "530"
            ],
            "formnum": "EGES-105-1",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "110",
            "filename": "e110.htm",
            "title": "530 and DT-466/408 Diesel Engine Diagnostics (1993)",
            "tm": [
                "1000",
                "2000",
                "3000",
                "3600",
                "4000",
                "5000",
                "8000"
            ],
            "engfam": [
                "DT 408",
                "DT 466",
                "530"
            ],
            "formnum": "EGES-110",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "125",
            "filename": "e125.htm",
            "title": "T 444E Diesel Engine Diagnostics (1997)",
            "tm": [
                "1000",
                "3000",
                "3600",
                "4000"
            ],
            "engfam": [
                "T 444E"
            ],
            "formnum": "EGES-125-1",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "145",
            "filename": "e145.htm",
            "title": "DT-466E and 530E Diesel Engine Diagnostics (1995)",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "5000",
                "8000"
            ],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "EGES-145",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "160",
            "filename": "e160.htm",
            "title": "DT-466E and 530E Diesel Engine Service (1995 through 1999)",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "5000",
                "8000"
            ],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "EGES-160-2",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "175",
            "filename": "e175.htm",
            "title": "DT-466E and 530E Diesel Engine / Vehicle Diagnostics",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "EGES-175",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "190",
            "filename": "e190.htm",
            "title": "T 444E Diesel Engine Diagnostics (NAVPAK) (1997)",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "EGES-190",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "415",
            "filename": "e415.htm",
            "title": "DT/DTA-466 Diesel Engine Service (1990)",
            "tm": [],
            "engfam": [
                "DT 466",
                "DTA 466"
            ],
            "formnum": "CGES 415-3",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "435",
            "filename": "e435.htm",
            "title": "7.3 Liter Diesel Engine Service (1991)",
            "tm": [
                "1000",
                "3000",
                "3600"
            ],
            "engfam": [
                "7.3L"
            ],
            "formnum": "CGES-435-1",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "450",
            "filename": "e450.htm",
            "title": "DT/DTI-466 A and B Series DT/DTI/DTA-466 C Diesel Engine Diagnostics (1993)",
            "tm": [
                "2000",
                "3000",
                "3900",
                "4000",
                "5000",
                "8000"
            ],
            "engfam": [
                "DT 466",
                "DTA 466"
            ],
            "formnum": "CGES-450-3",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "460",
            "filename": "e460.htm",
            "title": "7.3 Liter Diesel Engine Diagnostics (1991)",
            "tm": [
                "1000",
                "3000",
                "3600"
            ],
            "engfam": [
                "7.3L"
            ],
            "formnum": "CGES-460",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "GES1201",
            "filename": "eges1201.htm",
            "title": "International T 444E Diesel Engine Service, Model Year 1994 - 1998",
            "tm": [
                "1000",
                "3000",
                "3600",
                "4000"
            ],
            "engfam": [
                "T 444E"
            ],
            "formnum": "EGES-120-1",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "GES1751",
            "filename": "eges1751.htm",
            "title": "DT-466E and 530E Diesel Engine Diagnostics Model Years 1999-2000",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "EGES-175-1",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "GES205",
            "filename": "eges205.htm",
            "title": "International T 444E Diesel Engine - Model Years Late 1997 to 2003",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "EGES-205",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "GES2101",
            "filename": "eges2101.htm",
            "title": "International DT 466E, DT 466, 530, 530E, and HT 530 Diesel Engines",
            "tm": [],
            "engfam": [
                "DT 466E",
                "DT 466",
                "530",
                "530E",
                "HT 530"
            ],
            "formnum": "EGES-210-1",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "GES215",
            "filename": "eges215.htm",
            "title": "DT 466 / DT 530 Engine Diagnostic Manual for 4000 Series Trucks (2001)",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 530",
                "HT 530"
            ],
            "formnum": "EGES-215",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "GES2352",
            "filename": "eges2352.htm",
            "title": "INTERNATIONAL VT 365 DIESEL ENGINE",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "EGES235-2",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "GES240",
            "filename": "eges240.htm",
            "title": "VT-365 Diesel Engine Diagnostics (2002)",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "EGES-240",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "GES2651",
            "filename": "eges2651.htm",
            "title": "DT 466 / DT 570 / HT 570 Service Manual - 2004 Emissions with EGR",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "EGES-265-1",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "GES270",
            "filename": "eges270.htm",
            "title": "DT 466 / DT 570 / HT 570 Diesel Engine Diagnostic Manual - 2004 Emissions with EGR",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "EGES-270",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "GES2952",
            "filename": "eges2952.htm",
            "title": "VT 365 Diesel Engine - 2004 Model Year",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "EGES-295-2",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "GES3001",
            "filename": "eges3001.htm",
            "title": "VT 275 Engine Service Manual",
            "tm": [],
            "engfam": [
                "VT 275"
            ],
            "formnum": "EGES-300-1",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "GES3052",
            "filename": "eges3052.htm",
            "title": "VT 275 Engine Diagnostics Manual",
            "tm": [],
            "engfam": [
                "VT 275"
            ],
            "formnum": "EGES-305-2",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "GES3351",
            "filename": "eges3351.htm",
            "title": "International MaxxForce DT, 9 and 10 Engine Service Manual",
            "tm": [],
            "engfam": [
                "MAXXFORCE DT",
                "MAXXFORCE 9",
                "MAXXFORCE 10"
            ],
            "formnum": "EGES-335-1",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "GES3451",
            "filename": "eges3451.htm",
            "title": "International MaxxForce 7 Engine Service Manual",
            "tm": [],
            "engfam": [
                "MAXXFORCE 7"
            ],
            "formnum": "EGES-345-1",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "GES390",
            "filename": "eges390.htm",
            "title": "International MaxxForce 5 Engine Service Manual",
            "tm": [],
            "engfam": [
                "MAXXFORCE 5"
            ],
            "formnum": "EGES-390",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        }
    ],
    "recall": [
        {
            "grp": "s01",
            "root": "02301",
            "filename": "02301_1.xml",
            "title": "Between the Rail Fuel Tank System Crossmember",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "02301",
            "startdate": "08/10/2001",
            "enddate": "05/12/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s01",
            "root": "99509",
            "filename": "99509_1.xml",
            "title": "Cross Member Interference with ABS ECU on 3800 Models",
            "tm": [
                "3800"
            ],
            "engfam": [],
            "formnum": "99509",
            "startdate": "04/02/1998",
            "enddate": "05/06/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "08504",
            "filename": "08504_1.xml",
            "title": "FRONT AXLE BEARINGS on Certain 4000 Truck and 3000RE, FBC, and SFC Bus Models built 12/3/07 thru 1/25/08",
            "tm": [
                "3000 RE",
                "4100",
                "4300",
                "4400",
                "FBC BUS",
                "SFC BUS"
            ],
            "engfam": [],
            "formnum": "08504",
            "startdate": "12/03/2007",
            "enddate": "01/25/2008",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "04517",
            "filename": "04517_1.xml",
            "title": "TIE ROD ARMS on certain 9200i, 9400i, and 9900i models built 11/1/2002 thru 6/16/2003",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04517-R1",
            "startdate": "11/01/2002",
            "enddate": "06/16/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02ARV"
            ]
        },
        {
            "grp": "s02",
            "root": "01510",
            "filename": "01510_1.xml",
            "title": "TRW Tie Rod Ends on Certain 2000, 4000, 5000, 8000 and 9000 model series built from 6/15/1999 through 8/15/2000",
            "tm": [
                "2000",
                "4000",
                "5000",
                "8000",
                "9000"
            ],
            "engfam": [],
            "formnum": "01510 Revised",
            "startdate": "06/15/1999",
            "enddate": "08/15/2000",
            "vendor": "TRW",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "01507",
            "filename": "01507_1.xml",
            "title": "Steering Knuckles On Dana I-200 Front Steer Axles On Vehicles Built From 4/2/01 Through 4/20/01",
            "tm": [
                "2000",
                "4000",
                "5000",
                "5500I",
                "8100",
                "9000",
                "9200I"
            ],
            "engfam": [],
            "formnum": "01507",
            "startdate": "04/02/2001",
            "enddate": "04/20/2001",
            "vendor": "DANA",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "99505",
            "filename": "99505_1.xml",
            "title": "9000 Conventional and Cabover Series",
            "tm": [
                "9000"
            ],
            "engfam": [],
            "formnum": "99505",
            "startdate": "02/01/1996",
            "enddate": "05/31/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "99503",
            "filename": "99503_1.xml",
            "title": "Inner Wheel Bearings on 16,000, 18,000, 20,000, or 22,000 Pound Steer Axles",
            "tm": [
                "2000",
                "4000",
                "5000",
                "8000",
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "99503",
            "startdate": "03/01/1998",
            "enddate": "10/16/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "99501",
            "filename": "99501_1.xml",
            "title": "Tie Rod Separation on 6000 and 8000 Pound Capacity Dana Spicer Steer Axle",
            "tm": [
                "1000",
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "99501",
            "startdate": "05/01/1996",
            "enddate": "10/31/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "98505",
            "filename": "98505_1.xml",
            "title": "Tie Rod Arm Fracture on Fabco Front Drive Axles",
            "tm": [
                "4000"
            ],
            "engfam": [],
            "formnum": "98505",
            "startdate": "04/01/1992",
            "enddate": "04/30/1995",
            "vendor": "FABCO",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "95505",
            "filename": "95505_1.xml",
            "title": "Low Torque on Tie Rod Ends - Rockwell FF942, FF961 and FL941 Front Steer Axles",
            "tm": [
                "2000",
                "4000",
                "5000",
                "8000",
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "95505",
            "startdate": "03/02/1995",
            "enddate": "03/20/1995",
            "vendor": "ROCKWELL",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "05512",
            "filename": "05512_1.xml",
            "title": "Holland USA (Neway) AD Series Rear Air Suspension Systems on certain 5000 and 9000 Series Models built 1/6/2004 thru 1/27/2005",
            "tm": [
                "5000",
                "5600I",
                "5900I",
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "05512",
            "startdate": "01/06/2004",
            "enddate": "01/27/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "04520",
            "filename": "04520_1.xml",
            "title": "MOUNTING BOLTS on IROS equipped 3200, 4200, 4300, and 4400 models built 8/23/2004 thru 10/1/2004",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "04520",
            "startdate": "08/23/2004",
            "enddate": "10/01/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "03517",
            "filename": "03517_1.xml",
            "title": "Goodrich Corporation's VELVET-RIDE Suspension Installed on 4700 Low Profile Models built between 12/02/1993 and 4/18/2001",
            "tm": [
                "4700"
            ],
            "engfam": [],
            "formnum": "03517R1",
            "startdate": "12/02/1993",
            "enddate": "04/18/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "02501",
            "filename": "02501_1.xml",
            "title": "Under-Torqued Mounting Bolts on International Ride Optimized Air Suspensions (IROS) on 4300 and 4400 Models Built from 10/24/00 through 10/30/01",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "02501",
            "startdate": "10/24/2000",
            "enddate": "10/30/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14TBG",
                "14TBH",
                "14TBJ",
                "14TBL",
                "14TBM",
                "14TBN"
            ]
        },
        {
            "grp": "s04",
            "root": "08503",
            "filename": "08503_1.xml",
            "title": "BENDIX MV-3 DASH CONTROL VALVE on certain 4000, 5000, 7000, 8000, 9000, and ProStar models built 1/15/2008 thru 2/7/2008",
            "tm": [
                "4300",
                "4400",
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "08503",
            "startdate": "01/15/2008",
            "enddate": "02/07/2008",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "07513",
            "filename": "07513_1.xml",
            "title": "RUBBER DROP HOSE Assemblies on Certain FE school and commercial buses built 3/29/2007 thru 8/28/2007",
            "tm": [
                "FE BUS"
            ],
            "engfam": [],
            "formnum": "07513",
            "startdate": "03/29/2007",
            "enddate": "08/28/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "07511",
            "filename": "07511_1.xml",
            "title": "SR-7 SPRING BRAKE MODULATING VALVE on certain 5900i, 7000 and 8600 Models built 11/1/2005 thru 4/30/2007",
            "tm": [
                "5000",
                "5900I",
                "7400",
                "7500",
                "7600",
                "7700",
                "8600"
            ],
            "engfam": [],
            "formnum": "07511",
            "startdate": "11/01/2005",
            "enddate": "04/30/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04WDT"
            ]
        },
        {
            "grp": "s04",
            "root": "07509",
            "filename": "07509_1.xml",
            "title": "SLACK ADJUSTER INTERFERENCE on certain 7400 and 7500 Models built 10/11/2004 thru 2/22/2007",
            "tm": [
                "7400",
                "7500"
            ],
            "engfam": [],
            "formnum": "07509",
            "startdate": "10/11/2004",
            "enddate": "02/22/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04WDW"
            ]
        },
        {
            "grp": "s04",
            "root": "07504",
            "filename": "07504_1.xml",
            "title": "AIR BRAKE TUBING on 4300 and 4400 tractors built 6/21/2004 thru 2/21/2007",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "07504",
            "startdate": "06/21/2004",
            "enddate": "02/21/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04092",
                "04AZG"
            ]
        },
        {
            "grp": "s04",
            "root": "06506",
            "filename": "06506_1.xml",
            "title": "SR-7 SPRING BRAKE MODULATING VALVE on certain 4000 and 7000 Models built 4/6/2006 thru 6/9/2006",
            "tm": [
                "4400",
                "7400",
                "7500",
                "7600",
                "7700"
            ],
            "engfam": [],
            "formnum": "06506-R1",
            "startdate": "04/06/2006",
            "enddate": "06/09/2006",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "06504",
            "filename": "06504_1.xml",
            "title": "FULL POWER PARK BRAKE SYSTEM on 1300 FBC, 3300, CE and BE Models built 3/17/2004 thru 5/15/2006 with Feature Codes 0004085 AND 0004GAW",
            "tm": [
                "1000",
                "1300",
                "3300",
                "CE 200",
                "CE 300",
                "BE 200"
            ],
            "engfam": [],
            "formnum": "06504",
            "startdate": "03/17/2004",
            "enddate": "05/15/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04085",
                "04GAW"
            ]
        },
        {
            "grp": "s04",
            "root": "05525",
            "filename": "05525_1.xml",
            "title": "NONCOMPLIANCE RECALL: Rear-Rear Axle Brake Timing on 5600i and 5900i Tridems Built 8/1/2001 thru 9/23/2005",
            "tm": [
                "5000",
                "5600I",
                "5900I"
            ],
            "engfam": [],
            "formnum": "05525",
            "startdate": "08/01/2001",
            "enddate": "09/23/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "05522",
            "filename": "05522_1.xml",
            "title": "SAFETY RECALL on Certain RE School and Commercial Bus Models with Between-the-Frame-Rail Air Tanks Located Over the Front Axle built between 7/20/2005 and 10/17/2005",
            "tm": [
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "05522",
            "startdate": "07/20/2005",
            "enddate": "10/17/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "05518",
            "filename": "05518_1.xml",
            "title": "Driveline Park Brake on certain 1300 FBC, 3000, 4000 and CE BUS Models built 6/4/2004 thru 3/31/2005",
            "tm": [
                "1000",
                "1300 FBC",
                "3200",
                "3300",
                "4200",
                "4300",
                "4400",
                "CE 200",
                "CE 300"
            ],
            "engfam": [],
            "formnum": "05518-R1",
            "startdate": "06/04/2004",
            "enddate": "03/31/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "05515",
            "filename": "05515_1.xml",
            "title": "Front Brake Hoses on certain 4200 and 4300 Models built 1/22/2005 thru 1/24/2005",
            "tm": [
                "4200",
                "4300"
            ],
            "engfam": [],
            "formnum": "05515",
            "startdate": "01/22/2005",
            "enddate": "01/24/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "05513",
            "filename": "05513_1.xml",
            "title": "BRAKE PUSH ROD in Driver Control Module (DCM) on certain 3200, 4000, 7000, and 8000 Series Models built 4/5/2005 thru 5/19/2005",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "05513-R1",
            "startdate": "04/05/2005",
            "enddate": "05/19/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "05511",
            "filename": "05511_1.xml",
            "title": "FIFTH WHEEL AIR SLIDE CONTROL on certain 7000 and 8000 Series Models built 10/10/2001 thru 3/21/2005",
            "tm": [
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "05511-R2",
            "startdate": "10/10/2001",
            "enddate": "03/21/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "05504",
            "filename": "05504_1.xml",
            "title": "Brake Pedal Pivot Bolt Locknut on certain CE school bus models built between 4/27/2004 and 10/13/2004",
            "tm": [
                "CE BUS"
            ],
            "engfam": [],
            "formnum": "05504",
            "startdate": "04/27/2004",
            "enddate": "10/13/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04519",
            "filename": "04519_1.xml",
            "title": "NONCOMPLIANCE RECALL - AIR TANK CHECK VALVES on RE Busses built 4/1/2004 thru 6/16/2004 with feature code 0004VBX",
            "tm": [
                "RE BUS",
                "RE S BUS"
            ],
            "engfam": [],
            "formnum": "04519",
            "startdate": "04/01/2004",
            "enddate": "06/16/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04VBX"
            ]
        },
        {
            "grp": "s04",
            "root": "04515",
            "filename": "04515_1.xml",
            "title": "BRAKE GROUP ATTACHMENT on certain 9200i, 9400i, and 9900i models built 7/26/2004 thru 7/29/2004",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04515",
            "startdate": "07/26/2004",
            "enddate": "07/29/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04514",
            "filename": "04514_1.xml",
            "title": "PARK BRAKE ASSEMBLY on certain 3200, 4200, 4300, 4400 and CE School Bus models built 7/20/2004 thru 8/5/2004 with Hydraulic Brakes",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400",
                "CE BUS",
                "CE S BUS"
            ],
            "engfam": [],
            "formnum": "04514",
            "startdate": "07/20/2004",
            "enddate": "08/05/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04508",
            "filename": "04508_1.xml",
            "title": "Kelsey-Hayes (Lucas Varity or TRW) Anti-Lock Brake (ABS) Electronic Control Unit on 1552, 1652, 4700, and 4900 models built 2/28/1999 thru 3/25/2004",
            "tm": [
                "1000",
                "1552",
                "1652",
                "4700",
                "4900"
            ],
            "engfam": [],
            "formnum": "04508",
            "startdate": "02/28/1999",
            "enddate": "03/25/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04507",
            "filename": "04507_1.xml",
            "title": "Kelsey-Hayes (Lucas Varity or TRW) Anti-Lock Brake (ABS) Electronic Control Unit on 3400, 3800, RE, FE, and CE bus models built 2/28/1999 thru 4/5/2004",
            "tm": [
                "3000 RE",
                "3400",
                "3800",
                "CE BUS",
                "FE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "04507",
            "startdate": "02/28/1999",
            "enddate": "04/05/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04505",
            "filename": "04505_1.xml",
            "title": "NONCOMPLIANCE RECALL: Park Brake Relay Valve on 7400, 7500, and 7600 Models with Air Brakes built 2/8/2004 through 2/25/2004",
            "tm": [
                "7400",
                "7500",
                "7600"
            ],
            "engfam": [],
            "formnum": "04505",
            "startdate": "02/08/2004",
            "enddate": "02/25/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04501",
            "filename": "04501_1.xml",
            "title": "Bosch DiamondLife Zero Offset Pin Slide Hydraulic Disc Brakes on Certain Truck Models Built 10/28/1997 through 6/3/2002",
            "tm": [
                "4300",
                "4400",
                "4700",
                "4900"
            ],
            "engfam": [],
            "formnum": "04501-R2",
            "startdate": "10/28/1997",
            "enddate": "06/03/2002",
            "vendor": "BOSCH",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "03518",
            "filename": "03518_1.xml",
            "title": "Brake Pedals on All IC Buses Built from 3/12/2003 Through 10/20/2003 with Hydraulic Brakes",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "03518",
            "startdate": "03/12/2003",
            "enddate": "10/20/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "03515",
            "filename": "03515_1.xml",
            "title": "Air Compressor Discharge Tube on 3200 and 4200 Models Built 10/01/2002 through 9/15/2003 with V-8 Engines and Air Brakes or Air Operated Park Brakes (Feature Code: 04CAR) at the Springfield Assembly Plant",
            "tm": [
                "3200",
                "4200"
            ],
            "engfam": [],
            "formnum": "03515",
            "startdate": "10/01/2002",
            "enddate": "09/15/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04CAR"
            ]
        },
        {
            "grp": "s04",
            "root": "03514",
            "filename": "03514_1.xml",
            "title": "Air Tank Plumbing on 4200, 4300, and 4400 Family Models Built 8/27/2002 through 7/22/2003 with Side-by-Side Air Tanks  (Feature Code: 504602 ) at the Escobedo Assembly Plant",
            "tm": [
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "03514",
            "startdate": "08/27/2002",
            "enddate": "07/22/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "504602"
            ]
        },
        {
            "grp": "s04",
            "root": "03512",
            "filename": "03512_1.xml",
            "title": "Drag Link/Slack Adjuster Interference on 9900 Models Built 7/18/2002 through 6/18/2003 with the Following Front Axle and Front Brake Feature Codes:  Either 02ASD or 02ASE with 04JBG",
            "tm": [
                "9000",
                "9900"
            ],
            "engfam": [],
            "formnum": "03512",
            "startdate": "07/18/2002",
            "enddate": "06/18/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02ASD",
                "02ASE",
                "04JBG"
            ]
        },
        {
            "grp": "s04",
            "root": "03502",
            "filename": "03502_1.xml",
            "title": "Bosch DiamondLife Zero Offset Pin Slide Hydraulic Disc Brakes on Certain Bus Models Built 10/28/1997 through 6/3/2002",
            "tm": [
                "3000 FE",
                "3000 RE",
                "3200",
                "3400",
                "3600",
                "3800",
                "CE BUS",
                "FE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "03502-R1",
            "startdate": "10/28/1997",
            "enddate": "06/03/2002",
            "vendor": "BOSCH",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "03304",
            "filename": "03304_1.xml",
            "title": "Short Hydraulic Brake Hoses",
            "tm": [
                "CE BUS",
                "3000 FE"
            ],
            "engfam": [],
            "formnum": "03304",
            "startdate": "12/11/2000",
            "enddate": "05/22/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "02515",
            "filename": "02515_1.xml",
            "title": "Under-Torqued Brake Spider or Anchor Plate Mounting Bolts On The Right Side of Certain 9100i, 9200i, 9400i and 9900i Models Built Between 7/22/02 and 8/16/02",
            "tm": [
                "9000",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "02515",
            "startdate": "07/22/2002",
            "enddate": "08/16/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "02513",
            "filename": "02513_1.xml",
            "title": "Driveline Parking Brake May Not Function Properly On Certain 3200, 4200, 4300 and 4400 Models Built Between 11/16/00 and 4/19/02",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "02513",
            "startdate": "11/16/2000",
            "enddate": "04/19/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "02512",
            "filename": "02512_1.xml",
            "title": "TC-7 Hand Operated Trailer Brake Control Valve With Push-to-Connect Fittings May Have Slow Air Delivery and Exhaust on Certain 2000, 4000, 5000, 7000, 8000 and 9000 Models Built Between 4/24/02 and 6/21/02",
            "tm": [
                "2000",
                "4200",
                "4300",
                "4400",
                "4900",
                "5000",
                "7300",
                "7400",
                "7500",
                "8100",
                "8500",
                "8600",
                "9000"
            ],
            "engfam": [],
            "formnum": "02512",
            "startdate": "04/24/2002",
            "enddate": "06/21/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "02510",
            "filename": "02510_1.xml",
            "title": "Push in of Hydraulic Anti-lock Brake System (ABS) Wheel Speed Sensors, Brake Rotor Corrosion Evaluation and Functionality Check on Certain 1552, 1652, 3400, 3800, 4700, 4900 and FE, IC, CE and RE Bus Models",
            "tm": [
                "1000",
                "1552",
                "1652",
                "3400",
                "3800",
                "4700",
                "4900",
                "3000 FE",
                "3000 RE",
                "IC BUS",
                "CE BUS"
            ],
            "engfam": [],
            "formnum": "02510",
            "startdate": "03/01/1999",
            "enddate": "04/01/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "02506",
            "filename": "02506_1.xml",
            "title": "Installing A Repair Kit On Straight Trucks To Eliminate The Air Brake Fitting That Connects The Double Check Valve To The Relay Valve On Certain 2000, 4700, 4800, 4900, 5000, 8000, 9000 Series Built From 12/16/97 Through 03/04/02",
            "tm": [
                "2000",
                "4700",
                "4800",
                "4900",
                "5000",
                "8000",
                "9000"
            ],
            "engfam": [],
            "formnum": "02506",
            "startdate": "12/16/1997",
            "enddate": "03/04/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04091"
            ]
        },
        {
            "grp": "s04",
            "root": "02505",
            "filename": "02505_1.xml",
            "title": "Installing a repair kit to eliminate the air brake fitting that connects the double check valve to the relay valve on 3000 series, FE, RE and IC buses built from 3/1/98 through 2/07/02",
            "tm": [
                "3000",
                "3000 FE",
                "3000 RE",
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "02505 Revision A",
            "startdate": "03/01/1998",
            "enddate": "02/07/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "02502",
            "filename": "02502_1.xml",
            "title": "Hydraulic Brake Master Cylinders on FC, FE, and RE Buses Built From 05/21/91 through 11/08/96",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "02502",
            "startdate": "05/21/1991",
            "enddate": "11/08/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "02303",
            "filename": "02303_1.xml",
            "title": "Damaged Master Cylinders",
            "tm": [
                "1000",
                "1552",
                "1652",
                "3000 RE",
                "3000 FE",
                "CE BUS"
            ],
            "engfam": [],
            "formnum": "02303",
            "startdate": "07/09/2002",
            "enddate": "11/26/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "01513",
            "filename": "01513_1.xml",
            "title": "Secondary Air Lines On 5000i Models built  from 7/17/01 through 8/29/01",
            "tm": [
                "5000I"
            ],
            "engfam": [],
            "formnum": "01513",
            "startdate": "07/17/2001",
            "enddate": "08/29/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "01509",
            "filename": "01509_1.xml",
            "title": "NONCOMPLIANCE RECALL: Replacing The Parking Brake Lever Assembly On 4300 And 4400 Models Built Between October 24, 2000 And June 11, 2001 With Hydraulic Brakes",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01509",
            "startdate": "10/24/2000",
            "enddate": "06/11/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "0004083"
            ]
        },
        {
            "grp": "s04",
            "root": "01502",
            "filename": "01502_1.xml",
            "title": "Automatic Brake Adjuster Anchor Brackets On Air Brake Vehicles With Long Stroke Brake Chambers, Eaton / Spicer Brakes, And Built From 10/7/96 Through 11/14/00",
            "tm": [
                "8100",
                "9000",
                "9100",
                "9100I",
                "9200",
                "9200I",
                "9300",
                "9400",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "01502",
            "startdate": "10/07/1996",
            "enddate": "11/14/2000",
            "vendor": [
                "EATON",
                "SPICER"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "01501",
            "filename": "01501_1.xml",
            "title": "Changing the brake pedals on all 1652 stripped chassis built from 6/12/00 through 11/17/00 and all IC buses built from 3/2/00 through 12/4/00. All of these vehicles have hydraulic brakes and automatic transmissions.",
            "tm": [
                "1000",
                "1652",
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "01501",
            "startdate": "03/02/2000",
            "enddate": "12/04/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "00514",
            "filename": "00514_1.xml",
            "title": "NON-COMPLIANCE RECALL - Changing manual slack adjusters to automatic slack adjusters on 4700 models built from 1/6/95 through 4/28/95 with export code 10520",
            "tm": [
                "4700"
            ],
            "engfam": [],
            "formnum": "00514",
            "startdate": "01/06/1995",
            "enddate": "04/28/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "10520"
            ]
        },
        {
            "grp": "s04",
            "root": "00511",
            "filename": "00511_1.xml",
            "title": "Replacement of the Bendix EC-17 1030R Electronic Control Unit (ECU) for Air Brakes on 2000, 4000, 5000, 8000 and 9000 Model TRACTORS with Code 04092",
            "tm": [
                "2000",
                "4000",
                "5000",
                "8000",
                "9000"
            ],
            "engfam": [],
            "formnum": "00511A",
            "startdate": "03/01/1998",
            "enddate": "07/11/2000",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04092"
            ]
        },
        {
            "grp": "s04",
            "root": "00510",
            "filename": "00510_1.xml",
            "title": "Replacing the Bendix EC-17 1030R electronic control unit (ECU) for air brakes on 2000, 4000, 5000, 8000 and 9000 model STRAIGHT TRUCKS with code 04091",
            "tm": [
                "2000",
                "4000",
                "5000",
                "8000",
                "9000"
            ],
            "engfam": [],
            "formnum": "00510A",
            "startdate": "03/01/1998",
            "enddate": "07/11/2000",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "00509",
            "filename": "00509_1.xml",
            "title": "Replacement of the Bendix EC-17 1030R electronic control unit (ECU) for air brakes on 3400, 3600 and 3800 buses built at the Springfield Assembly Plant from 3/01/1998 through 6/16/2000",
            "tm": [
                "3400",
                "3600",
                "3800"
            ],
            "engfam": [],
            "formnum": "00509",
            "startdate": "03/01/1998",
            "enddate": "06/16/2000",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "00508",
            "filename": "00508_1.xml",
            "title": "Replacement of the Bendix EC-17 1030R electronic control unit (ECU) for air brakes on AmTran FE, RE, and IC buses built from 3/01/1998 through 7/13/2000",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "00508",
            "startdate": "03/01/1998",
            "enddate": "07/13/2000",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "00507",
            "filename": "00507_1.xml",
            "title": "Report of Bendix Defect to NHTSA",
            "tm": [],
            "engfam": [],
            "formnum": "00507",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "00505",
            "filename": "00505_1.xml",
            "title": "Routing and clipping of Bendix Antilock Braking System (ABS) wheel speed sensors wires in vehicles built  3/01/1998 through 5/29/2000",
            "tm": [],
            "engfam": [],
            "formnum": "00505",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "00501",
            "filename": "00501_1.xml",
            "title": "Bendix Antilock Traction Relay Valves (ATR-1 & AT-1) on 2574, 2674, 5000, 8100, 9100, 9100i, 9200, 9200i, 9400, 9400i, 9800, 9900, and 9900i models built from 3/29/99 through 5/31/99 with Navistar codes 04AZJ and 04091 or 04092",
            "tm": [
                "2000",
                "2574",
                "2674",
                "5000",
                "8100",
                "9000",
                "9100",
                "9100I",
                "9200",
                "9200I",
                "9400",
                "9400I",
                "9800",
                "9900",
                "9900I"
            ],
            "engfam": [],
            "formnum": "00501",
            "startdate": "03/29/1999",
            "enddate": "05/31/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04AZJ",
                "04091",
                "04092"
            ]
        },
        {
            "grp": "s04",
            "root": "99513",
            "filename": "99513_1.xml",
            "title": "Air Brake S-cam Interference on Front Drive Axles (02064) and Installed on 4800 and 4900 Models",
            "tm": [
                "4800",
                "4900"
            ],
            "engfam": [],
            "formnum": "99513",
            "startdate": "05/04/1994",
            "enddate": "08/11/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02064"
            ]
        },
        {
            "grp": "s04",
            "root": "99512",
            "filename": "99512_1.xml",
            "title": "Quality Connect Check Valves in the Primary and Secondary Air Tanks on 9000i Models Built 06/21/99 through 07/20/99",
            "tm": [
                "9000I"
            ],
            "engfam": [],
            "formnum": "99512",
            "startdate": "06/21/1999",
            "enddate": "07/20/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "99511",
            "filename": "99511_1.xml",
            "title": "Air Brake Line Interference with Exhaust on 3800 and AmTran FE Buses",
            "tm": [
                "3000",
                "3800"
            ],
            "engfam": [],
            "formnum": "99511",
            "startdate": "08/12/1997",
            "enddate": "09/27/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "99508",
            "filename": "99508_1.xml",
            "title": "Rear Hydraulic ABS Drop Hoses on 3400, 3800, 4700, 4900 Models",
            "tm": [
                "3400",
                "3800",
                "4700",
                "4900"
            ],
            "engfam": [],
            "formnum": "99508",
            "startdate": "12/09/1998",
            "enddate": "05/18/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "99507",
            "filename": "99507_1.xml",
            "title": "Hydraulic Park Brake Hoses on 4700 Models",
            "tm": [
                "4700"
            ],
            "engfam": [],
            "formnum": "99507",
            "startdate": "06/02/1997",
            "enddate": "09/03/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04GAG"
            ]
        },
        {
            "grp": "s04",
            "root": "99504",
            "filename": "99504_1.xml",
            "title": "Meritor Brake Automatic Slack Adjusters",
            "tm": [],
            "engfam": [],
            "formnum": "99504",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04753",
                "04LAB",
                "504302",
                "504306",
                "04754",
                "504355",
                "804MAG"
            ]
        },
        {
            "grp": "s04",
            "root": "99302",
            "filename": "99302_1.xml",
            "title": "Brake Mounting Nuts to Rear Axle",
            "tm": [
                "1000",
                "3000"
            ],
            "engfam": [],
            "formnum": "99302",
            "startdate": "10/16/1998",
            "enddate": "02/09/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "98506",
            "filename": "98506_1.xml",
            "title": "3800, 4700, and 4900 Series Vehicles with a 1710 Series Driveline and a 12 X 4 Parking Brake",
            "tm": [
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "98506",
            "startdate": "07/01/1997",
            "enddate": "07/31/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "98501",
            "filename": "98501_1.xml",
            "title": "Air Compressor Discharge Line on Caterpillar C10 and C12 Engines on 9100 and 9200 Model Vehicles",
            "tm": [
                "9000",
                "9100",
                "9200"
            ],
            "engfam": [
                "CATERPILLAR"
            ],
            "formnum": "98501",
            "startdate": "04/09/1996",
            "enddate": "11/20/1997",
            "vendor": "CATERPILLAR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "97504",
            "filename": "97504_1.xml",
            "title": "9200, 9300, and 9400 Series Vehicles with Antilock Brake Systems",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "97504",
            "startdate": "03/10/1997",
            "enddate": "03/19/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "97502",
            "filename": "97502_1.xml",
            "title": "1652 SC, 3400, 3800, 4600, 4700, and 3000 RE Buses with 9x3 Powered Applied Parking Brake",
            "tm": [
                "1000",
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "97502",
            "startdate": "01/01/1991",
            "enddate": "06/15/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "96506",
            "filename": "96506_1.xml",
            "title": "1552SC Model with Hydraulic Brakes",
            "tm": [
                "1000"
            ],
            "engfam": [],
            "formnum": "96506",
            "startdate": "11/03/1995",
            "enddate": "08/21/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "96505",
            "filename": "96505_1.xml",
            "title": "3600, 3800 and 3900FC Bus with Air Brakes and Antilock Brake Systems",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "96505",
            "startdate": "01/30/1992",
            "enddate": "09/06/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "96306",
            "filename": "96306_1.xml",
            "title": "Parking Brake Air Chamber",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "96306",
            "startdate": "05/28/1996",
            "enddate": "10/21/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "95508",
            "filename": "95508_1.xml",
            "title": "Bobtail Proportioning (BTP) Brake System Built Incorrectly",
            "tm": [
                "2000",
                "8000",
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "95508",
            "startdate": "04/21/1995",
            "enddate": "05/03/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04092"
            ]
        },
        {
            "grp": "s04",
            "root": "95503",
            "filename": "95503_1.xml",
            "title": "Rockwell WABCO System Saver 1000 Air Dryer, or Rockwell WABCO System Saver Twin Air Dryer (Sold Through Service Parts) - 2000, 3000, 4000, 5000, 8000 and 9000 Models",
            "tm": [
                "2000",
                "3000",
                "4000",
                "5000",
                "8000",
                "9000"
            ],
            "engfam": [],
            "formnum": "95503",
            "startdate": "03/24/1993",
            "enddate": "03/07/1995",
            "vendor": "ROCKWELL",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04EAT"
            ]
        },
        {
            "grp": "s04",
            "root": "95502",
            "filename": "95502_1.xml",
            "title": "Front Drive Steer Axle Brake Drums - 5070 6x6 Models",
            "tm": [
                "5000"
            ],
            "engfam": [],
            "formnum": "95502",
            "startdate": "10/03/1994",
            "enddate": "11/16/1994",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "04509",
            "filename": "04509_1.xml",
            "title": "POWER STEERING PUMP MOUNTING STUDS on certain 1652SC, 3800, 4700SFC, RE and CE bus models built 2/04/2003 thru 2/27/2004 with T444E engines",
            "tm": [
                "1000",
                "1652",
                "3800",
                "4700",
                "CE BUS",
                "3000 RE"
            ],
            "engfam": [
                "T 444E"
            ],
            "formnum": "04509",
            "startdate": "02/04/2003",
            "enddate": "02/27/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "03513",
            "filename": "03513_1.xml",
            "title": "Steering Columns of RE (Rear Engine) and FE (Front Engine) Busses Built Between 10/28/1993 and 5/21/2003",
            "tm": [
                "3000 RE",
                "3000 FE"
            ],
            "engfam": [],
            "formnum": "03513",
            "startdate": "10/28/1993",
            "enddate": "05/21/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "05708",
                "05710"
            ]
        },
        {
            "grp": "s05",
            "root": "03509",
            "filename": "03509_1.xml",
            "title": "Steering Arm Tapered Bore Oversize",
            "tm": [
                "8600"
            ],
            "engfam": [],
            "formnum": "03509",
            "startdate": "06/21/2002",
            "enddate": "05/05/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "02514",
            "filename": "02514_1.xml",
            "title": "INTERMEDIATE STEERING SHAFT PINCH BOLTS COULD BE MISSING OR LOOSE on 9200i, 9400i, and 9900i models built at Escobedo from 6/4/02 through 9/12/02",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "02514",
            "startdate": "06/04/2002",
            "enddate": "09/12/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "02504",
            "filename": "02504_1.xml",
            "title": "Missing Cotter Pin at the Connection of the Drag Link to the Pitman Arm on 4200, 4300 and 4400 Models Built From 1/24/2002 through 1/31/2002",
            "tm": [
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "02504",
            "startdate": "01/24/2002",
            "enddate": "01/31/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "01515",
            "filename": "01515_1.xml",
            "title": "Pinch Bolt Connection of the Lower Steering Shaft to the Steering Gear on 4300 and 4400 Models built from September 4, 2001 through September 19, 2001",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01515",
            "startdate": "09/04/2001",
            "enddate": "09/19/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "01512",
            "filename": "01512_1.xml",
            "title": "Lower Steering Shafts On 9000i and 5000i Models built in July and August of 2001",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "01512-R1",
            "startdate": "07/27/2001",
            "enddate": "08/23/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "01504",
            "filename": "01504_1.xml",
            "title": "SAFETY RECALL (U.S., EXPORT) TRW Drag Links With 24-DL Size Ball Sockets On Certain 2000, 4000, 5000 and 9000i model series, built from 7/16/1999 through 9/1/1999",
            "tm": [
                "2000",
                "4000",
                "5000",
                "9000I"
            ],
            "engfam": [],
            "formnum": "01504",
            "startdate": "07/16/1999",
            "enddate": "09/01/1999",
            "vendor": "TRW",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "00513",
            "filename": "00513_1.xml",
            "title": "TRW Drag Links On Certain 1000, 2000, 3000, FE bus, RE bus, 4000 and 8000 model series built from 7/5/1999 through 10/31/1999",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "00513",
            "startdate": "07/05/1999",
            "enddate": "10/31/1999",
            "vendor": "TRW",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "00512",
            "filename": "00512_1.xml",
            "title": "TRW Tie Rod Ends On Certain 2000, 4000, 8000, 9000 and 9000i model series built from 7/5/1999 through 11/30/1999",
            "tm": [
                "2000",
                "4000",
                "8000",
                "9000",
                "9000I"
            ],
            "engfam": [],
            "formnum": "00512R",
            "startdate": "07/05/1999",
            "enddate": "11/30/1999",
            "vendor": "TRW",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "00503",
            "filename": "00503_1.xml",
            "title": "Power Steering Pumps Installed on T 444E V-8 Engines in Vehicles Built 2/1/2000 Through 3/24/2000",
            "tm": [
                "1000",
                "3000",
                "4000"
            ],
            "engfam": [
                "T 444E"
            ],
            "formnum": "00503",
            "startdate": "02/01/2000",
            "enddate": "03/24/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "99506",
            "filename": "99506_1.xml",
            "title": "Lower Steering Shafts on 9000i Models",
            "tm": [
                "9000I"
            ],
            "engfam": [],
            "formnum": "99506",
            "startdate": "06/01/1999",
            "enddate": "07/22/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "98302",
            "filename": "98302_1.xml",
            "title": "Adjustable Steering Column Pinch Bolt Nut GENESIS and AmTran RE Buses",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "98302",
            "startdate": "04/06/1998",
            "enddate": "05/27/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "97501",
            "filename": "97501_1.xml",
            "title": "AmTran Rear Engine Bus",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "97501",
            "startdate": "03/07/1995",
            "enddate": "01/23/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "96504",
            "filename": "96504_1.xml",
            "title": "4700 LP Steering Column",
            "tm": [
                "4000"
            ],
            "engfam": [],
            "formnum": "96504",
            "startdate": "02/23/1996",
            "enddate": "06/27/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s06",
            "root": "05508",
            "filename": "05508_1.xml",
            "title": "DRIVELINE on certain RE School and Commercial Bus models with IROS Suspension built between 01-28-2003 and 03-09-2005",
            "tm": [
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "05508-R1",
            "startdate": "01/28/2003",
            "enddate": "03/09/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s06",
            "root": "98508",
            "filename": "98508_1.xml",
            "title": "Vehicle Recall for 9100, 9200, 9300, and 9400 Models with Spicer SPL170 Driveline",
            "tm": [
                "9000",
                "9100",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "98508",
            "startdate": "10/07/1996",
            "enddate": "09/16/1998",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s06",
            "root": "95511",
            "filename": "95511_1.xml",
            "title": "Driveline Nut Torque - 9200, 9300, 9400 and 5000 Models",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400",
                "5000"
            ],
            "engfam": [],
            "formnum": "95511",
            "startdate": "07/26/1995",
            "enddate": "08/23/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s07",
            "root": "03508",
            "filename": "03508_1.xml",
            "title": "Tail Pipe Exhaust Single Band Clamp on 9000 Series Models built 11/15/2002 through 3/12/2003 with Caterpillar Engines",
            "tm": [
                "9000"
            ],
            "engfam": [],
            "formnum": "03508",
            "startdate": "11/15/2002",
            "enddate": "03/21/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08505",
            "filename": "08505_1.xml",
            "title": "REMOTE POWER MODULE (RPM) on certain INTERNATIONAL 3000, 4000, 7000, 8000, CXT, MXT, ProStar model trucks and IC CE, HC bus models built 11/21/00 thru 5/21/08 with one or more RPMs",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "CE BUS",
                "CXT",
                "HC",
                "MXT",
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "08505",
            "startdate": "11/21/2000",
            "enddate": "05/21/2008",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "07514",
            "filename": "07514_1.xml",
            "title": "BATTERY CABLES on certain MXT Models built 5/20/2006 thru 4/23/2007",
            "tm": [
                "MXT"
            ],
            "engfam": [],
            "formnum": "07514",
            "startdate": "05/20/2006",
            "enddate": "04/23/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "07501",
            "filename": "07501_1.xml",
            "title": "BATTERY CABLES on Certain 9000 Models Built 4/1/2002 thru 12/25/2006 with Caterpillar Engines",
            "tm": [
                "9000",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "07501-R2",
            "startdate": "04/01/2002",
            "enddate": "12/25/2006",
            "vendor": "CATERPILLAR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "05514",
            "filename": "05514_1.xml",
            "title": "BATTERY CABLES on 9000 models built 4/1/2002 thru 6/15/2005",
            "tm": [
                "9000",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "05514-R2",
            "startdate": "04/01/2002",
            "enddate": "06/15/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "04518",
            "filename": "04518_1.xml",
            "title": "TURN SIGNAL SWITCH assemblies on certain 3300, 4200, 4300, 4400, and CE School Bus models built 5/24/2004 thru 8/17/2004",
            "tm": [
                "3300",
                "4200",
                "4300",
                "4400",
                "CE BUS"
            ],
            "engfam": [],
            "formnum": "04518-R2",
            "startdate": "05/24/2004",
            "enddate": "08/17/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "04510",
            "filename": "04510_1.xml",
            "title": "BATTERY CABLES on certain HPV models built 11/20/2000 thru 5/20/2004 with Cummins, Caterpillar or International DT/HT 530 engines",
            "tm": [
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "04510-R1",
            "startdate": "11/20/2000",
            "enddate": "05/20/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "03506",
            "filename": "03506_1.xml",
            "title": "ALTERNATOR CABLE TERMINAL MAY BREAK OFF 9100i, 9200i, 9400i, and 9900i models built 6/8/2001 through 11/4/2002",
            "tm": [
                "9000",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "03506",
            "startdate": "06/08/2001",
            "enddate": "11/04/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "03504",
            "filename": "03504_1.xml",
            "title": "Incorrect Starter Nose Cone Housing 8600 Models Built 9/3/02 Through 1/30/03 With C10 And C12 Caterpillar Engines And Leece Neville Starters",
            "tm": [
                "8600"
            ],
            "engfam": [],
            "formnum": "03504",
            "startdate": "09/03/2002",
            "enddate": "01/30/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08WMN",
                "08WTB"
            ]
        },
        {
            "grp": "s08",
            "root": "03501",
            "filename": "03501_1.xml",
            "title": "NON-COMPLIANCE RECALL - Installing the Hydraulic Brake Monitor Module on 3200, 4200, 4300, and 4400 Models Built with Brake Code 4GAS from 7/16/02 through 1/14/03",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "03501",
            "startdate": "07/16/2002",
            "enddate": "01/14/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04GAS"
            ]
        },
        {
            "grp": "s08",
            "root": "02503",
            "filename": "02503_1.xml",
            "title": "Starter Solenoid Adapter Stud for the Positive Battery Cable Connection on 4200, 4300 and 4400 Models Built From 12/17/2001 through 1/03/2002 With Starter Codes 08WWN or 08WWP",
            "tm": [
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "02503",
            "startdate": "12/17/2001",
            "enddate": "01/03/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08WWN",
                "08WWP"
            ]
        },
        {
            "grp": "s08",
            "root": "01516",
            "filename": "01516_1.xml",
            "title": "NONCOMPLIANCE RECALL - Windshield Washer Pump Fuse on 4000 Series built 10/24/2000 through 10/15/2001",
            "tm": [
                "4000"
            ],
            "engfam": [],
            "formnum": "01516",
            "startdate": "10/24/2000",
            "enddate": "10/15/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "01514",
            "filename": "01514_1.xml",
            "title": "Reprogramming the ESC to Prevent Software Fusing of the Headlights on 4300 and4400 Models Built from 10/24/00 through 11/07/01",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01514 Revision A",
            "startdate": "10/24/2000",
            "enddate": "11/07/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "01511",
            "filename": "01511_1.xml",
            "title": "Replacing the Air Pressure Actuated Brake Light Switch on 5000 and 9000 model series vehicles built 07/01/1998 through 5/07/2001",
            "tm": [
                "5000",
                "9000"
            ],
            "engfam": [],
            "formnum": "01511",
            "startdate": "07/01/1998",
            "enddate": "05/07/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "01508",
            "filename": "01508_1.xml",
            "title": "Replacing The Remote Power Modules On 4300 And 4400 Models Built From 10/24/00 through 6/01/01",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01508",
            "startdate": "10/24/2000",
            "enddate": "06/01/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "0008WSK",
                "0008SAJ",
                "0008WSL",
                "0008WSM"
            ]
        },
        {
            "grp": "s08",
            "root": "01305",
            "filename": "01305_1.xml",
            "title": "Heater/Defroster Harness Connection Wiring",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "01305",
            "startdate": "04/29/2001",
            "enddate": "09/24/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "01302",
            "filename": "01302_1.xml",
            "title": "Heater/Defroster Switch Connection Melting",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "01302 Rev A",
            "startdate": "01/01/1995",
            "enddate": "04/29/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "00506",
            "filename": "00506_1.xml",
            "title": "Re-orienting the Air Operated Brake and Cruise Control Switches in 5000/5000i and 9000/9000i Model Series Vehicles Built 07/01/1998 Through 07/02/2000",
            "tm": [
                "5000",
                "5000I",
                "9000",
                "9000I"
            ],
            "engfam": [],
            "formnum": "00506",
            "startdate": "07/01/1998",
            "enddate": "07/02/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "99510",
            "filename": "99510_1.xml",
            "title": "Sunshade Wiring Harness on 9000i Models With Sunshade Code 16XWD",
            "tm": [
                "9000I"
            ],
            "engfam": [],
            "formnum": "99510",
            "startdate": "01/12/1999",
            "enddate": "08/09/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16XWD"
            ]
        },
        {
            "grp": "s08",
            "root": "98502",
            "filename": "98502_1.xml",
            "title": "Sleeper Compartment HVAC on 9200, 9300, 9400, and 9800 Pro Sleeper Models",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400",
                "9800"
            ],
            "engfam": [],
            "formnum": "98502",
            "startdate": "05/01/1997",
            "enddate": "05/08/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "98301",
            "filename": "98301_1.xml",
            "title": "Headlamp Circuit Protection",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "98301",
            "startdate": "01/01/1991",
            "enddate": "06/08/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "97506",
            "filename": "97506_1.xml",
            "title": "Standard Turn Signal Switch on 2000, 4000, and 8000 Series Tractors and 4000 Series Trucks Coded for 08WAT Turn Signal Switch",
            "tm": [
                "2000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "97506",
            "startdate": "02/04/1991",
            "enddate": "05/31/1994",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08WAT"
            ]
        },
        {
            "grp": "s08",
            "root": "96507",
            "filename": "96507_1.xml",
            "title": "Bus Turn Signal - Lane Change Mode",
            "tm": [
                "1000",
                "3000"
            ],
            "engfam": [],
            "formnum": "96507",
            "startdate": "01/01/1981",
            "enddate": "08/01/1994",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "95501",
            "filename": "95501_1.xml",
            "title": "Side Marker Lights - Non-Compliance of 9600 Model With High Rise Cab Roof",
            "tm": [
                "9000",
                "9600"
            ],
            "engfam": [],
            "formnum": "95501",
            "startdate": "09/30/1991",
            "enddate": "11/29/1994",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "08501",
            "filename": "08501_1.xml",
            "title": "HOOD on Certain ProStar Models Built 5/25/06 thru 1/10/08",
            "tm": [
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "08501",
            "startdate": "05/25/2006",
            "enddate": "01/10/2008",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "04513",
            "filename": "04513_1.xml",
            "title": "NONCOMPLIANCE RECALL: COMPLETE VEHICLE LABELS on 4300 and 4400 tractor models built 5/24/2004 thru 7/26/2004",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "04513",
            "startdate": "05/24/2004",
            "enddate": "07/26/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "04512",
            "filename": "04512_1.xml",
            "title": "POWER STEERING HOSE ROUTING, ENGINE HARNESS ROUTING and OIL PRESSURE SWITCH on certain MODEL YEAR 2005 RE BUS models built 3/3/2004 thru 8/5/2004 with I6 engines only",
            "tm": [
                "3000 RE"
            ],
            "engfam": [],
            "formnum": "04512-R1",
            "startdate": "03/03/2004",
            "enddate": "08/05/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "00302",
            "filename": "00302_1.xml",
            "title": "VIN Number Error",
            "tm": [
                "IC BUS",
                "3000"
            ],
            "engfam": [],
            "formnum": "00302",
            "startdate": "03/17/2000",
            "enddate": "07/15/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s11",
            "root": "02507",
            "filename": "02507_1.xml",
            "title": "Lower/Horizontal Clutch Rod Replacement on 4300 and 4400 Models Built from 10/24/2000 Through 5/30/2002 with Manual Transmissions",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "02507",
            "startdate": "10/24/2000",
            "enddate": "05/30/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "11LDL",
                "11LEA",
                "11LED",
                "11LEG",
                "11LEH",
                "11LEK",
                "11LEL"
            ]
        },
        {
            "grp": "s12",
            "root": "07510",
            "filename": "07510_1.xml",
            "title": "HIGH PRESSURE OIL HOSE Assemblies on Certain RE School and Commercial Buses built 1/24/1996 thru 3/22/2004",
            "tm": [
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "07510R1",
            "startdate": "01/24/1996",
            "enddate": "03/22/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "07507",
            "filename": "07507_1.xml",
            "title": "AUXILIARY POWER UNIT on certain 9000 Models built 7/20/2006 thru 3/19/2007",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "07507",
            "startdate": "07/20/2006",
            "enddate": "03/19/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12WTK"
            ]
        },
        {
            "grp": "s12",
            "root": "06508",
            "filename": "06508_1.xml",
            "title": "INJECTION PRESSURE REGULATOR (IPR) VALVE on CF 500 and CF 600 Models built 1/1/2005 thru 3/31/2006",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "06508",
            "startdate": "01/01/2005",
            "enddate": "03/31/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "06502",
            "filename": "06502_1.xml",
            "title": "ENGINE OIL SAMPLING VALVE on certain 9400i Models built 4/27/2005 thru 1/23/2006 with Feature Code 12WEE",
            "tm": [
                "9000",
                "9400I"
            ],
            "engfam": [],
            "formnum": "06502",
            "startdate": "04/27/2005",
            "enddate": "01/23/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12WEE"
            ]
        },
        {
            "grp": "s12",
            "root": "05523",
            "filename": "05523_1.xml",
            "title": "ENGINE GROUND CABLE on certain 7000 and 8000 Series Models built 3/21/2002 thru 7/28/2005 with Caterpillar Engines",
            "tm": [
                "7600",
                "7700",
                "8600"
            ],
            "engfam": [],
            "formnum": "05523-R2",
            "startdate": "03/21/2002",
            "enddate": "07/28/2005",
            "vendor": "CATERPILLAR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "04511",
            "filename": "04511_1.xml",
            "title": "ENGINE HARNESS ROUTING on certain 9200i, 9400i, 9900i and 9900ix models built 6/2/2002 thru 1/13/2004 with Cummins ISX engines",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04511",
            "startdate": "06/02/2002",
            "enddate": "01/13/2004",
            "vendor": "CUMMINS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "04504",
            "filename": "04504_1.xml",
            "title": "Engine Oil Filter/Front Drive Axle Interference on 4x4 and 6x6 Versions of 7300, 7400, and 7500 Models built 9/27/2001 through 3/8/2004 with DT 466 and DT/HT 530 Engines",
            "tm": [
                "7300",
                "7400",
                "7500"
            ],
            "engfam": [
                "DT 466",
                "DT 530",
                "HT 530"
            ],
            "formnum": "04504-R2",
            "startdate": "09/27/2001",
            "enddate": "03/08/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "02511",
            "filename": "02511_1.xml",
            "title": "Installing a New Accelerator Pedal Rod and a Secondary Pedal Stop on Certain 1552SC, 1652SC, 1652UPS and RE Bus Models Built Between 2/7/94 and 8/21/02",
            "tm": [
                "1000",
                "1552",
                "1652"
            ],
            "engfam": [],
            "formnum": "02511",
            "startdate": "02/07/1994",
            "enddate": "08/21/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "02508",
            "filename": "02508_1.xml",
            "title": "Inspecting and Replacing the Fuel Injector Control Module on 3200 and 4200 Models Built From 09/21/01 through 06/26/02 With VT 365 Engines",
            "tm": [
                "3200",
                "4200"
            ],
            "engfam": [
                "VT 365"
            ],
            "formnum": "02508",
            "startdate": "09/21/2001",
            "enddate": "06/26/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "01304",
            "filename": "01304_1.xml",
            "title": "Accelerator Pedal Interference with Floor Mat",
            "tm": [
                "3800"
            ],
            "engfam": [],
            "formnum": "01304",
            "startdate": "11/09/1996",
            "enddate": "05/29/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "99514",
            "filename": "99514_1.xml",
            "title": "EPA Low NOx Rebuild Information on Overhauled Engines",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "99514-R2",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "98509",
            "filename": "98509_1.xml",
            "title": "Vehicle Recall for All Models with T 444E Engine",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "98509",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "98507",
            "filename": "98507_1.xml",
            "title": "Vehicle Recall for All Models with T 444E Engine",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "98507",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "97508",
            "filename": "97508_1.xml",
            "title": "Accelerator Pedal Rod Breakage on 2000, 8100, and 8200 Series Truck Models and 3600, 3800 Bus Models",
            "tm": [
                "2000",
                "3000",
                "8000"
            ],
            "engfam": [],
            "formnum": "97508 Rev. 1",
            "startdate": "10/28/1996",
            "enddate": "07/01/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "97505",
            "filename": "97505_1.xml",
            "title": "3800 Buses and 4700 FBC Chassis With the T 444E Engine Electronic Accelerator Pedal Rod",
            "tm": [
                "3000",
                "4000"
            ],
            "engfam": [
                "T 444E"
            ],
            "formnum": "97505",
            "startdate": "12/16/1996",
            "enddate": "03/10/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "96511",
            "filename": "96511_1.xml",
            "title": "Detroit Diesel Engines With Optimized Idle",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400",
                "9800"
            ],
            "engfam": [
                "DETROIT DIESEL"
            ],
            "formnum": "96511",
            "startdate": "04/03/1996",
            "enddate": "09/16/1996",
            "vendor": "DETROIT DIESEL",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "96509",
            "filename": "96509_1.xml",
            "title": "Accelerator Pedal to Floor Interference 3800 Bus with I6 Electronic Engine",
            "tm": [
                "3800"
            ],
            "engfam": [],
            "formnum": "96509",
            "startdate": "05/01/1996",
            "enddate": "11/07/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "95507",
            "filename": "95507_1.xml",
            "title": "2574, 2674, 8100 and 5070 Models with a 530, 275 HP Engine",
            "tm": [
                "2000",
                "5000",
                "8000"
            ],
            "engfam": [
                "530"
            ],
            "formnum": "95507",
            "startdate": "10/11/1994",
            "enddate": "05/19/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12NEM"
            ]
        },
        {
            "grp": "s12",
            "root": "95506",
            "filename": "95506_1.xml",
            "title": "3700 and 3800 Bus Hand Throttle",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "95506",
            "startdate": "06/13/1988",
            "enddate": "03/04/1991",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "07515",
            "filename": "07515_1.xml",
            "title": "SPLIT SHAFT PTO on Certain 7600 Models Built 5/10/2006 thru 9/6/2007",
            "tm": [
                "7600"
            ],
            "engfam": [],
            "formnum": "07515",
            "startdate": "05/10/2006",
            "enddate": "09/06/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13TSH",
                "13TSJ"
            ]
        },
        {
            "grp": "s13",
            "root": "05501",
            "filename": "05501_1.xml",
            "title": "FRONT DRIVE SHAFT on 4800 4x4's with FABCO TC-200 TRANSFER CASES built 6/30/1999 thru 5/8/2002",
            "tm": [
                "4800"
            ],
            "engfam": [],
            "formnum": "05501-R2",
            "startdate": "06/30/1999",
            "enddate": "05/08/2002",
            "vendor": "FABCO",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13TJZ"
            ]
        },
        {
            "grp": "s13",
            "root": "03516",
            "filename": "03516_1.xml",
            "title": "FRONT DRIVE SHAFT on 4800 4x4's with FABCO TC-200 TRANSFER CASES built 6/30/1999 thru 5/8/2002",
            "tm": [
                "4800"
            ],
            "engfam": [],
            "formnum": "03516 Interim Notice",
            "startdate": "06/30/1999",
            "enddate": "05/08/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13TJZ"
            ]
        },
        {
            "grp": "s13",
            "root": "00504",
            "filename": "00504_1.xml",
            "title": "Eaton AutoShift II Transmissions in Vehicles Built 06/01/1999 Through 4/20/2000",
            "tm": [
                "2000",
                "8100",
                "9000",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "00504",
            "startdate": "06/01/1999",
            "enddate": "04/20/2000",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "98503",
            "filename": "98503_1.xml",
            "title": "Double Neutral Shift Control Lever on Models with Allison AT545 Automatic Transmissions",
            "tm": [
                "1000",
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "98503",
            "startdate": "01/01/1994",
            "enddate": "07/01/1997",
            "vendor": "ALLISON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "07505",
            "filename": "07505_1.xml",
            "title": "DANA SPICER REAR AXLE HOUSING THICKNESS on Certain 4000, 7000, 8000, 9000 and ProStar Models built 11/15/2006 thru 2/19/2007",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "07505",
            "startdate": "11/15/2006",
            "enddate": "02/19/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14AHB",
                "14AHC",
                "14CEU",
                "14GJD",
                "14GJE",
                "14GJP",
                "14GJV"
            ]
        },
        {
            "grp": "s14",
            "root": "06509",
            "filename": "06509_1.xml",
            "title": "ADJUSTABLE TORQUE ROD ENDS on Certain 5000 and 7000 Models Built 9/13/2006 thru 9/29/2006 with Chalmers Rear Suspensions",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7400",
                "7500",
                "7600"
            ],
            "engfam": [],
            "formnum": "06509-R1",
            "startdate": "09/13/2006",
            "enddate": "09/29/2006",
            "vendor": "CHALMERS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "05520",
            "filename": "05520_1.xml",
            "title": "Rear Drive Axle Spindles on certain 5600i, 7300 and 7600 Models built 6/13/2005 thru 6/16/2005",
            "tm": [
                "5000",
                "5600I",
                "7300",
                "7600"
            ],
            "engfam": [],
            "formnum": "05520",
            "startdate": "06/13/2005",
            "enddate": "06/16/2005",
            "vendor": "ARVINMERITOR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "96510",
            "filename": "96510_1.xml",
            "title": "Dana Spicer - Rear Axle Pinion",
            "tm": [
                "3000",
                "4000",
                "8000",
                "9000",
                "9200",
                "9400"
            ],
            "engfam": [],
            "formnum": "96510",
            "startdate": "09/03/1996",
            "enddate": "10/02/1996",
            "vendor": "DANA SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "96508",
            "filename": "96508_1.xml",
            "title": "Eaton Rear Axle with Axilok Wheel Adjusting Nuts",
            "tm": [
                "2000",
                "4000",
                "5000",
                "8000",
                "9000",
                "9200",
                "9300",
                "9400",
                "9800"
            ],
            "engfam": [],
            "formnum": "96508",
            "startdate": "04/16/1996",
            "enddate": "10/16/1996",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "96502",
            "filename": "96502_1.xml",
            "title": "RA-42 (Code 14042) Rear Drive Axle Housing - S-Series and Cargostar Models",
            "tm": [
                "1000"
            ],
            "engfam": [],
            "formnum": "96502",
            "startdate": "02/21/1982",
            "enddate": "04/07/1982",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s15",
            "root": "07506",
            "filename": "07506_1.xml",
            "title": "DAVCO FUEL PRO 382 PRE-HEATER on certain 7000, 8000, 9000 and ProStar Models built 12/1/2006 thru 2/21/2007",
            "tm": [
                "7600",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "07506",
            "startdate": "12/01/2006",
            "enddate": "02/21/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "15LGS",
                "15LGT",
                "15LHR",
                "15LHX",
                "15LKB",
                "15LKK"
            ]
        },
        {
            "grp": "s15",
            "root": "02509",
            "filename": "02509_1.xml",
            "title": "Fuel Line Harness Inspections and Retrofits on Certain 7300, 7400 and 7500 Models Built from 7/19/01 through 7/16/2002 with Right Side Frame Rail Mounted Fuel Filter and with a Left Side Mounted Fuel Tank",
            "tm": [
                "7300",
                "7400",
                "7500"
            ],
            "engfam": [],
            "formnum": "02509",
            "startdate": "07/19/2001",
            "enddate": "07/16/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s15",
            "root": "95512",
            "filename": "95512_1.xml",
            "title": "3600 Bus Fuel Hose - 7.3 Liter Engine",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "95512",
            "startdate": "01/29/1992",
            "enddate": "02/01/1994",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12NAB",
                "12NAC",
                "12NAD"
            ]
        },
        {
            "grp": "s16",
            "root": "06511",
            "filename": "06511_1.xml",
            "title": "CAB ENTRY/EGRESS GRAB HANDLE on certain CF 500 and CF 600 Models built 6/2/2004 thru 7/20/2006",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "06511",
            "startdate": "06/02/2004",
            "enddate": "07/20/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "05521",
            "filename": "05521_1.xml",
            "title": "CAB ENTRY STEPS on certain CF 500 and CF 600 Models built 6/2/2004 thru 9/27/2005",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "05521",
            "startdate": "06/02/2004",
            "enddate": "09/27/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "05519",
            "filename": "05519_1.xml",
            "title": "Driver's Seat Belt Tethers on certain 5500i, 5600i, and 9200i Models built 8/23/2004 thru 9/13/2005",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "9000",
                "9200I"
            ],
            "engfam": [],
            "formnum": "05519",
            "startdate": "08/23/2004",
            "enddate": "09/13/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "05509",
            "filename": "05509_1.xml",
            "title": "WEBASTO HEATER on certain CE School Bus, FE School Bus, RE School Bus, and RE Commercial Bus models built between 12/02/2002 and 03/01/2005",
            "tm": [
                "CE BUS",
                "FE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "05509",
            "startdate": "12/02/2002",
            "enddate": "03/01/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "05502",
            "filename": "05502_1.xml",
            "title": "CAB MOUNTS on certain 4000, 7000, and 8000 Series Models built 1/16/2004 thru 11/1/2004",
            "tm": [
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "05502",
            "startdate": "01/16/2004",
            "enddate": "11/01/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "04521",
            "filename": "04521_1.xml",
            "title": "CAB MOUNTS on certain 4000, 7000, and 8000 Series Models built 1/16/2004 thru 11/1/2004",
            "tm": [
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "04521 Interim Action",
            "startdate": "01/16/2004",
            "enddate": "11/01/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "04506",
            "filename": "04506_1.xml",
            "title": "SEAT BELT BUCKLES ON CERTAIN 4000, 7000, and 8000 Series Models built 3/22/2004 thru 4/5/2004",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "04506",
            "startdate": "03/22/2004",
            "enddate": "04/05/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "04503",
            "filename": "04503_1.xml",
            "title": "BUNK CONTROL PANEL of certain 9100, 9200, 9300, 9400, and 9900 models built 4/1/1994 thru 6/16/2002",
            "tm": [
                "9000",
                "9100I",
                "9200I",
                "9300",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04503",
            "startdate": "04/01/1994",
            "enddate": "06/16/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "03507",
            "filename": "03507_1.xml",
            "title": "Lower Bunk Webbing Restraint Bolts on 9200i and 9400i Pro-Sleeper Models Built 1/21/2002 through 6/14/2002 with Code 16SCH",
            "tm": [
                "9000",
                "9200I",
                "9400I"
            ],
            "engfam": [],
            "formnum": "03507",
            "startdate": "01/21/2002",
            "enddate": "06/14/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16SCH"
            ]
        },
        {
            "grp": "s16",
            "root": "03505",
            "filename": "03505_1.xml",
            "title": "NONCOMPLIANCE RECALL - Windshield Washer Wiper Switch Defective on Certain 5000i and 9000i Models",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "03505",
            "startdate": "01/06/2003",
            "enddate": "01/15/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "03503",
            "filename": "03503_1.xml",
            "title": "Limiting Forward Travel on Driver's Seat by Installing a Stop-bracket on the Adjuster Track for 4700 Models Built From 12/13/94 Through 9/4/98",
            "tm": [
                "4700"
            ],
            "engfam": [],
            "formnum": "03503",
            "startdate": "12/13/1994",
            "enddate": "09/04/1998",
            "vendor": "BOSTROM",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04036"
            ]
        },
        {
            "grp": "s16",
            "root": "01503",
            "filename": "01503_1.xml",
            "title": "Limiting the forward travel on the driver's seat by installing a stop-bracket on the adjuster track for 4700 models built from 9/5/98 through 3/2/01",
            "tm": [
                "4700"
            ],
            "engfam": [],
            "formnum": "01503",
            "startdate": "09/05/1998",
            "enddate": "03/02/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "00502",
            "filename": "00502_1.xml",
            "title": "Lower Bunk Webbing Restraint Bolts on Pro Sleeper Models Built 1/1/1998 through 3/24/2000 With 16SCH",
            "tm": [
                "9000",
                "9200",
                "9200I",
                "9300",
                "9400",
                "9400I",
                "9900",
                "9900I"
            ],
            "engfam": [],
            "formnum": "00502",
            "startdate": "01/01/1998",
            "enddate": "03/24/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16SCH"
            ]
        },
        {
            "grp": "s16",
            "root": "99502",
            "filename": "99502_1.xml",
            "title": "Windshield Wiper Linkage on 5000 and 9000 Series",
            "tm": [
                "5000",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9900"
            ],
            "engfam": [],
            "formnum": "99502",
            "startdate": "10/26/1998",
            "enddate": "12/15/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "96304",
            "filename": "96304_1.xml",
            "title": "Rear Window Buzzer Switch",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "96304",
            "startdate": "05/01/1995",
            "enddate": "03/15/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "95510",
            "filename": "95510_1.xml",
            "title": "9200, 9300, 9400 Pro Sleeper Upper Bunk Retaining Strap",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "95510",
            "startdate": "11/10/1994",
            "enddate": "09/12/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16SCG",
                "16SCJ",
                "16SCL"
            ]
        },
        {
            "grp": "s16",
            "root": "95504",
            "filename": "95504_1.xml",
            "title": "9200, 9300, 9400 and Glider Pro Sleeper Models with Swivel Driver and Passenger Seats",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "95504",
            "startdate": "04/26/1994",
            "enddate": "05/09/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16JVR",
                "16JVS",
                "16JVT",
                "16JVU",
                "16KRG",
                "16KRN",
                "16RRE",
                "16RRG",
                "16RRH",
                "16RRJ"
            ]
        },
        {
            "grp": "s17",
            "root": "05510",
            "filename": "05510_1.xml",
            "title": "ACCURIDE Corporation Aluminum Wheels on certain 5000, 7000, 8000 and 9000 Series Models built 2/18/2005 thru 3/10/2005",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "7400",
                "7500",
                "7600",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "05510",
            "startdate": "02/18/2005",
            "enddate": "03/10/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s17",
            "root": "04516",
            "filename": "04516_1.xml",
            "title": "FRONT SPINDLE NUT RETAINER on certain 9200i, 9400i, and 9900i models built 7/26/2004 thru 7/28/2004",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04516",
            "startdate": "07/26/2004",
            "enddate": "07/28/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s17",
            "root": "04502",
            "filename": "04502_1.xml",
            "title": "Unitized Wheel Hub on Certain 4000, 8000, and 9000 Series Models Built 1/9/1998 through 12/31/2002",
            "tm": [
                "4900",
                "8100",
                "8500",
                "9000",
                "9100",
                "9100I",
                "9200",
                "9200I",
                "9300",
                "9400",
                "9400I",
                "9800",
                "9900",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04502",
            "startdate": "01/09/1998",
            "enddate": "12/31/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02ARK",
                "02ARL",
                "02ASB",
                "02ASD",
                "02ASE"
            ]
        },
        {
            "grp": "s17",
            "root": "03510",
            "filename": "03510_1.xml",
            "title": "Unitized Wheel Hub on Certain 4000, 8000, and 9000 Series Models Built 1/9/1998 through 3/1/2002  and  Certain Service Replacement Unitized Wheel Hubs Installed 5/21/1999 thru 5/2/2000",
            "tm": [
                "4900",
                "8100",
                "8500",
                "9000",
                "9100",
                "9100I",
                "9200",
                "9200I",
                "9300",
                "9400",
                "9400I",
                "9800",
                "9900",
                "9900I"
            ],
            "engfam": [],
            "formnum": "03510-R1",
            "startdate": "01/09/1998",
            "enddate": "03/01/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02ARK",
                "02ARL",
                "02ASB",
                "02ASD",
                "02ASE"
            ]
        },
        {
            "grp": "s17",
            "root": "01505",
            "filename": "01505_1.xml",
            "title": "NON-COMPLIANCE RECALL - Replacing 22.5 X 7.5\" Wheels and Rims on Certain Vehicles with 295/75R22.5 Tires and Built from 1/1/86 through 1/16/01",
            "tm": [
                "1000",
                "1652",
                "1654",
                "1753",
                "1754",
                "1853",
                "1954",
                "1955",
                "2000",
                "2375",
                "3600",
                "3800",
                "4700",
                "4900",
                "5000",
                "9000",
                "9300",
                "F1954",
                "F-2375",
                "F-2675",
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "01505",
            "startdate": "01/01/1986",
            "enddate": "01/16/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s17",
            "root": "98504",
            "filename": "98504_1.xml",
            "title": "AKW Recall",
            "tm": [],
            "engfam": [],
            "formnum": "98504",
            "startdate": "",
            "enddate": "",
            "vendor": "AKW",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s17",
            "root": "98304",
            "filename": "98304_1.xml",
            "title": "5 Spoke Rear Wheel Assemblies on GENESIS and AmTran RE Buses",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "98304",
            "startdate": "09/01/1997",
            "enddate": "09/17/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s17",
            "root": "97507",
            "filename": "97507_1.xml",
            "title": "9000 Conventional and Cabover Series",
            "tm": [
                "9000"
            ],
            "engfam": [],
            "formnum": "97507",
            "startdate": "08/07/1996",
            "enddate": "12/16/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s17",
            "root": "97503",
            "filename": "97503_1.xml",
            "title": "5000, 9200, 9300, and 9400 Vehicles",
            "tm": [
                "5000",
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "97503",
            "startdate": "07/15/1996",
            "enddate": "01/03/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s17",
            "root": "96501",
            "filename": "96501_1.xml",
            "title": "Front Wheel Hub Failure",
            "tm": [
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "96501",
            "startdate": "03/05/1993",
            "enddate": "02/06/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "07503",
            "filename": "07503_1.xml",
            "title": "SIDE EMERGENCY DOOR HOLDBACK on certain CE, RE and FE School and Commercial Buses built 3/12/2004 thru 11/29/2006",
            "tm": [
                "CE BUS",
                "FE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "07503",
            "startdate": "03/12/2004",
            "enddate": "11/29/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "47ALT",
                "47DCJ",
                "47DCL",
                "47DCN",
                "47DCP",
                "47DCR",
                "47DCT",
                "47DCX"
            ]
        },
        {
            "grp": "s47",
            "root": "07502",
            "filename": "07502_1.xml",
            "title": "TRANSPEC WORLDWIDE STOP ARMS AND CROSSING GATES on certain CE, RE and FE School Buses built 1/18/2006 thru 1/17/2007",
            "tm": [
                "CE BUS",
                "FE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "07502",
            "startdate": "01/18/2006",
            "enddate": "01/17/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "06512",
            "filename": "06512_1.xml",
            "title": "National Seat ABTS (All Belts To Seat) Driver's Seat on certain BE, CE, FE, and RE school and commercial buses built between October 11, 2005 and October 31, 2006 with property codes 0048VUK, 0048VUJ, 0048VUP, and 0048VUR",
            "tm": [
                "BE 200",
                "CE BUS",
                "FE 300",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "06512-R1",
            "startdate": "10/11/2005",
            "enddate": "10/31/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "48VUK",
                "48VUJ",
                "48VUP",
                "48VUR"
            ]
        },
        {
            "grp": "s47",
            "root": "06510",
            "filename": "06510_1.xml",
            "title": "Handrail on Certain CE and 3800 School Buses Built Between 12/23/1997 and 03/21/2006",
            "tm": [
                "CE BUS",
                "3800"
            ],
            "engfam": [],
            "formnum": "06510",
            "startdate": "12/23/1997",
            "enddate": "03/21/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "06507",
            "filename": "06507_1.xml",
            "title": "NON-COMPLIANCE RECALL: 39\" CE WHITE Track Mounted Child Safety Seats on certain BE and CE School Buses built between 08/03/2005 and 05/01/2006",
            "tm": [
                "BE 200",
                "CE BUS"
            ],
            "engfam": [],
            "formnum": "06507",
            "startdate": "08/03/2005",
            "enddate": "05/01/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "06505",
            "filename": "06505_1.xml",
            "title": "NON-COMPLIANCE RECALL: Davenport / Floor Joint on certain RE Buses built between 07/01/2005 and 05/09/2006.",
            "tm": [
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "06505",
            "startdate": "07/01/2005",
            "enddate": "05/09/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "06503",
            "filename": "06503_1.xml",
            "title": "Ricon Wheelchair Lift Arm on certain IC, CE, FE, and RE Bus models built between 06/12/2005 and 03/29/2006",
            "tm": [
                "IC BUS",
                "CE BUS",
                "FE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "06503",
            "startdate": "06/12/2005",
            "enddate": "03/29/2006",
            "vendor": "RICON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "49DEK",
                "49DEP",
                "49GHG",
                "49GHH",
                "49GLD",
                "49GMS"
            ]
        },
        {
            "grp": "s47",
            "root": "05524",
            "filename": "05524_1.xml",
            "title": "Bus Control Arm Bracket on Certain CE and BE Bus Models Built Between 02/10/2004 and 12/15/2005",
            "tm": [
                "CE BUS",
                "BE BUS"
            ],
            "engfam": [],
            "formnum": "05524",
            "startdate": "02/10/2004",
            "enddate": "12/15/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "47DAC",
                "47DAD"
            ]
        },
        {
            "grp": "s47",
            "root": "05517",
            "filename": "05517_1.xml",
            "title": "SPECIALTY MANUFACTURING CO. 5 Series Electric Stop Arms on certain 3800 chassis, and CE, FE, and RE School Buses built between 01/07/2002 and 06/22/2005",
            "tm": [
                "3800",
                "CE BUS",
                "FE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "05517-R1",
            "startdate": "01/07/2002",
            "enddate": "06/22/2005",
            "vendor": "SPECIALTY MANUFACTURING",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "05516",
            "filename": "05516_1.xml",
            "title": "SPECIALTY MANUFACTURING CO. 5 Series Electric Stop Arms on certain 3800 chassis, and CE, FE, and RE School Buses built between 01/07/2002 and 06/22/2005",
            "tm": [
                "3800",
                "CE BUS",
                "FE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "05516-R1",
            "startdate": "01/07/2002",
            "enddate": "06/22/2005",
            "vendor": "SPECIALTY MANUFACTURING",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "05507",
            "filename": "05507_1.xml",
            "title": "Child Seat Latch Attachment on CE, FE, and RE School Bus models with Child Restraint Anchorage Systems Option",
            "tm": [
                "CE BUS",
                "FE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "05507",
            "startdate": "05/12/2003",
            "enddate": "03/02/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "48SYH",
                "48SYJ",
                "48TAN",
                "48TGY",
                "48TGZ",
                "48TJV",
                "48TMU",
                "48TMV",
                "48TMW",
                "48TMX",
                "48TNB",
                "48TPY",
                "48TXW"
            ]
        },
        {
            "grp": "s47",
            "root": "05506",
            "filename": "05506_1.xml",
            "title": "Entrance Door Pin on certain CE school bus models built between 11-18-2004 and 02-10-2005",
            "tm": [
                "CE BUS"
            ],
            "engfam": [],
            "formnum": "05506",
            "startdate": "11/18/2004",
            "enddate": "02/10/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "05505",
            "filename": "05505_1.xml",
            "title": "Engine Cover Lid on certain FE School Bus and FE Commercial Bus models built between 09-04-2003 and 02-05-2005",
            "tm": [
                "FE BUS"
            ],
            "engfam": [],
            "formnum": "05505",
            "startdate": "09/04/2003",
            "enddate": "02/05/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "04305",
            "filename": "04305_1.xml",
            "title": "30-Inch Child Restraint Seat Cushion Retention",
            "tm": [
                "CE BUS",
                "3000 FE",
                "3000 RE"
            ],
            "engfam": [],
            "formnum": "04305",
            "startdate": "03/25/1998",
            "enddate": "08/24/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "04304",
            "filename": "04304_1.xml",
            "title": "Driver Seat Pedestal on certain FE Bus models built between 03-12-1992 and 03-03-2004",
            "tm": [
                "FE BUS"
            ],
            "engfam": [],
            "formnum": "04304",
            "startdate": "03/12/1992",
            "enddate": "03/03/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "04303",
            "filename": "04303_1.xml",
            "title": "Vandal Lock Warning",
            "tm": [
                "CE BUS"
            ],
            "engfam": [],
            "formnum": "04303-R1",
            "startdate": "06/24/2003",
            "enddate": "06/01/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "04302",
            "filename": "04302_1.xml",
            "title": "Emergency Exit Window Instructions",
            "tm": [
                "3000 RE"
            ],
            "engfam": [],
            "formnum": "04302",
            "startdate": "07/31/2000",
            "enddate": "04/14/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "04301",
            "filename": "04301_1.xml",
            "title": "Special Needs Buses with Treated Plywood Floor - Wheelchair Track and Mounting Hardware",
            "tm": [
                "CE BUS",
                "FE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "04301-R1",
            "startdate": "08/12/2002",
            "enddate": "08/19/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "03306",
            "filename": "03306_1.xml",
            "title": "Modesty Panel at Front Barriers",
            "tm": [
                "3000 FE"
            ],
            "engfam": [],
            "formnum": "03306",
            "startdate": "10/14/1991",
            "enddate": "11/06/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "03305",
            "filename": "03305_1.xml",
            "title": "Roof Topping Sheet Joints",
            "tm": [
                "CE BUS",
                "FE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "03305-R1",
            "startdate": "09/01/1993",
            "enddate": "08/28/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "03301",
            "filename": "03301_1.xml",
            "title": "Missing Seat Mounting Reinforcement",
            "tm": [
                "CE BUS"
            ],
            "engfam": [],
            "formnum": "03301",
            "startdate": "06/05/2001",
            "enddate": "07/31/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "02302",
            "filename": "02302_1.xml",
            "title": "Stepwell Joint",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "02302",
            "startdate": "01/01/2001",
            "enddate": "06/12/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "01306",
            "filename": "01306_1.xml",
            "title": "Wiring Diagram Decal Error",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "01306",
            "startdate": "01/01/1999",
            "enddate": "11/05/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "01303",
            "filename": "01303_1.xml",
            "title": "Flip Seat Support Binding",
            "tm": [
                "3000",
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "01303",
            "startdate": "08/18/1999",
            "enddate": "07/25/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "01301",
            "filename": "01301_1.xml",
            "title": "IC (Bus Boy) Cross View Mirror System",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "01301",
            "startdate": "04/06/2000",
            "enddate": "04/23/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "01300",
            "filename": "01300_1.xml",
            "title": "Mirror System Non Compliance",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "01300",
            "startdate": "08/28/2000",
            "enddate": "03/23/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "00305",
            "filename": "00305_1.xml",
            "title": "Driver Seat Mounting",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "00305",
            "startdate": "03/17/2000",
            "enddate": "10/08/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "00304",
            "filename": "00304_1.xml",
            "title": "Rear Emergency Window with Vandal Lock",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "00304",
            "startdate": "07/31/2000",
            "enddate": "11/01/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "00301",
            "filename": "00301_1.xml",
            "title": "Anchor Seat Mounting Reinforcement",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "00301",
            "startdate": "11/29/1999",
            "enddate": "05/31/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "99307",
            "filename": "99307_1.xml",
            "title": "Anchor Seat Mounting Hardware",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "99307",
            "startdate": "10/01/1998",
            "enddate": "09/10/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "99306",
            "filename": "99306_1.xml",
            "title": "AmTran FE Forward Handrail",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "99306",
            "startdate": "02/19/1999",
            "enddate": "06/14/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "99305",
            "filename": "99305_1.xml",
            "title": "AmTran RE Rear Emergency Exit Window",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "99305",
            "startdate": "03/01/1998",
            "enddate": "04/21/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "99304",
            "filename": "99304_1.xml",
            "title": "Tire Pressure Error on Certification Label",
            "tm": [
                "3000 FE",
                "3000 RE"
            ],
            "engfam": [],
            "formnum": "99304",
            "startdate": "02/15/1994",
            "enddate": "01/27/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "99303",
            "filename": "99303_1.xml",
            "title": "Flip Seat Modesty Panels",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "99303",
            "startdate": "06/03/1992",
            "enddate": "02/24/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "99001",
            "filename": "99001_1.xml",
            "title": "Rear Window Assemblies",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "99001",
            "startdate": "03/01/1998",
            "enddate": "07/16/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "98305",
            "filename": "98305_1.xml",
            "title": "Emergency Door Hinges",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "98305",
            "startdate": "02/24/1988",
            "enddate": "10/18/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "97301",
            "filename": "97301_1.xml",
            "title": "Handrail Modification",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "97301",
            "startdate": "01/01/1991",
            "enddate": "01/01/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "96303",
            "filename": "96303_1.xml",
            "title": "Entrance Door Handrail Modification",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "96303",
            "startdate": "01/01/1991",
            "enddate": "03/01/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "96302",
            "filename": "96302_1.xml",
            "title": "Entrance Door Handrail Modification",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "96302",
            "startdate": "04/23/1986",
            "enddate": "03/05/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "96301",
            "filename": "96301_1.xml",
            "title": "Entrance Door Handrail Modification",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "96301",
            "startdate": "04/23/1986",
            "enddate": "03/05/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        }
    ],
    "afc": [
        {
            "grp": "s01",
            "root": "01912",
            "filename": "01912_1.xml",
            "title": "Frame Crossmember Bracket (Gusset) Replacement for 5000i Models Built Between February 28, 2000 to May 9, 2001 with 5 Piece Intermediate Crossmember",
            "tm": [
                "5000I"
            ],
            "engfam": [],
            "formnum": "01912",
            "startdate": "02/28/2000",
            "enddate": "05/09/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s01",
            "root": "01906",
            "filename": "01906_1.xml",
            "title": "Rear Suspension Crossmember Improvement for 4300 and 4400 Models built between October 24, 2000 and April 16, 2001 with International Ride Optimized Suspension (IROS), excluding the LoPro Models",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01906",
            "startdate": "10/24/2000",
            "enddate": "04/16/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "0014TBG",
                "0014TBH",
                "0014TBJ"
            ]
        },
        {
            "grp": "s01",
            "root": "01901",
            "filename": "01901_1.xml",
            "title": "Frame Cracking at the Steer Axle Shock Absorber Bracket Mounting Bolts in the 3000RE Bus Model Built Before January 16, 2001",
            "tm": [
                "3000 RE"
            ],
            "engfam": [],
            "formnum": "01901",
            "startdate": "",
            "enddate": "01/16/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s01",
            "root": "00904",
            "filename": "00904_1.xml",
            "title": "9000 and 9000i Models Built at Garland Between April 22, 1999 and January 4, 2000 with Back to Back (Double Dogbone) Suspension or Midframe Crossmembers Assembled Without Four Retaining Bolts",
            "tm": [
                "9000",
                "9000I"
            ],
            "engfam": [],
            "formnum": "00904 Revised",
            "startdate": "04/22/1999",
            "enddate": "01/04/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s01",
            "root": "99904",
            "filename": "99904_1.xml",
            "title": "Frame Tie Bracket Replacement on 9900 Models",
            "tm": [
                "9000",
                "9900"
            ],
            "engfam": [],
            "formnum": "99904",
            "startdate": "07/01/1998",
            "enddate": "05/03/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s01",
            "root": "98902",
            "filename": "98902_1.xml",
            "title": "9300 Model Frame/Ride Improvement",
            "tm": [
                "9000",
                "9300"
            ],
            "engfam": [],
            "formnum": "98902",
            "startdate": "05/01/1997",
            "enddate": "11/13/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s01",
            "root": "96904",
            "filename": "96904_1.xml",
            "title": "Instructions to Replace Outrigger Brackets",
            "tm": [
                "1000"
            ],
            "engfam": [],
            "formnum": "96904",
            "startdate": "01/21/1994",
            "enddate": "07/30/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "04907",
            "filename": "04907_1.xml",
            "title": "Front Steer Axles, with Code 29WLE, in Certain 4400 Models, Built Between February 3, 2004 and July 27, 2004 Require a Washer Installed Between the Spindle Nut and Bearing",
            "tm": [
                "4400"
            ],
            "engfam": [],
            "formnum": "G-04907",
            "startdate": "02/03/2004",
            "enddate": "07/27/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "29WLE"
            ]
        },
        {
            "grp": "s02",
            "root": "00903",
            "filename": "00903_1.xml",
            "title": "Front Axle Codes 02ADD (Chatham Only), 02ADE (Chatham Only), and 02AED Toe-In Out of Specification on 4x2 and 6x4 8000 and 9000i Models",
            "tm": [
                "8100",
                "8200",
                "8300",
                "9000I"
            ],
            "engfam": [],
            "formnum": "00903",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02ADD",
                "02ADE",
                "02AED"
            ]
        },
        {
            "grp": "s03",
            "root": "07903",
            "filename": "07903_1.xml",
            "title": "Potential for Hendrickson AirTek Front Suspension Spring Contact with the End of a Huck Bolt at the Front Suspension Rear Bracket on International 9000 Model Trucks",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "G-07903",
            "startdate": "08/29/2006",
            "enddate": "10/10/2006",
            "vendor": "AIRTEK",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "03AZE"
            ]
        },
        {
            "grp": "s03",
            "root": "05912",
            "filename": "05912_1.xml",
            "title": "Certain 5000i and 7000 HPV Models Built Between April 19, 2005 and May 16, 2005 with HMX Rear Suspension Codes 14ULX, 14ULY, May Need the Suspension Equalizing Beams Replaced",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7400",
                "7500",
                "7600",
                "7700"
            ],
            "engfam": [],
            "formnum": "G-05912 Revised",
            "startdate": "04/19/2005",
            "enddate": "05/16/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14ULX",
                "14ULY"
            ]
        },
        {
            "grp": "s03",
            "root": "04909",
            "filename": "04909_1.xml",
            "title": "International Ride Optimize Suspensions (IROS) Installed in RE Bus Models Built in the Conway Assembly Plant Before June 16, 2004 Require the IROS System Upgraded to the Current Design Level",
            "tm": [
                "RE 200",
                "RE 300"
            ],
            "engfam": [],
            "formnum": "G-04909 Revised",
            "startdate": "",
            "enddate": "06/16/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14TBS",
                "14TBT"
            ]
        },
        {
            "grp": "s03",
            "root": "99901",
            "filename": "99901_1.xml",
            "title": "4x2 Vari-Rate Rear Suspension Upper U-Bolt Seat Cracking",
            "tm": [
                "2000",
                "3000",
                "4000",
                "8100"
            ],
            "engfam": [],
            "formnum": "99901",
            "startdate": "10/14/1998",
            "enddate": "12/09/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14SAC",
                "14SAE",
                "14SAH",
                "14SAJ",
                "14SAL",
                "14SAM",
                "14SAN",
                "14SAT",
                "14SAX",
                "14SAY",
                "14SAZ",
                "14SBA",
                "14SBB",
                "14SBK"
            ]
        },
        {
            "grp": "s04",
            "root": "08901",
            "filename": "08901_1.xml",
            "title": "Hydraulic Full Power Brake System Power Supply",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400",
                "HC BUS"
            ],
            "engfam": [],
            "formnum": "08901",
            "startdate": "08/11/2006",
            "enddate": "04/18/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "07901",
            "filename": "07901_1.xml",
            "title": "Air Lines May be Crossed at Pressure Protection Valve on Certain FE School and FE Commercial Bus Models",
            "tm": [
                "FE 300"
            ],
            "engfam": [],
            "formnum": "07901",
            "startdate": "02/11/2004",
            "enddate": "11/28/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14TBS",
                "14TBT"
            ]
        },
        {
            "grp": "s04",
            "root": "06916",
            "filename": "06916_1.xml",
            "title": "Truck ordered with Bendix Automatic Traction Control, but Built without Bendix Automatic Traction Control Module",
            "tm": [
                "4200",
                "4300",
                "4400",
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7500",
                "7600",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "G-06916",
            "startdate": "11/28/2005",
            "enddate": "09/23/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04AZJ"
            ]
        },
        {
            "grp": "s04",
            "root": "06911",
            "filename": "06911_1.xml",
            "title": "Inspect Front Axle Brake Linings For Mismatch And Correct Part Number",
            "tm": [
                "5000",
                "5600I",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "G-06911",
            "startdate": "06/10/2006",
            "enddate": "06/18/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "06910",
            "filename": "06910_1.xml",
            "title": "Remove Check Valve Components from Meritor Wabco Pressure Protection Valve (PPV) used in conjunction with the System Saver 1200 Air Dryer",
            "tm": [
                "4200",
                "4300",
                "4400",
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "G-06910R",
            "startdate": "03/04/2001",
            "enddate": "04/27/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "04908",
            "filename": "04908_1.xml",
            "title": "3000 CE Bus Models, Built at the Tulsa Assembly Plant, Between January 22, 2001 and July 14, 2004 with Air Brakes or Optional Air Compressor may have a Pipe Plug in the Air Governor Exhaust Port",
            "tm": [
                "CE BUS"
            ],
            "engfam": [],
            "formnum": "G-04908",
            "startdate": "01/22/2001",
            "enddate": "07/14/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "03401",
            "filename": "03401_1.xml",
            "title": "Caliper Slide Pin Bolts",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "G-03401",
            "startdate": "10/22/2002",
            "enddate": "05/27/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "02905",
            "filename": "02905_1.xml",
            "title": "Addition Of Power Wire For Air Line Dryer On 4400 And 8500 Trucks With Feature Code 04EBD, 04EBS, 04EBT Manufactured At Garland Between June 1, 2001 and March 14, 2002",
            "tm": [
                "4400",
                "8500"
            ],
            "engfam": [],
            "formnum": "02905",
            "startdate": "06/01/2001",
            "enddate": "03/14/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04EBD",
                "04EBS",
                "04EBT"
            ]
        },
        {
            "grp": "s04",
            "root": "02901",
            "filename": "02901_1.xml",
            "title": "Reinforcement of Brake Master Cylinder Drop Hoses in 4300 and 4400 Models Built Between August 14, 2000 and October 15, 2001",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "02901",
            "startdate": "08/14/2000",
            "enddate": "10/15/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "0004083"
            ]
        },
        {
            "grp": "s04",
            "root": "01909",
            "filename": "01909_1.xml",
            "title": "New Design Parking Brake Lever for 4300 and 4400 Models Built Between October 24, 2000 and June 11, 2001 with Hydraulic Brakes",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01909",
            "startdate": "10/24/2000",
            "enddate": "06/11/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "0004083"
            ]
        },
        {
            "grp": "s04",
            "root": "99903",
            "filename": "99903_1.xml",
            "title": "Replacement of Front Axle Brake Spider/Backing Plates on 9000 Conventional Models with Front Axle Code 02AED or 02AEG, and Brake Code 04ERR, with Code 04174 or 04175 or 04JBG",
            "tm": [
                "9000"
            ],
            "engfam": [],
            "formnum": "99903R",
            "startdate": "01/04/1999",
            "enddate": "02/18/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02AED",
                "02AEG",
                "04ERR",
                "04174",
                "04175",
                "04JBG"
            ]
        },
        {
            "grp": "s04",
            "root": "98901",
            "filename": "98901_1.xml",
            "title": "Bendix AD-9 Air Dryer Upgrade",
            "tm": [],
            "engfam": [],
            "formnum": "98901",
            "startdate": "",
            "enddate": "",
            "vendor": "HOLSET",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "97908",
            "filename": "97908_1.xml",
            "title": "Bendix AD-IP Air Dryer Upgrade",
            "tm": [],
            "engfam": [],
            "formnum": "97908",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "95903",
            "filename": "95903_1.xml",
            "title": "Replace 30/30 Inch Rear Double Diaphragm Spring Brake Assemblies With 24/30 Inch Double Diaphragm Spring Brake Assemblies",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "95903",
            "startdate": "",
            "enddate": "05/03/1994",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "01910",
            "filename": "01910_1.xml",
            "title": "Plugged Power Steering Reservoir Dipstick Vent Hole in 4300 and 4400 Models Built Between April 11, 2001 and May 11, 2001 Manufactured at the Springfield Assembly Plant",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01910",
            "startdate": "04/11/2001",
            "enddate": "05/11/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "08902",
            "filename": "08902_1.xml",
            "title": "CityStar Metric Cluster Reprogram",
            "tm": [
                "CITYSTAR"
            ],
            "engfam": [],
            "formnum": "08902R",
            "startdate": "09/21/2007",
            "enddate": "12/11/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "07902",
            "filename": "07902_1.xml",
            "title": "AWARE Module Replacement/Reprogramming",
            "tm": [],
            "engfam": [],
            "formnum": "G-07902R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "06920",
            "filename": "06920_1.xml",
            "title": "Transmission Clean Power and Ground Rewire",
            "tm": [
                "4300",
                "4400",
                "7300"
            ],
            "engfam": [],
            "formnum": "G-06920 ",
            "startdate": "12/01/2005",
            "enddate": "08/24/2006",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "05915",
            "filename": "05915_1.xml",
            "title": "The Engine to Dash Harness used with Caterpillar and Cummins Engines in Certain International 7000, 8000 HPV Models Built Between May 18, 2001 and April 28, 2005 may have a Missing Harness Connector Seal",
            "tm": [
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "05915",
            "startdate": "05/18/2001",
            "enddate": "04/28/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "05911",
            "filename": "05911_1.xml",
            "title": "Rerouting of the Instrument Panel (IP) Harness Behind the Front Grille and Main Chassis Harness at the Transmission and Engine Crossmember to Prevent Chafing on CF 500 and CF 600 Models Built Between August 4, 2004 and August 7, 2005",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "G-05911",
            "startdate": "08/04/2004",
            "enddate": "08/07/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "05902",
            "filename": "05902_1.xml",
            "title": "3200, 4000, 7000, and 8000 HPV Models Built Between March 01, 2004 and January 22, 2005 with an International I313 Engine and Feature Code 15LJM, Heater Fuel / Water Separator, will Require an Overlay Harness to make Code 15LJM Fully Functional",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "G-05902 Revised",
            "startdate": "03/01/2004",
            "enddate": "01/22/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "15LJM"
            ]
        },
        {
            "grp": "s08",
            "root": "05901",
            "filename": "05901_1.xml",
            "title": "Check Electrical System Light Stays On, Without Fault Codes Registered, on Certain HPV Models Built Between September 1, 2004 and September 29, 2004",
            "tm": [
                "1000",
                "1300, 3200, 3300, 4200, 4300, 4400, 7300, 7400, 7500, 7600, 8500, 8600",
                "3200",
                "3300",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "G-05901",
            "startdate": "09/01/2004",
            "enddate": "09/29/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "04906",
            "filename": "04906_1.xml",
            "title": "Version 11.0 and 17.0 Instrument Cluster Improvement for 3200, 4000, 7000, and 8000 HPV Models Built Between January 5, 2003 and November 26, 2003",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "G-04906",
            "startdate": "01/05/2003",
            "enddate": "11/26/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "01911",
            "filename": "01911_1.xml",
            "title": "Re-Programming the Cab Electrical System Controller (ESC) to Prevent the Air Conditioning Compressor from Latching Out Under Certain Conditions on 4300 and 4400 Models Built Before July 19, 2001",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01911R",
            "startdate": "10/24/2000",
            "enddate": "07/19/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "0016WKA"
            ]
        },
        {
            "grp": "s08",
            "root": "00908",
            "filename": "00908_1.xml",
            "title": "Addition of a Relay to the Electrical Circuit in IC Bus Models Built Between March 20, 2000 and September 7, 2000 with Hydraulic Brakes",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "00908",
            "startdate": "03/20/2000",
            "enddate": "09/07/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "97906",
            "filename": "97906_1.xml",
            "title": "Delco-Remy 22SI Alternator Resistor Cable",
            "tm": [],
            "engfam": [],
            "formnum": "97906",
            "startdate": "",
            "enddate": "",
            "vendor": "DELCO-REMY",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "07908",
            "filename": "07908_1.xml",
            "title": "Warning Labels",
            "tm": [
                "7300",
                "7400",
                "7500"
            ],
            "engfam": [],
            "formnum": "G-07908",
            "startdate": "05/31/2006",
            "enddate": "05/31/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "05904",
            "filename": "05904_1.xml",
            "title": "8600 HPV Models Built Before November 22, 2004 May Develop Cracks Along the Rear Bottom Edge of the Fender Extension",
            "tm": [
                "8600"
            ],
            "engfam": [],
            "formnum": "G-05904 Revised",
            "startdate": "",
            "enddate": "11/22/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "03902",
            "filename": "03902_1.xml",
            "title": "The Hood Dampening Cylinder, which Restrains the Hood during Opening and Closing, may Separate or Pull from the Hood Mounting Surface on 9900i and 9900ix Models Built Between April 19, 2001 and January 2, 2002",
            "tm": [
                "9000",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "G-03902",
            "startdate": "04/19/2001",
            "enddate": "01/02/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "03901",
            "filename": "03901_1.xml",
            "title": "Hood Lift Spring Bracket May Separate or Pull from the Mounting Area in 9900i and 9900ix Models Built Between April 19, 2001 and August 20, 2001",
            "tm": [
                "9000I"
            ],
            "engfam": [],
            "formnum": "G-03901",
            "startdate": "04/19/2001",
            "enddate": "08/20/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "01913",
            "filename": "01913_1.xml",
            "title": "Fender Extension Modification for 4300 and 4400 Models with 8000 Lb. Steer Axle, Code 02ADV, Built Between October 24, 2000 and October 17, 2001 to Eliminate Tire Contact when Maneuvering Tight Turns",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01913",
            "startdate": "10/24/2000",
            "enddate": "10/17/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "0002ADV",
                "0027DNB",
                "0027DHH",
                "0027DMA",
                "0027DMC",
                "0027DMW",
                "0027DNS",
                "0027DPZ"
            ]
        },
        {
            "grp": "s09",
            "root": "01905",
            "filename": "01905_1.xml",
            "title": "Replacement Headlamp Assemblies for 4300 and 4400 Models Built Between October 24, 2000 and February 7, 2001",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01905",
            "startdate": "10/24/2000",
            "enddate": "02/07/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "0008000",
                "0008WPB"
            ]
        },
        {
            "grp": "s09",
            "root": "01904",
            "filename": "01904_1.xml",
            "title": "Revision to the Grille to Hood Attachment to Prevent Grille Stress Cracks on 4300 and 4400 Models Built Between October 24, 2000 and April 11, 2001",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01904",
            "startdate": "10/24/2000",
            "enddate": "04/11/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "97907",
            "filename": "97907_1.xml",
            "title": "Installation Procedure for Fender Extension Reinforcement Kit",
            "tm": [
                "9000",
                "9100",
                "9200",
                "9400"
            ],
            "engfam": [],
            "formnum": "97907",
            "startdate": "06/24/1996",
            "enddate": "05/15/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "97904",
            "filename": "97904_1.xml",
            "title": "Installation Procedure of Center Mount Hood Hinge Kits",
            "tm": [
                "9000",
                "9300"
            ],
            "engfam": [],
            "formnum": "97904",
            "startdate": "06/01/1994",
            "enddate": "07/01/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "03904",
            "filename": "03904_1.xml",
            "title": "Removal of Part Number 3566852C1 Certification Label on certain 9400i models built at Escobedo from 8/26/99 through 5/28/01",
            "tm": [
                "9000",
                "9400I"
            ],
            "engfam": [],
            "formnum": "03904",
            "startdate": "08/26/1999",
            "enddate": "05/28/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s11",
            "root": "03905",
            "filename": "03905_1.xml",
            "title": "4200, 4300, 4400, 5000i, and 9000i Models Built Between September 23, 2002 and February 16, 2003 with Clutch Codes 11LEK, 11LEL, 11MEG, 11MEH, and 11MEJ Need a Clutch Release Roller Yoke Kit Installed",
            "tm": [
                "4200",
                "4300",
                "4400",
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "G-03905",
            "startdate": "09/23/2002",
            "enddate": "02/16/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "11LEK",
                "11LEL",
                "11MEG",
                "11MEH",
                "11MEJ"
            ]
        },
        {
            "grp": "s12",
            "root": "08907",
            "filename": "08907_1.xml",
            "title": "Fuel Pressure Regulator and Fuel Pressure Switch on VT 275 Engines in Workhorse Commercial Chassis",
            "tm": [
                "WORKHORSE"
            ],
            "engfam": [
                "VT 275"
            ],
            "formnum": "08907R",
            "startdate": "01/01/2005",
            "enddate": "12/01/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "08904",
            "filename": "08904_1.xml",
            "title": "VT 275 and MaxxForce 5 Case to Head Tube and Plug D-Ring Seal Deterioration",
            "tm": [
                "WORKHORSE"
            ],
            "engfam": [
                "VT 275",
                "MAXXFORCE 5"
            ],
            "formnum": "08904",
            "startdate": "06/01/2004",
            "enddate": "01/10/2008",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "08903",
            "filename": "08903_1.xml",
            "title": "VT 275 and MaxxForce 5 Case to Head Tube and Plug D-Ring Seal Deterioration",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [
                "VT 275",
                "MAXXFORCE 5"
            ],
            "formnum": "08903R2",
            "startdate": "06/01/2004",
            "enddate": "01/10/2008",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "07917",
            "filename": "07917_1.xml",
            "title": "Aftertreatment Calibration and Enhanced Diagnosis",
            "tm": [],
            "engfam": [
                "MAXXFORCE DT",
                "MAXXFORCE 9",
                "MAXXFORCE 10"
            ],
            "formnum": "G-07917",
            "startdate": "03/01/2007",
            "enddate": "11/27/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "07916",
            "filename": "07916_1.xml",
            "title": "Fuel Pressure Regulator and Fuel Pressure Switch on VT 275 Engines in CF 500 and CF 600 Models",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [
                "VT 275"
            ],
            "formnum": "07916R3",
            "startdate": "01/01/2005",
            "enddate": "12/01/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "07915",
            "filename": "07915_1.xml",
            "title": "Fan Blades on 5000 and 7000 Model Vehicles with 2002, 2004 and 2007 Emission Caterpillar and Cummins Engines",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700"
            ],
            "engfam": [],
            "formnum": "07915",
            "startdate": "02/01/2002",
            "enddate": "09/17/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "07914",
            "filename": "07914_1.xml",
            "title": "Plumbing at the Coolant Booster Pump",
            "tm": [
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "G-07914",
            "startdate": "05/10/2007",
            "enddate": "08/27/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "07913",
            "filename": "07913_1.xml",
            "title": "Replace Existing Crankcase Breather System with a Heated Breather System",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "G-07913R",
            "startdate": "08/04/2004",
            "enddate": "08/21/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "07912",
            "filename": "07912_1.xml",
            "title": "Inspect Drive Gear and/or Replace Power Steering Pump On MaxxForce 7 Engines",
            "tm": [
                "4300",
                "CE BUS",
                "BE BUS"
            ],
            "engfam": [
                "MAXXFORCE 7"
            ],
            "formnum": "G-07912R",
            "startdate": "04/04/2007",
            "enddate": "05/02/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "07911",
            "filename": "07911_1.xml",
            "title": "Engine ECM on DT 466 and 570 Engines May Not Be Programmed Correctly",
            "tm": [
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "CE BUS",
                "FE BUS",
                "HC BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "07911",
            "startdate": "01/08/2007",
            "enddate": "03/29/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "07910",
            "filename": "07910_1.xml",
            "title": "Upper Radiator Pipe",
            "tm": [
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "G-07910",
            "startdate": "05/01/2006",
            "enddate": "08/28/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "07909",
            "filename": "07909_1.xml",
            "title": "Leaking Fuel Line on VT 275 Engines",
            "tm": [
                "W42"
            ],
            "engfam": [
                "VT 275"
            ],
            "formnum": "G-07909 ",
            "startdate": "08/18/2005",
            "enddate": "01/29/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "07907",
            "filename": "07907_1.xml",
            "title": "Replace Water Pump Pulley on MaxxForce DT, 9 and 10 Engines",
            "tm": [
                "3200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "8500",
                "CE BUS",
                "RE BUS"
            ],
            "engfam": [
                "MAXXFORCE DT",
                "MAXXFORCE 9",
                "MAXXFORCE 10"
            ],
            "formnum": "G-07907R",
            "startdate": "03/15/2007",
            "enddate": "06/04/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "07906",
            "filename": "07906_1.xml",
            "title": "Install EGR Cooler Deaeration Hose Restrictor",
            "tm": [
                "1000",
                "1300",
                "3200",
                "4300",
                "4400",
                "8500",
                "CE BUS",
                "FE BUS",
                "RC BUS",
                "RE BUS"
            ],
            "engfam": [
                "MAXXFORCE DT"
            ],
            "formnum": "G-07906",
            "startdate": "01/01/2007",
            "enddate": "04/26/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12VYX",
                "12VYW",
                "510924"
            ]
        },
        {
            "grp": "s12",
            "root": "07905",
            "filename": "07905_1.xml",
            "title": "Replace Power Steering Gear Train Gears in International VT 365 Engines in 1652, 3200, 3300, 4200, CE and RE Bus Models Built Between July 1, 2003 and December 31, 2003",
            "tm": [
                "1000",
                "1652",
                "3200",
                "3300",
                "4200",
                "CE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "G-07905",
            "startdate": "07/01/2003",
            "enddate": "12/31/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "07904",
            "filename": "07904_1.xml",
            "title": "Hard Start/No Start or Excessive Smoke After Start",
            "tm": [],
            "engfam": [
                "VT 275",
                "VT 365"
            ],
            "formnum": "G-07904",
            "startdate": "11/14/2001",
            "enddate": "03/16/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "06919",
            "filename": "06919_1.xml",
            "title": "Engine Air Management System Upgrade for Certain International 1652, 3200, 3300, 4200, CE Bus and RE Bus Models Built Between January 1, 2003 and December 31, 2003 with International VT 365 Engines",
            "tm": [
                "1000",
                "1652",
                "3200",
                "3300",
                "4200",
                "CE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "G-06919",
            "startdate": "01/01/2003",
            "enddate": "12/31/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "06918",
            "filename": "06918_1.xml",
            "title": "Replace Power Steering Gear Train Gears in International VT 365 Engines in 3200, 4200, and CE Bus Models Built Between January 1, 2003 and December 31, 2003",
            "tm": [
                "3200",
                "4200",
                "CE BUS"
            ],
            "engfam": [],
            "formnum": "G-06918",
            "startdate": "01/01/2003",
            "enddate": "12/31/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "06917",
            "filename": "06917_1.xml",
            "title": "Leaking Fuel Line on VT 275 Engines",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [
                "VT 275"
            ],
            "formnum": "G-06917 ",
            "startdate": "06/02/2004",
            "enddate": "12/06/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "06915",
            "filename": "06915_1.xml",
            "title": "Replace Existing Breather System with a Closed Breather System",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "G-06915",
            "startdate": "08/03/2004",
            "enddate": "08/22/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "06914",
            "filename": "06914_1.xml",
            "title": "Replace Existing Breather System with a Closed Breather System",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "G-06914",
            "startdate": "08/03/2004",
            "enddate": "08/22/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "06908",
            "filename": "06908_1.xml",
            "title": "The Engine Dip Stick Tube Support Bracket and P-Clip must be Removed",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "06908",
            "startdate": "05/02/2006",
            "enddate": "07/05/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "06907",
            "filename": "06907_1.xml",
            "title": "New Design Engine Block Heater to Eliminate Coolant Leakage in International DT 570 Engines in certain 4000, 7000, 8000 HPV Models Built Between April 7, 2004 and July 19, 2006",
            "tm": [
                "4400",
                "7300",
                "7400",
                "7500",
                "8500"
            ],
            "engfam": [
                "DT 570"
            ],
            "formnum": "G-06907R1",
            "startdate": "04/07/2004",
            "enddate": "07/19/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "06906",
            "filename": "06906_1.xml",
            "title": "Engine Air Intake Hose Flexibility in International 7600 and 7700 Models Built Between September 1, 2002 and October 1, 2005 with Cummins ISM Engines",
            "tm": [
                "7600",
                "7700"
            ],
            "engfam": [],
            "formnum": "G-06906",
            "startdate": "09/01/2002",
            "enddate": "10/01/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "06904",
            "filename": "06904_1.xml",
            "title": "Engine Air Management System Upgrade for Certain International 3200 and 4200 Models Built Between November 1, 2001 and December 31, 2002 with International VT 365 Engines",
            "tm": [
                "3200",
                "4200"
            ],
            "engfam": [],
            "formnum": "G-06904",
            "startdate": "11/01/2001",
            "enddate": "12/31/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "06903",
            "filename": "06903_1.xml",
            "title": "Replace Power Steering Gear Train Gears in International VT 365 Engines in 3200, 4200 Models Built Between November 1, 2001 and December 31, 2002",
            "tm": [
                "3200",
                "4200"
            ],
            "engfam": [],
            "formnum": "G-06903",
            "startdate": "11/01/2001",
            "enddate": "12/31/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "06902",
            "filename": "06902_1.xml",
            "title": "Valve Cover and Breather Upgrade for Certain International 3200 and 4200 Models Built Between November 1, 2001 and December 31, 2002 with International VT 365 Engines",
            "tm": [
                "3200",
                "4200"
            ],
            "engfam": [],
            "formnum": "06902",
            "startdate": "11/01/2001",
            "enddate": "12/31/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "06901",
            "filename": "06901_1.xml",
            "title": "Rocker Arm Replacement Kit for International VT 365 Engines used in International 3200, 4200 Models Built Between November 1, 2001 and December 31, 2002",
            "tm": [
                "3200",
                "4200"
            ],
            "engfam": [],
            "formnum": "G-06901",
            "startdate": "11/01/2001",
            "enddate": "12/31/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "05913",
            "filename": "05913_1.xml",
            "title": "CF 500 and CF 600 Models Built Between August 2, 2004 and September 13, 2005 Need a Protective Conduit Installed Over the Engine Cooling System Deaeration and Heater Return Hoses",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "G-05913",
            "startdate": "08/02/2004",
            "enddate": "09/13/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "05909",
            "filename": "05909_1.xml",
            "title": "Engine Reconfiguration and New Exhaust Emission Label for VT 365 Engines, ESN 0112360 through 141748, with Feature Code 12990 used in Truck Models Built Between February 10, 2004 and September 7, 2004",
            "tm": [
                "1000",
                "1652 SC",
                "4200"
            ],
            "engfam": [
                "VT 365"
            ],
            "formnum": "G-05909",
            "startdate": "02/10/2004",
            "enddate": "09/07/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12990"
            ]
        },
        {
            "grp": "s12",
            "root": "05908",
            "filename": "05908_1.xml",
            "title": "All FE 300 Bus Models Built Between March 1, 2004 and April 5, 2005 with Allison Automatic Transmissions May Develop a Transmission Fluid Leak in the Jumper Hose Between the Radiator In-Tank Transmission Cooler and the Transmission Air to Oil Cooler",
            "tm": [
                "FE 300"
            ],
            "engfam": [],
            "formnum": "G-05908",
            "startdate": "03/01/2004",
            "enddate": "04/05/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "05906",
            "filename": "05906_1.xml",
            "title": "HPV Models Built Between March 1, 2004 and April 1, 2005 with Remote Engine Speed Control Module (RESCM), Code 12VXY, will Require a Software Update",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "G-05906",
            "startdate": "03/01/2004",
            "enddate": "04/01/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "05905",
            "filename": "05905_1.xml",
            "title": "9200i, 9400i, and 9900i Models Built with Cummins ISX Engines may have an Incorrect Diameter Spring in the Lower Radiator Hose",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "G-05905",
            "startdate": "06/01/2004",
            "enddate": "08/30/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "05903",
            "filename": "05903_1.xml",
            "title": "5000i and 9000i Models with Cummins ISX Engines Built at the Chatham and Garland Assembly Plants Between November 6, 2002 and April 1, 2004 and 9000i Models Built at the Escobedo Assembly Plant Between November 6, 2002 and October 18, 2004 Require Replacing the Fan Hub Mounting Fasteners and Tighten to New Specification",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "G-05903 Revised",
            "startdate": "11/06/2002",
            "enddate": "10/18/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "04905",
            "filename": "04905_1.xml",
            "title": "9000i Models Built at the Escobedo Assembly Plant, Between August 1, 2002 and February 12, 2004, with Post 2002 Emission Cummins ISM Engines have the Heater Piping Mounting Bracket Mislocated on the Engine",
            "tm": [
                "9000I"
            ],
            "engfam": [],
            "formnum": "04905",
            "startdate": "08/01/2002",
            "enddate": "02/12/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "04904",
            "filename": "04904_1.xml",
            "title": "Fan Blade to Fan Shroud Contact in 5500i and 5600i Models Built Between November 1, 2002 and March 31, 2004 with Post 2004 Cummins and Caterpillar Emission Engines",
            "tm": [
                "5000",
                "5500I",
                "5600I"
            ],
            "engfam": [],
            "formnum": "G-04904",
            "startdate": "11/01/2002",
            "enddate": "03/31/2004",
            "vendor": [
                "CUMMINS",
                "CATERPILLAR"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "04902",
            "filename": "04902_1.xml",
            "title": "Replacement of Pre 2004 Emissions Surge Tanks on 7600, 8600 Models Built Before December 1, 2003 with Caterpillar C11, C13 Acert Engines; and 9200, 9400, 9900i Models Built Before December 20, 2003 with Caterpillar C13 Acert Engines",
            "tm": [
                "7600",
                "8600",
                "9000",
                "9200",
                "9400",
                "9900I"
            ],
            "engfam": [],
            "formnum": "G-04902",
            "startdate": "",
            "enddate": "12/20/2003",
            "vendor": "CATERPILLAR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "04901",
            "filename": "04901_1.xml",
            "title": "High Pressure Oil Pump Fitting and Plug Leakage in International Truck and Bus Models Built Between March 1, 2002 and October 15, 2002 with International DT 466E and 530E Engines",
            "tm": [
                "IC BUS",
                "3000 FE",
                "3000 RE",
                "3200",
                "3800",
                "4300",
                "4400",
                "7300",
                "7400"
            ],
            "engfam": [],
            "formnum": "G-04901",
            "startdate": "03/01/2002",
            "enddate": "10/15/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "03908",
            "filename": "03908_1.xml",
            "title": "Front Cover and Oil Cooler Header Gasket Resiliency Depletion on International DT 466 and 530 Engines Built Between August 1, 2000 and January 22, 2004",
            "tm": [
                "2000",
                "3000",
                "IC BUS",
                "4300",
                "4400",
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500"
            ],
            "engfam": [
                "DT 466",
                "530"
            ],
            "formnum": "G-03908 Revised",
            "startdate": "08/01/2000",
            "enddate": "01/22/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "03906",
            "filename": "03906_1.xml",
            "title": "8600 Models with Cummins ISM 2002 Emission Engines, Built Between August 1, 2002 and February 3, 2003, Require Inspection and May Require Replacement of the Air Cleaner Hose Clamp",
            "tm": [
                "8600"
            ],
            "engfam": [],
            "formnum": "G-03906",
            "startdate": "08/01/2002",
            "enddate": "02/03/2003",
            "vendor": "CUMMINS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "03903",
            "filename": "03903_1.xml",
            "title": "Allison Transmission Upshifting Complaints in International 4300 and 4400 Models with DT 466 Engines Built in Escobedo Between July 25, 2002 and November 22, 2002",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [
                "DT 466"
            ],
            "formnum": "03903",
            "startdate": "07/25/2002",
            "enddate": "11/22/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "02908",
            "filename": "02908_1.xml",
            "title": "9200i, 9400i, and 9900i Models with Cummins ISX Engines and Leece Neville Starters, International Codes 08WWM and 08WTB, Built at Escobedo Before August 27, 2002 and at Chatham Before August 29, 2002 have Incorrect Starter Nose Cone Housings",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [
                "CUMMINS ISX"
            ],
            "formnum": "G-02908",
            "startdate": "",
            "enddate": "08/29/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08WWM",
                "08WTB"
            ]
        },
        {
            "grp": "s12",
            "root": "02906",
            "filename": "02906_1.xml",
            "title": "Rerouting the Heater Return Hose to Extend Radiator Life in 3200, 4200, 4300, 4400, and 8500 Models (Manual Transmissions Only)",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400",
                "8500"
            ],
            "engfam": [],
            "formnum": "G-02906",
            "startdate": "",
            "enddate": "09/17/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "02902",
            "filename": "02902_1.xml",
            "title": "New Design Surge Tank Cap for 7300, 7400 and 7500 Models Built Between May 28, 2001 and March 19, 2002 with Dual De-Aeration Tanks in the Engine Cooling System",
            "tm": [
                "7300",
                "7400",
                "7500"
            ],
            "engfam": [],
            "formnum": "02902",
            "startdate": "05/28/2001",
            "enddate": "03/19/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "01914",
            "filename": "01914_1.xml",
            "title": "Insufficient Torque on the Engine Oil Pick Up Tube Support Mounting Bolt and Nut on International DT 466 and 530 Engines Used in 2654, 4300, 4400, and 7400 Models Built Between October 12, 2001 and December 5, 2001",
            "tm": [
                "2000",
                "2654",
                "4300",
                "4400",
                "7400"
            ],
            "engfam": [
                "DT 466",
                "530"
            ],
            "formnum": "01914",
            "startdate": "10/12/2001",
            "enddate": "12/05/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "01903",
            "filename": "01903_1.xml",
            "title": "Replacement Rear Engine Mount Snubber Washer Used on 4300 and 4400 Models with VIN Numbers before 2H411832 Built Between October 24, 2000 and March 21, 2001",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01903",
            "startdate": "10/24/2000",
            "enddate": "03/21/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "01902",
            "filename": "01902_1.xml",
            "title": "Engine Rear Mounting Brackets Attached to the Flywheel Housing May Be Loose Due to Inadequate Torquing of the Bracket Mounting Bolts in 5000i and 9000i Models Built at Garland Between August 9, 2000 and October 17, 2000",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "01902",
            "startdate": "08/09/2000",
            "enddate": "10/17/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "00909",
            "filename": "00909_1.xml",
            "title": "Borg- Warner SA75 Fan Drive, International Code 12TSV, Not Engaging at the Correct Temperature and/or RPM on International T 444E Engines",
            "tm": [
                "1000",
                "3400",
                "3800",
                "IC BUS",
                "4700"
            ],
            "engfam": [
                "T 444E"
            ],
            "formnum": "00909",
            "startdate": "08/09/2000",
            "enddate": "10/04/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "00907",
            "filename": "00907_1.xml",
            "title": "Allison Transmission Upshifting Complaints in International 1652, 3400, 3800, and 4700 Models with T 444E Engine Codes 12NNA, 12NNB, 12NNC, 12NND, 12NNE, 12NNH, 12NNJ, and 12NNK Built Between August 1, 2000 and August 7, 2000",
            "tm": [
                "1000",
                "1652",
                "3400",
                "3800",
                "4700"
            ],
            "engfam": [
                "T 444E"
            ],
            "formnum": "00907",
            "startdate": "08/01/2000",
            "enddate": "08/07/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "00902",
            "filename": "00902_1.xml",
            "title": "Incorrect Engine Governed RPM on 2/4/8000 Models Built Between August 5, 1999 and October 28, 1999 with DT 466E Engines, Rated 250 HP, and Allison Transmissions",
            "tm": [
                "2000",
                "4000",
                "8000"
            ],
            "engfam": [
                "DT 466E"
            ],
            "formnum": "00902",
            "startdate": "08/05/1999",
            "enddate": "10/28/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "99902",
            "filename": "99902_1.xml",
            "title": "Poor Acceleration and Stumble with 1998 DT 466E F230/250 High Torque Engines",
            "tm": [],
            "engfam": [
                "DT 466E"
            ],
            "formnum": "99902",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "98904",
            "filename": "98904_1.xml",
            "title": "Engine Road Draft Tube Extension",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "98904",
            "startdate": "",
            "enddate": "03/28/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "98903",
            "filename": "98903_1.xml",
            "title": "Poor Cold Startability of DT 466E Engines with Navistar Single Box Engine Control Module (ECM)",
            "tm": [],
            "engfam": [
                "DT 466E"
            ],
            "formnum": "98903R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "97909",
            "filename": "97909_1.xml",
            "title": "Possible Inadequate Fan to Radiator Clearance",
            "tm": [
                "9000",
                "9300"
            ],
            "engfam": [],
            "formnum": "97909",
            "startdate": "01/02/1997",
            "enddate": "05/21/1997",
            "vendor": "CUMMINS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "97905",
            "filename": "97905_1.xml",
            "title": "Engine Air Intake System Revision",
            "tm": [
                "9000",
                "9800"
            ],
            "engfam": [],
            "formnum": "97905",
            "startdate": "02/26/1996",
            "enddate": "06/26/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "97902",
            "filename": "97902_1.xml",
            "title": "Fan Belt Misalignment with Cummins N-14 Engine",
            "tm": [
                "9000",
                "9300",
                "9400"
            ],
            "engfam": [
                "CUMMINS"
            ],
            "formnum": "97902",
            "startdate": "07/01/1996",
            "enddate": "05/14/1997",
            "vendor": "CUMMINS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "95908",
            "filename": "95908_1.xml",
            "title": "Radiator",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "95908",
            "startdate": "",
            "enddate": "12/12/1994",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "95907",
            "filename": "95907_1.xml",
            "title": "Fuel Injection Pump",
            "tm": [
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "95907",
            "startdate": "08/24/1994",
            "enddate": "05/01/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12NEA",
                "12NGA"
            ]
        },
        {
            "grp": "s12",
            "root": "95904",
            "filename": "95904_1.xml",
            "title": "Oil Dip Stick Tube",
            "tm": [
                "9000",
                "9700"
            ],
            "engfam": [],
            "formnum": "95904",
            "startdate": "09/06/1994",
            "enddate": "12/07/1994",
            "vendor": "DETROIT DIESEL",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "95901",
            "filename": "95901_1.xml",
            "title": "Install Refrigerant Compressor Support",
            "tm": [],
            "engfam": [],
            "formnum": "95901",
            "startdate": "",
            "enddate": "",
            "vendor": "CUMMINS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "06912",
            "filename": "06912_1.xml",
            "title": "Inspect For Possible Missing Bolt at Rear Mount Pad",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "G-06912",
            "startdate": "07/19/2006",
            "enddate": "08/18/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "05914",
            "filename": "05914_1.xml",
            "title": "Transmission Shift Cable Exposure to the Exhaust Manifold in CF 500 and CF 600 Models Built Between January 1, 2005 and July 14, 2005",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "G-05914",
            "startdate": "01/01/2005",
            "enddate": "07/14/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "04911",
            "filename": "04911_1.xml",
            "title": "7400 models with DT 570 Engine, Code 12NPW, and Allison Transmission Built Between April 6, 2004 and August 13, 2004 May Experience Poor Shift Quality",
            "tm": [
                "7400"
            ],
            "engfam": [],
            "formnum": "G-04911",
            "startdate": "04/06/2004",
            "enddate": "08/13/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "04910",
            "filename": "04910_1.xml",
            "title": "Certain 5000i Models and 7000 Models  with Caterpillar C-12 or C13 Engines and Allison HD Transmissions May Have Poor Clamp Load from the Flex Plate Mounting Bolts to the Torque Converter",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7600"
            ],
            "engfam": [],
            "formnum": "G-04910 R1",
            "startdate": "07/19/2001",
            "enddate": "06/08/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "04903",
            "filename": "04903_1.xml",
            "title": "Replace Meritor Transfer Case Oil Pump with New Design Oil Pump in 7300, 7400, 7500 4X4 and 6X6 Models Built Between September 27, 2001 and September 15, 2003",
            "tm": [
                "7300",
                "7400",
                "7500"
            ],
            "engfam": [],
            "formnum": "G-04903 Revised",
            "startdate": "09/27/2001",
            "enddate": "09/15/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13TKA",
                "13TKB",
                "13TKC"
            ]
        },
        {
            "grp": "s13",
            "root": "03909",
            "filename": "03909_1.xml",
            "title": "Certain 7000 4X4 and 6X6 Models, Built Between August 4, 2003 and September 7, 2003, at the Garland Assembly Plant Do Not Have the Front Axle Engagement Sensor Installed on the Transfer Case",
            "tm": [
                "7300",
                "7400",
                "7500"
            ],
            "engfam": [],
            "formnum": "G-03909",
            "startdate": "08/04/2003",
            "enddate": "09/07/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13TKA",
                "13TKB",
                "13TKC"
            ]
        },
        {
            "grp": "s13",
            "root": "02907",
            "filename": "02907_1.xml",
            "title": "Relocation of the Transfer Case Breather and Install a Breather into the Neutral Position Air Inlet Port in 7300, 7400, and 7500, 4X4 and 6X6 Models Built Between September 27, 2001 and July 30, 2002",
            "tm": [
                "7300",
                "7400",
                "7500"
            ],
            "engfam": [],
            "formnum": "G-02907",
            "startdate": "09/27/2001",
            "enddate": "07/30/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "96906",
            "filename": "96906_1.xml",
            "title": "Installation of Aeroquip Quick Connect (STC)  Fitting Locking Clips",
            "tm": [
                "2000",
                "5000",
                "8000",
                "9000"
            ],
            "engfam": [],
            "formnum": "96906",
            "startdate": "05/01/1995",
            "enddate": "09/20/1996",
            "vendor": "AEROQUIP",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "95906",
            "filename": "95906_1.xml",
            "title": "Transmission Oil Cooler Mounting Bracket",
            "tm": [
                "2000"
            ],
            "engfam": [],
            "formnum": "95906",
            "startdate": "06/28/1994",
            "enddate": "02/23/1995",
            "vendor": "CUMMINS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "06913",
            "filename": "06913_1.xml",
            "title": "Meritor Rear Tandem Axle Adjuster Lock Screw Breakage",
            "tm": [
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "G-06913R2",
            "startdate": "03/22/2004",
            "enddate": "02/08/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "05907",
            "filename": "05907_1.xml",
            "title": "Certain 9000i Models Built Between March 29, 2005 and April 26, 2005 with ArvinMeritor RT40 Series Tandem Axles and Suspension Codes 14UNL, 14UNM, and 14UNN, May Require the Inter Axle Prop Shaft Replaced",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "G-05907",
            "startdate": "03/29/2005",
            "enddate": "04/26/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14UNL",
                "14UNM",
                "14UNN"
            ]
        },
        {
            "grp": "s14",
            "root": "96905",
            "filename": "96905_1.xml",
            "title": "Replace Incorrect Rear Rear Spring Seats and  U-Bolt Plates",
            "tm": [
                "9000",
                "9800"
            ],
            "engfam": [],
            "formnum": "96905",
            "startdate": "",
            "enddate": "06/04/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14673",
                "14GEP",
                "14GER",
                "14GES"
            ]
        },
        {
            "grp": "s14",
            "root": "95911",
            "filename": "95911_1.xml",
            "title": "Power Divider Air Shift Cylinder",
            "tm": [],
            "engfam": [],
            "formnum": "95911",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14GDA",
                "14GDC",
                "14472",
                "14474"
            ]
        },
        {
            "grp": "s15",
            "root": "05910",
            "filename": "05910_1.xml",
            "title": "Replacement of 100 Gallon Between the Rails (BTR) Fuel Tanks on CE, FE and RE Buses Built Between March 16, 2005 and July 20, 2005",
            "tm": [
                "CE 200",
                "CE 300",
                "FE 300",
                "RE 200",
                "RE 300"
            ],
            "engfam": [],
            "formnum": "G-05910",
            "startdate": "03/16/2005",
            "enddate": "07/20/2005",
            "vendor": "BEACH MFG",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s15",
            "root": "03910",
            "filename": "03910_1.xml",
            "title": "Certain 8600 Models, Built Between January 26, 2003 and September 17, 2003, Require 12 MM Bolts Replaced with 16MM Bolts on the Fuel Tank Crossover Bracket",
            "tm": [
                "8600"
            ],
            "engfam": [],
            "formnum": "G-03910",
            "startdate": "01/26/2003",
            "enddate": "09/17/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "06909",
            "filename": "06909_1.xml",
            "title": "Cab Entry/Egress Improvement and Air Line/Fitting Protection for Certain International 8600 Models Built Between April 10, 2006 and June 5, 2006 with Feature Codes 16ZGM and 508046",
            "tm": [
                "8600"
            ],
            "engfam": [],
            "formnum": "G-06909-R1",
            "startdate": "04/10/2006",
            "enddate": "06/05/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16ZGM",
                "508046"
            ]
        },
        {
            "grp": "s16",
            "root": "03907",
            "filename": "03907_1.xml",
            "title": "The Hood Lower Hinge Bolts May Contact the Air Conditioning Lines in 7600 SBA Models Built at the Garland Assembly Plant before July 25, 2003",
            "tm": [
                "7600"
            ],
            "engfam": [],
            "formnum": "G-03907",
            "startdate": "",
            "enddate": "07/25/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "02904",
            "filename": "02904_1.xml",
            "title": "Certain New Production 4000, 7000, and 8000 Crew Cab and Extended Cab Models have Rear Side Window Glass that Meets FMVSS Requirements but Will Not Meet European ECE Regulation 43. The Models Involved Were Built at Springfield and Garland Assembly Plants Between September 21, 2001 and May 1, 2002",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "8500"
            ],
            "engfam": [],
            "formnum": "G-02904",
            "startdate": "09/21/2001",
            "enddate": "05/01/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "02903",
            "filename": "02903_1.xml",
            "title": "New Windshield Washer Solvent Reservoir for 73/74/7500 and 8500 Models Built Between May 28, 2001 and February 27, 2002",
            "tm": [
                "7300",
                "7400",
                "7500",
                "8500"
            ],
            "engfam": [],
            "formnum": "02903",
            "startdate": "05/28/2001",
            "enddate": "02/27/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "01908",
            "filename": "01908_1.xml",
            "title": "Revised step height on driver and passenger side for 4300 and 4400 Models built before April 3, 2001 with 22.5 inch wheels and 65 gallon fuel tanks",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01908",
            "startdate": "10/24/2000",
            "enddate": "04/03/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "0015DJR",
                "0015SCG",
                "0027DHH",
                "0027DMA",
                "0027DMC",
                "0027DMW",
                "0027DNB",
                "0027DNS",
                "0027DPZ"
            ]
        },
        {
            "grp": "s16",
            "root": "01907",
            "filename": "01907_1.xml",
            "title": "Mounting Bolt Replacement for Driver and Passenger Side Cab Entry Steps on 4300 and 4400 Models Built Before April 11, 2001",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01907",
            "startdate": "10/24/2000",
            "enddate": "04/11/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "00906",
            "filename": "00906_1.xml",
            "title": "Replacement of CabMate Suspension Lower Crossmember Mounting Bracket in 9000i Pro Sleeper Models Built in Chatham Between February 1, 2000 and April 10, 2000, and Escobedo Between February 1, 2000 and May 2, 2000.",
            "tm": [
                "9000I"
            ],
            "engfam": [],
            "formnum": "00906",
            "startdate": "02/01/2000",
            "enddate": "05/02/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "00905",
            "filename": "00905_1.xml",
            "title": "Contaminated Engine Air Intake in 9800SFA Models with 89 Inch Cab, Roof Air Deflector and High Horsepower Engines (370 HP and above) Built Between March 6, 1996 and March 28, 1999",
            "tm": [
                "9000",
                "9800SFA"
            ],
            "engfam": [],
            "formnum": "00905",
            "startdate": "03/06/1996",
            "enddate": "03/28/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "00901",
            "filename": "00901_1.xml",
            "title": "Engine Water Ingestion in 5000i and 9000i Models",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "00901",
            "startdate": "",
            "enddate": "01/10/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "99909",
            "filename": "99909_1.xml",
            "title": "Addition of Side Skirt Center Panel Brackets to 9000 and 9000i Models",
            "tm": [
                "9000",
                "9200",
                "9200I",
                "9400",
                "9400I"
            ],
            "engfam": [],
            "formnum": "99909",
            "startdate": "09/09/1998",
            "enddate": "07/01/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16XPE",
                "16XPG"
            ]
        },
        {
            "grp": "s16",
            "root": "99908",
            "filename": "99908_1.xml",
            "title": "Replacement of Instrument Panel Defroster Filler Panel with Two Piece Design",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "99908",
            "startdate": "",
            "enddate": "07/16/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "99907",
            "filename": "99907_1.xml",
            "title": "Replacement of RH and LH Door Lower Trim Panel",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "99907",
            "startdate": "",
            "enddate": "08/02/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "99906",
            "filename": "99906_1.xml",
            "title": "Replacement of Right Side Door View Window",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "99906",
            "startdate": "",
            "enddate": "07/26/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "99905",
            "filename": "99905_1.xml",
            "title": "Replacement of Right and Left Door Window Glass and Regulator Bracket",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "99905",
            "startdate": "05/25/1999",
            "enddate": "07/19/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "97903",
            "filename": "97903_1.xml",
            "title": "Refrigerant Compressor Belt Idler Pulley Alignment",
            "tm": [
                "9000",
                "9100",
                "9200",
                "9400",
                "9800"
            ],
            "engfam": [],
            "formnum": "97903",
            "startdate": "10/23/1996",
            "enddate": "03/24/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "97901",
            "filename": "97901_1.xml",
            "title": "Headlight Movement - Modification",
            "tm": [
                "9000",
                "9100",
                "9200",
                "9400"
            ],
            "engfam": [],
            "formnum": "97901",
            "startdate": "06/27/1996",
            "enddate": "04/09/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "96908",
            "filename": "96908_1.xml",
            "title": "Misaligned Spot Welds",
            "tm": [
                "2000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "96908 Rev. 1",
            "startdate": "07/16/1996",
            "enddate": "09/06/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "96907",
            "filename": "96907_1.xml",
            "title": "Refrigerant Compressor Belt Loss",
            "tm": [
                "9000",
                "9200",
                "9400",
                "9800"
            ],
            "engfam": [],
            "formnum": "96907 Revised",
            "startdate": "03/04/1996",
            "enddate": "11/11/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "96903",
            "filename": "96903_1.xml",
            "title": "Replacement of Panel Above Passenger Seat",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "96903",
            "startdate": "04/01/1994",
            "enddate": "05/01/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "96901",
            "filename": "96901_1.xml",
            "title": "Replacement of Storage Cabinet Above Passenger Seat",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "96901",
            "startdate": "04/01/1994",
            "enddate": "05/01/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "95910",
            "filename": "95910_1.xml",
            "title": "Seal Sleeper Area, and Replace Blower Motors",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "95910",
            "startdate": "",
            "enddate": "10/01/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "95909",
            "filename": "95909_1.xml",
            "title": "Reinforce the Front Pedal Support",
            "tm": [
                "1000"
            ],
            "engfam": [],
            "formnum": "95909",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "95905",
            "filename": "95905_1.xml",
            "title": "Cabinet Replacement",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "95905",
            "startdate": "06/01/1994",
            "enddate": "12/22/1994",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "08905",
            "filename": "08905_1.xml",
            "title": "Instrument Cluster Connector Interference with the Defroster Duct on CE and BE Bus Models with MaxxForce 7 or MaxxForce DT Engines",
            "tm": [
                "BE BUS",
                "CE BUS"
            ],
            "engfam": [],
            "formnum": "G-08905",
            "startdate": "06/07/2006",
            "enddate": "01/30/2008",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "06905",
            "filename": "06905_1.xml",
            "title": "Warning labels on air intake and air cleaner housing may be missing or not visible on certain CE, RE, and PT bus \tmodels built at the Conway, Arkansas Bus Assembly Plant before 11/28/2005",
            "tm": [
                "CE BUS",
                "RE BUS",
                "PT BUS"
            ],
            "engfam": [],
            "formnum": "G-06905",
            "startdate": "",
            "enddate": "11/28/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "03402",
            "filename": "03402_1.xml",
            "title": "Flip Seat Cushion Width",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "G-03402",
            "startdate": "01/01/2002",
            "enddate": "10/16/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        }
    ],
    "tsi": [
        {
            "grp": "s01",
            "root": "070101",
            "filename": "070101_1.xml",
            "title": "Huck Fasteners",
            "tm": [],
            "engfam": [],
            "formnum": "07-01-01R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s01",
            "root": "030101R",
            "filename": "030101r_1.xml",
            "title": "Frame Reinforcements",
            "tm": [
                "3400",
                "3600",
                "3800",
                "4600",
                "4700",
                "4800",
                "4900"
            ],
            "engfam": [],
            "formnum": "03-01-01R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s01",
            "root": "970101",
            "filename": "970101_1.xml",
            "title": "Stamped Steel \"Dog Bone\" Crossmember Identification",
            "tm": [],
            "engfam": [],
            "formnum": "97-01-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s01",
            "root": "960102R",
            "filename": "960102r_1.xml",
            "title": "Removal and Installation of Huckspin Huck Bolt Fasteners",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "96-01-02R",
            "startdate": "",
            "enddate": "",
            "vendor": "HUCKSPIN",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s01",
            "root": "960101",
            "filename": "960101_1.xml",
            "title": "Hendrickson Suspension Bogie Crossmember Crack",
            "tm": [
                "5000"
            ],
            "engfam": [],
            "formnum": "96-01-01",
            "startdate": "",
            "enddate": "",
            "vendor": "HENDRICKSON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s01",
            "root": "920101",
            "filename": "920101_1.xml",
            "title": "Modification To The Vehicle Lifting Bar For Decking and Undecking",
            "tm": [
                "8100",
                "8200",
                "8300",
                "9000"
            ],
            "engfam": [],
            "formnum": "92-01-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "050201",
            "filename": "050201_1.xml",
            "title": "Diagnosis of Chassis Wander Complaints",
            "tm": [],
            "engfam": [],
            "formnum": "05-02-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "040202",
            "filename": "040202_1.xml",
            "title": "New Dana Spicer Steer Axle Hubcaps for Oil Applications",
            "tm": [
                "4200",
                "4300",
                "4400",
                "5000",
                "5500I",
                "5600I",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-02-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "040201",
            "filename": "040201_1.xml",
            "title": "Steer Axle Alignment",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4200",
                "4300",
                "4400",
                "4700",
                "4900",
                "5000",
                "7300",
                "7400",
                "7500",
                "7700",
                "8500",
                "8600",
                "9000"
            ],
            "engfam": [],
            "formnum": "04-02-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "020202",
            "filename": "020202_1.xml",
            "title": "ArvinMeritor Wheel End Contaminant Protection and O-Ring Recommendations for All Non-Driving Front Axles with Unitized Wheel Ends",
            "tm": [],
            "engfam": [],
            "formnum": "02-02-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "020201",
            "filename": "020201_1.xml",
            "title": "ArvinMeritor King Pin Cap Change for All 12,000 Lb. Non-Driving Front Steer Axles with Unitized Wheel Ends",
            "tm": [],
            "engfam": [],
            "formnum": "02-02-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "010201",
            "filename": "010201_1.xml",
            "title": "Procedure for Installing Gunite Exciter Rings on Gunite Hubs Used on 10K and 14.6K Front Steer Axles",
            "tm": [],
            "engfam": [],
            "formnum": "01-02-01",
            "startdate": "",
            "enddate": "",
            "vendor": "GUNITE",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "970201R",
            "filename": "970201r_1.xml",
            "title": "Rockwell Front Steer Axles With Unitized Wheel Hub Assemblies, Navistar Code 02ARK and 02ARL",
            "tm": [
                "2000",
                "3000",
                "4000",
                "8100",
                "8200",
                "8300",
                "9000"
            ],
            "engfam": [],
            "formnum": "97-02-01R",
            "startdate": "",
            "enddate": "",
            "vendor": "ROCKWELL",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02ARK",
                "02ARL"
            ]
        },
        {
            "grp": "s02",
            "root": "950203",
            "filename": "950203_1.xml",
            "title": "Front Steer Axle Ackerman",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "95-02-03",
            "startdate": "07/17/1995",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02ADA",
                "02ADB"
            ]
        },
        {
            "grp": "s02",
            "root": "950202",
            "filename": "950202_1.xml",
            "title": "Spicer Tie Rod End Replacement Criteria",
            "tm": [],
            "engfam": [],
            "formnum": "95-02-02",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "950201",
            "filename": "950201_1.xml",
            "title": "Rockwell Tie Rod and Steering Arm Change",
            "tm": [],
            "engfam": [],
            "formnum": "95-02-01",
            "startdate": "",
            "enddate": "",
            "vendor": "ROCKWELL",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "930203",
            "filename": "930203_1.xml",
            "title": "Steer Axle Alignment Specifications",
            "tm": [],
            "engfam": [],
            "formnum": "93-02-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "930201R",
            "filename": "930201r_1.xml",
            "title": "Tie Rod and Drag Link End Inspection Information",
            "tm": [],
            "engfam": [],
            "formnum": "93-02-01R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "910203",
            "filename": "910203_1.xml",
            "title": "Wear Limits For King Pin Bushing Wear (Side Play) and Spindle Vertical End Play",
            "tm": [],
            "engfam": [],
            "formnum": "91-02-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s02",
            "root": "910202",
            "filename": "910202_1.xml",
            "title": "Caster Setting For 02ADD and 02ADE Steer Axles",
            "tm": [
                "9000",
                "9700"
            ],
            "engfam": [],
            "formnum": "91-02-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02ADD",
                "02ADE"
            ]
        },
        {
            "grp": "s02",
            "root": "910201",
            "filename": "910201_1.xml",
            "title": "Standardized Tie Rod Ends and Tie Rod Tube Replacement On Discontinued Steer Axle Codes 02337(SBA) and 02343, With Drop Tie Rod Ends",
            "tm": [
                "8100",
                "8200",
                "8300",
                "9000",
                "9300",
                "9400",
                "9700"
            ],
            "engfam": [],
            "formnum": "91-02-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02337",
                "02343"
            ]
        },
        {
            "grp": "s03",
            "root": "080301",
            "filename": "080301_1.xml",
            "title": "IROS Spring Hanger Replacement Kit (All Models)",
            "tm": [],
            "engfam": [],
            "formnum": "08-03-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "060301",
            "filename": "060301_1.xml",
            "title": "Air Suspension Adjustment Specifications for Air Spring Height Dimensions and Axle Travel Dimensions",
            "tm": [],
            "engfam": [],
            "formnum": "06-03-01",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "HENDRICKSON",
                "NEWAY"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "050303",
            "filename": "050303_1.xml",
            "title": "IROS Suspension Auxiliary Leaf Spring Rattle",
            "tm": [
                "RE 200",
                "RE 300",
                "FE 300",
                "3000CE",
                "3200",
                "3300",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "05-03-03",
            "startdate": "",
            "enddate": "04/05/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "050302",
            "filename": "050302_1.xml",
            "title": "Chassis Lean Correction",
            "tm": [],
            "engfam": [],
            "formnum": "05-03-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "050301",
            "filename": "050301_1.xml",
            "title": "Ride Height Control Valve used with International Ride Optimized Suspension (IROS) and Hendrickson Air Suspension (HAS), without Code 14899, may not Re-Inflate the Air Springs Due to Blockage in the Dump Port",
            "tm": [
                "FE 300",
                "RE 200",
                "RE 300",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "05-03-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "040303",
            "filename": "040303_1.xml",
            "title": "Air Suspension Dump Operation With Dual Solenoid Control Valves",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "04-03-03",
            "startdate": "09/05/2003",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "0595273"
            ]
        },
        {
            "grp": "s03",
            "root": "040302",
            "filename": "040302_1.xml",
            "title": "IROS Suspension Sticking in Low Profile 4200, 4300, 4400 Models Built before February 23, 2004",
            "tm": [
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "04-03-02",
            "startdate": "",
            "enddate": "02/23/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14TBL",
                "14TBM",
                "14TBN"
            ]
        },
        {
            "grp": "s03",
            "root": "020301",
            "filename": "020301_1.xml",
            "title": "Inspection Criteria for Hendrickson HN 402/462 Series Bolster Springs",
            "tm": [],
            "engfam": [],
            "formnum": "02-03-01",
            "startdate": "",
            "enddate": "",
            "vendor": "HENDRICKSON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "010307",
            "filename": "010307_1.xml",
            "title": "Dealer Pre-Delivery/Quality Inspection (P&D) Process for Models Equipped with International Air Suspension Codes 14673, 14693, 14694",
            "tm": [],
            "engfam": [],
            "formnum": "01-03-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14673",
                "14693",
                "14694"
            ]
        },
        {
            "grp": "s03",
            "root": "010306",
            "filename": "010306_1.xml",
            "title": "Improved Barksdale Air Suspension Height Control Valve with Integral Dump Feature is Standard on 9000i Models Built After September 1, 2000 and is Available for Retrofit in 9000i and 9000 Models Built Before September 1, 2000 with a 9 1/2 Inch Ride Height (12 1/2 Inch Air Bag Height)",
            "tm": [
                "9000I",
                "9000"
            ],
            "engfam": [],
            "formnum": "01-03-06",
            "startdate": "",
            "enddate": "09/01/2000",
            "vendor": "BARKSDALE",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "010305",
            "filename": "010305_1.xml",
            "title": "Misapplication Of Steer Axle Shock Absorbers In 3000 FE and 3000 RE Bus Models",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "01-03-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "010304",
            "filename": "010304_1.xml",
            "title": "Revised Air Spring Mounting Stud and Torque Requirement for all Models With 12.5 Inch Air Spring Height Built After April 3, 2000",
            "tm": [],
            "engfam": [],
            "formnum": "01-03-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "010303",
            "filename": "010303_1.xml",
            "title": "Incorrect Mounting of Shock Mounting Brackets will Result In Failure of Rear Upper Shock Absorber Mounting Bolts In 4x2 4700 LP Models Built Before January 1, 2000 with International Air Suspension Codes 14TAD, 14TAG, 14TAJ, 14TAK, and 14TBE",
            "tm": [
                "4700"
            ],
            "engfam": [],
            "formnum": "01-03-03",
            "startdate": "",
            "enddate": "01/01/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14TAD",
                "14TAG",
                "14TAJ",
                "14TAK",
                "14TBE"
            ]
        },
        {
            "grp": "s03",
            "root": "010302",
            "filename": "010302_1.xml",
            "title": "Determining Service Life of Cracked Composite Steer Axle Springs on International 9000 4x2, 6x2, and 6x4 Models for D.O.T. or for Diamond Spec Warranty Coverage",
            "tm": [
                "9000"
            ],
            "engfam": [],
            "formnum": "01-03-02",
            "startdate": "01/01/1997",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "010301",
            "filename": "010301_1.xml",
            "title": "Ride Quality Improvement for 3400, 4700 and 4700LP/LPX Models with 8000 Lb. Parabolic Spring Front Suspension, Codes 003AAN, 003ADA and 003AEM and Rear Air Suspensions",
            "tm": [
                "3400",
                "4700"
            ],
            "engfam": [],
            "formnum": "01-03-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "03AAN",
                "03ADA",
                "03AEM"
            ]
        },
        {
            "grp": "s03",
            "root": "000301",
            "filename": "000301_1.xml",
            "title": "Effective November 3, 2000, Hendrickson will be in Production with an Improved Auxiliary Spring Assembly for the HN 402/462/522 Suspension",
            "tm": [],
            "engfam": [],
            "formnum": "00-03-01",
            "startdate": "",
            "enddate": "",
            "vendor": "HENDRICKSON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "990302",
            "filename": "990302_1.xml",
            "title": "Hendrickson RT2/RTE2-400/460/480 and RT2-520 Walking Beam Suspension Replacement",
            "tm": [],
            "engfam": [],
            "formnum": "99-03-02",
            "startdate": "",
            "enddate": "",
            "vendor": "HENDRICKSON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "990301",
            "filename": "990301_1.xml",
            "title": "Rubber Spring Eye Bushing Bolt Tightening Specification for 91/92/9400 4x2 and 6x4 Models with 12K or 14K lb. Capacity Front Suspension and a Build Date Starting March 1, 1999",
            "tm": [
                "9000",
                "9100",
                "9200",
                "9400"
            ],
            "engfam": [],
            "formnum": "99-03-01",
            "startdate": "03/01/1999",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "980304",
            "filename": "980304_1.xml",
            "title": "Air Suspension Mounting Holes Removed From Frame Rails",
            "tm": [
                "9000",
                "9100",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "98-03-04",
            "startdate": "12/01/1998",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "980303",
            "filename": "980303_1.xml",
            "title": "2-Stage Steer Axle Springs with Shock Absorbers",
            "tm": [
                "5000"
            ],
            "engfam": [],
            "formnum": "98-03-03",
            "startdate": "02/01/1994",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "980302",
            "filename": "980302_1.xml",
            "title": "Steer Axle Suspension With Threaded Pin/Bushing Wear Limits",
            "tm": [
                "5000",
                "8100",
                "8200",
                "8300",
                "9000"
            ],
            "engfam": [],
            "formnum": "98-03-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "980301",
            "filename": "980301_1.xml",
            "title": "Rear Air Suspension Codes 03SAS, 03SAT, 03SAU, 03SAW with Upper Bracket Location Error",
            "tm": [
                "4700"
            ],
            "engfam": [],
            "formnum": "98-03-01",
            "startdate": "01/01/1996",
            "enddate": "03/05/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "03SAS",
                "03SAT",
                "03SAU",
                "03SAW"
            ]
        },
        {
            "grp": "s03",
            "root": "970305",
            "filename": "970305_1.xml",
            "title": "Vari-Rate Spring Suspension Seats and U-Bolt Plates Used With Spicer Axles",
            "tm": [
                "4000",
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "97-03-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "970304",
            "filename": "970304_1.xml",
            "title": "2-Leaf Parabolic (Taper Leaf) Steer Axle Springs",
            "tm": [
                "8100",
                "8200",
                "8300",
                "9000",
                "9300",
                "9600",
                "9800"
            ],
            "engfam": [],
            "formnum": "97-03-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "970303",
            "filename": "970303_1.xml",
            "title": "Hendrickson HN Suspension Rebound Control Adjustment",
            "tm": [
                "2000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000"
            ],
            "engfam": [],
            "formnum": "97-03-03",
            "startdate": "",
            "enddate": "",
            "vendor": "HENDRICKSON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "970302",
            "filename": "970302_1.xml",
            "title": "Hendrickson HAS Air, Rear Suspension Codes 03SAT, 14ULB, 14ULC, 14ULE Vibration Complaints",
            "tm": [
                "2000",
                "3000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000"
            ],
            "engfam": [],
            "formnum": "97-03-02",
            "startdate": "",
            "enddate": "",
            "vendor": "HENDRICKSON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "03SAT",
                "14ULB",
                "14ULC",
                "14ULE"
            ]
        },
        {
            "grp": "s03",
            "root": "970301RB",
            "filename": "970301rb_1.xml",
            "title": "Steer Axle and Vari-Rate Spring Bushings and Pins - Wear Limits",
            "tm": [
                "4000",
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "97-03-01RB",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "950301",
            "filename": "950301_1.xml",
            "title": "Rear Suspension Retrofit",
            "tm": [
                "4000",
                "7000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "95-03-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "940303",
            "filename": "940303_1.xml",
            "title": "Heavy Duty Front Axle Shock Absorbers",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "94-03-03",
            "startdate": "02/15/1991",
            "enddate": "09/13/1994",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "930304",
            "filename": "930304_1.xml",
            "title": "International Four Spring Tandem Suspension Equalizer Bracket Adapter/Bushing Fit on Codes 14UNA, 14UNC, 14670, and 14671 Suspensions",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300",
                "9000"
            ],
            "engfam": [],
            "formnum": "93-03-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14UNA",
                "14UNC",
                "14670",
                "14671"
            ]
        },
        {
            "grp": "s03",
            "root": "930302",
            "filename": "930302_1.xml",
            "title": "Proper Installation of Midland Air Suspension Height Control Valve(s) (Navistar Part Number 2001006C92)",
            "tm": [],
            "engfam": [],
            "formnum": "93-03-02",
            "startdate": "",
            "enddate": "",
            "vendor": "MIDLAND",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "930301",
            "filename": "930301_1.xml",
            "title": "Convert International 17,500 Pound 4x2 Rear Air Suspension (Codes 03SAD, 03SAM, and 03SAK) to International 12,000 Pound 4x2 Rear Air Suspension (Codes 03SAS and 03SAT)",
            "tm": [
                "4000"
            ],
            "engfam": [],
            "formnum": "93-03-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "03SAD",
                "03SAM",
                "03SAK",
                "03SAS",
                "03SAT"
            ]
        },
        {
            "grp": "s03",
            "root": "920303",
            "filename": "920303_1.xml",
            "title": "Wear Limits For Rear Suspension Torque Leaf Bushings",
            "tm": [],
            "engfam": [],
            "formnum": "92-03-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s03",
            "root": "920302",
            "filename": "920302_1.xml",
            "title": "Hendrickson Air Suspension U-Bolt Torque",
            "tm": [
                "8100",
                "8200",
                "8300",
                "9000",
                "9300",
                "9400",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "92-03-02",
            "startdate": "",
            "enddate": "",
            "vendor": "HENDRICKSON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "080401",
            "filename": "080401_1.xml",
            "title": "Full Power Brakes SAHR System Troubleshooting",
            "tm": [],
            "engfam": [],
            "formnum": "08-04-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "070402",
            "filename": "070402_1.xml",
            "title": "Replacement Hydraulic Brake Rotors",
            "tm": [
                "1000",
                "3200",
                "4100",
                "4300",
                "4400",
                "CE BUS",
                "FE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "07-04-02",
            "startdate": "03/01/1998",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04082",
                "04083",
                "04085"
            ]
        },
        {
            "grp": "s04",
            "root": "060403",
            "filename": "060403_1.xml",
            "title": "Quality Connect Air Fitting Service Information",
            "tm": [],
            "engfam": [],
            "formnum": "06-04-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "060402",
            "filename": "060402_1.xml",
            "title": "Bendix Wheel Speed Sensor Fault Diagnostic Checklist",
            "tm": [
                "BE 200",
                "CE 200",
                "CE 300",
                "FE 300",
                "RE 200",
                "RE 300",
                "3200",
                "3300",
                "4100",
                "4200",
                "4300",
                "4400",
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "9000"
            ],
            "engfam": [],
            "formnum": "06-04-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "060401",
            "filename": "060401_1.xml",
            "title": "Revised Full Power Brake System Bleeding Pressure for International 3300, BE 200, CE 200, CE 300 Bus Models with Traction Control Code 04JNG",
            "tm": [
                "3300",
                "BE 200",
                "CE 200",
                "CE 300"
            ],
            "engfam": [],
            "formnum": "06-04-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04JNG"
            ]
        },
        {
            "grp": "s04",
            "root": "050403",
            "filename": "050403_1.xml",
            "title": "Converting 4000 4 X 2 HPV Models with Hydraulic ABS Brakes to 4 X 4 Configuration may Increase Stopping Distance and is Not Approved by International Truck and Engine Corporation and Meritor Wabco",
            "tm": [
                "4100",
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "05-04-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "050402R",
            "filename": "050402r_1.xml",
            "title": "Replacement Brake Lining for Diamond Life Hydraulic Brakes",
            "tm": [
                "1000",
                "FE 300",
                "RE 200",
                "RE 300",
                "3200",
                "3300",
                "CE BUS",
                "4200",
                "4300",
                "4400",
                "4700",
                "4900"
            ],
            "engfam": [],
            "formnum": "05-04-02R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04JNA",
                "04JNB",
                "04NNC",
                "04NNB"
            ]
        },
        {
            "grp": "s04",
            "root": "050401",
            "filename": "050401_1.xml",
            "title": "Torque Specification to Mount the Spring Applied, Air Released (SAAR) and Spring Applied, Hydraulic Released (SAHR) Brake Canisters to the Frame Rail has been Revised",
            "tm": [
                "CE 200",
                "CE 300",
                "CE S BUS",
                "3200",
                "3300",
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "05-04-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "040401",
            "filename": "040401_1.xml",
            "title": "Discussion of the Interaction Between the Hydraulic Brake Booster and the Power Steering System in International Vehicles",
            "tm": [
                "1000",
                "1652",
                "3000FE",
                "3000RE",
                "3200",
                "3800",
                "4200",
                "4300",
                "4400",
                "4700",
                "4900"
            ],
            "engfam": [],
            "formnum": "04-04-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "030402",
            "filename": "030402_1.xml",
            "title": "Removal and Replacement of Air Tank Fittings",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "03-04-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04091",
                "04092"
            ]
        },
        {
            "grp": "s04",
            "root": "030401",
            "filename": "030401_1.xml",
            "title": "New Hydraulic Disc Brake Slide Pins, Bolts, and Lubricant",
            "tm": [
                "1000",
                "3000FE",
                "3400",
                "3800",
                "4200",
                "4300",
                "4400",
                "4700",
                "4900"
            ],
            "engfam": [],
            "formnum": "03-04-01",
            "startdate": "01/01/1998",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "020401R",
            "filename": "020401r_1.xml",
            "title": "Corrosion Resistant Hydraulic Brake Rotors Available Thru Service Parts",
            "tm": [],
            "engfam": [],
            "formnum": "02-04-01R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "010402",
            "filename": "010402_1.xml",
            "title": "Bendix Tu-Flo 550 and 750 Compressor Excessive Oil Passing",
            "tm": [],
            "engfam": [],
            "formnum": "01-04-02",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "010401",
            "filename": "010401_1.xml",
            "title": "Unbalanced Brake Drums Result in Ride and Vibration Issues",
            "tm": [],
            "engfam": [],
            "formnum": "01-04-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "980402R",
            "filename": "980402r_1.xml",
            "title": "Elimination of Key and Keyway in Air Compressor Drive Gear for Bendix Tu-Flo 550 and 750 Air Compressors",
            "tm": [],
            "engfam": [],
            "formnum": "98-04-02R",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "980401R",
            "filename": "980401r_1.xml",
            "title": "Next Generation ECU for Anti-Lock Brake Systems (ABS)",
            "tm": [],
            "engfam": [],
            "formnum": "98-04-01R",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "BENDIX",
                "WABCO"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "970402",
            "filename": "970402_1.xml",
            "title": "Bendix Hydro-Max Brake Booster Leakage Repair",
            "tm": [],
            "engfam": [],
            "formnum": "97-04-02",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "970401",
            "filename": "970401_1.xml",
            "title": "Extended Protection Against Corrosion",
            "tm": [],
            "engfam": [],
            "formnum": "97-04-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "960403",
            "filename": "960403_1.xml",
            "title": "Long-Stroke Brake Chambers",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "96-04-03",
            "startdate": "10/02/1996",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "960402",
            "filename": "960402_1.xml",
            "title": "Aeroquip STC Hydraulic Push to Connect Fitting",
            "tm": [],
            "engfam": [],
            "formnum": "96-04-02",
            "startdate": "",
            "enddate": "",
            "vendor": "AEROQUIP",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "960401",
            "filename": "960401_1.xml",
            "title": "Replacing a Bendix M-21 Antilock Modulator Assembly With An M-22 Antilock Modulator Assembly",
            "tm": [],
            "engfam": [],
            "formnum": "96-04-01",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "950402",
            "filename": "950402_1.xml",
            "title": "Automatic Traction Control Tire Size Compatibility",
            "tm": [],
            "engfam": [],
            "formnum": "95-04-02",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "950401",
            "filename": "950401_1.xml",
            "title": "Bendix MV3 Valve Exhaust Port Line Diameter and Connection Change",
            "tm": [
                "5000",
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "95-04-01",
            "startdate": "06/01/1994",
            "enddate": "08/11/1994",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "940402",
            "filename": "940402_1.xml",
            "title": "Master Cylinder Silicone Assembly Fluid",
            "tm": [],
            "engfam": [],
            "formnum": "94-04-02",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "940401",
            "filename": "940401_1.xml",
            "title": "Adjustment Procedures for Air Operated Parking Brake (Code 04GAC)",
            "tm": [
                "4000"
            ],
            "engfam": [],
            "formnum": "94-04-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04GAC"
            ]
        },
        {
            "grp": "s04",
            "root": "930406",
            "filename": "930406_1.xml",
            "title": "New Brake Pads For 2.60, 2.88 and 3.38 Inch Hydraulic Brakes",
            "tm": [
                "1000",
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "93-04-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04144",
                "04145",
                "04146",
                "04237",
                "04238"
            ]
        },
        {
            "grp": "s04",
            "root": "930405",
            "filename": "930405_1.xml",
            "title": "Proper Burnish of Brake Friction Material",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "93-04-05",
            "startdate": "",
            "enddate": "12/01/1992",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "930404",
            "filename": "930404_1.xml",
            "title": "Hydraulic Disc Brake Caliper Piston Condition",
            "tm": [],
            "engfam": [],
            "formnum": "93-04-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "930402",
            "filename": "930402_1.xml",
            "title": "Information Concerning Fluoroelastomers (FKM) - VITON, FLUOREL, AFLAS",
            "tm": [],
            "engfam": [],
            "formnum": "93-04-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "920403",
            "filename": "920403_1.xml",
            "title": "Brake Fluid Contamination",
            "tm": [],
            "engfam": [],
            "formnum": "92-04-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "920402",
            "filename": "920402_1.xml",
            "title": "Location of Seals in Pressure Differential Valve",
            "tm": [],
            "engfam": [],
            "formnum": "92-04-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "920401",
            "filename": "920401_1.xml",
            "title": "Caliper Support Shims for Hydraulic Disc Brake Codes 04114, 04145, 04146, 04237 and 04238",
            "tm": [
                "1000",
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "92-04-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04114",
                "04145",
                "04146",
                "04237",
                "04238"
            ]
        },
        {
            "grp": "s04",
            "root": "910403",
            "filename": "910403_1.xml",
            "title": "Brake Air Pressure Distribution Valve (Automatic Front Wheel Limiting Valve) (Code 04567)",
            "tm": [],
            "engfam": [],
            "formnum": "91-04-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "04567"
            ]
        },
        {
            "grp": "s04",
            "root": "910402",
            "filename": "910402_1.xml",
            "title": "False Hydraulic Brake Warning Indication",
            "tm": [],
            "engfam": [],
            "formnum": "91-04-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s04",
            "root": "910401",
            "filename": "910401_1.xml",
            "title": "Tractor Protection Valve Systems Operation",
            "tm": [],
            "engfam": [],
            "formnum": "91-04-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "080501",
            "filename": "080501_1.xml",
            "title": "ProStar Power Steering Cooler Hoses",
            "tm": [
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "08-05-01",
            "startdate": "",
            "enddate": "06/02/2008",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "070501",
            "filename": "070501_1.xml",
            "title": "Intermediate Steering Shaft Lubrication",
            "tm": [
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "07-05-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "050501",
            "filename": "050501_1.xml",
            "title": "Correct Method to Determine Power Steering Reservoir Oil Fill Level for International Models with 2002 Emission Engines and Bus Models built after 3/12/04",
            "tm": [
                "FE 300",
                "RE 200",
                "RE 300",
                "3200",
                "3300",
                "CE BUS",
                "4200",
                "4300",
                "4400",
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600",
                "9000"
            ],
            "engfam": [],
            "formnum": "05-05-01",
            "startdate": "11/01/2001",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "040501",
            "filename": "040501_1.xml",
            "title": "Adjustment Procedure for Tilt Only Steering Column",
            "tm": [
                "CE200",
                "CE300",
                "3200",
                "3300",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "04-05-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "05708"
            ]
        },
        {
            "grp": "s05",
            "root": "030503",
            "filename": "030503_1.xml",
            "title": "Douglas Autotech Steering Column Rattle or Buzzing Noise at Idle",
            "tm": [
                "9000",
                "9200I"
            ],
            "engfam": [],
            "formnum": "03-05-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "030502R",
            "filename": "030502r_1.xml",
            "title": "Douglas Autotech Tilt Steering Column Lower Bearing Realignment",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "03-05-02R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "05708"
            ]
        },
        {
            "grp": "s05",
            "root": "030501",
            "filename": "030501_1.xml",
            "title": "Lubrication to the Intermediate Steering Column Upper U-Joint",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "03-05-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "020502",
            "filename": "020502_1.xml",
            "title": "Steering Column Kits for 42/43/4400, 73/74/75/7600, 85/8600 Models",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "02-05-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "020501",
            "filename": "020501_1.xml",
            "title": "Power Steering Diagnostics",
            "tm": [],
            "engfam": [],
            "formnum": "02-05-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "960501",
            "filename": "960501_1.xml",
            "title": "Luk Model LF93, LF73 and VT73 Power Steering Pumps",
            "tm": [
                "2000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "96-05-01",
            "startdate": "",
            "enddate": "",
            "vendor": "LUK",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "940501",
            "filename": "940501_1.xml",
            "title": "Relocate Power Steering Fluid Reservoir",
            "tm": [
                "2000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "94-05-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "930501",
            "filename": "930501_1.xml",
            "title": "Correct Rattle in Douglas Single Lever Model 929 Steering Column",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "93-05-01",
            "startdate": "",
            "enddate": "",
            "vendor": "DOUGLAS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "920503",
            "filename": "920503_1.xml",
            "title": "Steering Input Effort on Sheppard \"M\" Series Power Steering Gears",
            "tm": [],
            "engfam": [],
            "formnum": "92-05-03",
            "startdate": "",
            "enddate": "",
            "vendor": "SHEPPARD",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "920502",
            "filename": "920502_1.xml",
            "title": "On-Vehicle Poppet Readjustment for TRW TAS Power Steering Gears",
            "tm": [],
            "engfam": [],
            "formnum": "92-05-02",
            "startdate": "",
            "enddate": "",
            "vendor": "TRW",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "920501",
            "filename": "920501_1.xml",
            "title": "Repair For Turn Signal Canceling Function",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "92-05-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "05708"
            ]
        },
        {
            "grp": "s05",
            "root": "910504",
            "filename": "910504_1.xml",
            "title": "Lubrication of TAS Steering Gears",
            "tm": [],
            "engfam": [],
            "formnum": "91-05-04",
            "startdate": "",
            "enddate": "",
            "vendor": "TRW",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "910503",
            "filename": "910503_1.xml",
            "title": "On Vehicle TAS Power Steering Gear Input Shaft Seal Replacement",
            "tm": [],
            "engfam": [],
            "formnum": "91-05-03",
            "startdate": "",
            "enddate": "",
            "vendor": "TRW",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "910502",
            "filename": "910502_1.xml",
            "title": "No TSI was released using this number",
            "tm": [],
            "engfam": [],
            "formnum": "91-05-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s05",
            "root": "910501R",
            "filename": "910501r_1.xml",
            "title": "New Rebuild Seal Kits For Sheppard M Series Power Steering Gears",
            "tm": [],
            "engfam": [],
            "formnum": "91-05-01R",
            "startdate": "",
            "enddate": "",
            "vendor": "SHEPPARD",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s06",
            "root": "020601",
            "filename": "020601_1.xml",
            "title": "New Service Kit for 1810 Series Driveshaft U-Joint Bearing Cup Retention for 2000, 5000, 5000i, 8000, 9000, and 9000i Models",
            "tm": [
                "2000",
                "5000",
                "5000I",
                "8100",
                "8200",
                "8300",
                "9000",
                "9000I"
            ],
            "engfam": [],
            "formnum": "02-06-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s06",
            "root": "010603",
            "filename": "010603_1.xml",
            "title": "Offset phasing of interaxle propeller shafts on Dana Spicer (formerly Eaton) axles",
            "tm": [],
            "engfam": [],
            "formnum": "01-06-03",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "SPICER",
                "EATON"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14GEP",
                "14GER",
                "14GES",
                "14GEZ",
                "14GGH",
                "14GGJ",
                "14GGY",
                "14GHD",
                "14GJC",
                "14GGG"
            ]
        },
        {
            "grp": "s06",
            "root": "010602R",
            "filename": "010602r_1.xml",
            "title": "New Service Kit for 1810 Series Driveshaft U-Joint Bearing Cup Retention for 2000, 5000, 5000i, 8000, 9000, and 9000i Models",
            "tm": [
                "2000",
                "5000",
                "5000I",
                "8100",
                "8200",
                "8300",
                "9000",
                "9000I"
            ],
            "engfam": [],
            "formnum": "01-06-02R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s06",
            "root": "010601",
            "filename": "010601_1.xml",
            "title": "Spicer Life Series Slip Member Check",
            "tm": [],
            "engfam": [],
            "formnum": "01-06-01",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s06",
            "root": "960601",
            "filename": "960601_1.xml",
            "title": "Spicer Life Series SPL-170 and SPL-250 Propeller Shafts",
            "tm": [
                "2000",
                "8100",
                "8200",
                "8300",
                "9000"
            ],
            "engfam": [],
            "formnum": "96-06-01",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s06",
            "root": "930603",
            "filename": "930603_1.xml",
            "title": "4. General Rear Axle Seat and U-Bolt Plate Availability, including Eaton DS-404 and Rockwell RT-40-145 Tandem Rear Axles",
            "tm": [],
            "engfam": [],
            "formnum": "93-06-03",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14GDA",
                "14GDC",
                "14472",
                "14474",
                "14475",
                "14476"
            ]
        },
        {
            "grp": "s06",
            "root": "930601",
            "filename": "930601_1.xml",
            "title": "New Design Universal Joint Lubrication Valve",
            "tm": [],
            "engfam": [],
            "formnum": "93-06-01",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s06",
            "root": "920601",
            "filename": "920601_1.xml",
            "title": "General Rear Axle Seat And U-Bolt Plate Availability",
            "tm": [],
            "engfam": [],
            "formnum": "92-06-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14GDA",
                "14GDC",
                "14472",
                "14474",
                "14475",
                "14476"
            ]
        },
        {
            "grp": "s07",
            "root": "070702",
            "filename": "070702_1.xml",
            "title": "Exhaust Aftertreatment Water Separation",
            "tm": [
                "4100",
                "4300",
                "4400",
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9900I",
                "CF 500",
                "CF 600",
                "CXT",
                "MXT",
                "RXT",
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "07-07-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s07",
            "root": "070701",
            "filename": "070701_1.xml",
            "title": "DPF (Diesel Particulate Filter) Regeneration Switches and Regeneration Warning Lights",
            "tm": [],
            "engfam": [],
            "formnum": "07-07-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s07",
            "root": "060703",
            "filename": "060703_1.xml",
            "title": "Improved Exhaust Pipe with Welded Double Band Clamps used on 5000i, 7000 HPV, 8000 HPV, and 9000i International Models Built Starting May 1, 2006",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "06-07-03",
            "startdate": "05/01/2006",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s07",
            "root": "060702",
            "filename": "060702_1.xml",
            "title": "New Design Exhaust Elbow To Eliminate Cab Lower Flange Interference",
            "tm": [
                "9000",
                "9400I"
            ],
            "engfam": [],
            "formnum": "06-07-02",
            "startdate": "",
            "enddate": "01/23/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16AUL",
                "16AUE"
            ]
        },
        {
            "grp": "s07",
            "root": "060701",
            "filename": "060701_1.xml",
            "title": "Excessive Start-Up Exhaust Moisture and Soot from 9000i Models with Horizontal Muffler and Vertical Exhaust Pipe Codes 07DBA and 07DBC",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "06-07-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "07DBA",
                "07DBC"
            ]
        },
        {
            "grp": "s07",
            "root": "050701",
            "filename": "050701_1.xml",
            "title": "Soot Residue on Back of Cab Paint from Vertical Mount Service Ceramic Catalytic Converter Muffler Installed Starting July 1, 2004 on 5000i, 7000, 8000, 9000i Models Built After January 1, 2004",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7600",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "05-07-01",
            "startdate": "01/01/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                " 07AMR",
                " 07AMS",
                " 07AMV",
                " 07AMW",
                " 07AMX",
                " 07AMY",
                " 07AXA",
                " 07BBP",
                " 07DWN",
                " 07DWP"
            ]
        },
        {
            "grp": "s07",
            "root": "040702",
            "filename": "040702_1.xml",
            "title": "Accuseal Double Band Clamp Installation",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-07-02",
            "startdate": "03/01/2002",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s07",
            "root": "040701",
            "filename": "040701_1.xml",
            "title": "New Design Turbocharger Flanged Exhaust Pipe on 8600 Models, Build Date Starting August 9, 2004, with Cummins ISM Engine",
            "tm": [
                "8600"
            ],
            "engfam": [],
            "formnum": "04-07-01",
            "startdate": "08/09/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s07",
            "root": "950701",
            "filename": "950701_1.xml",
            "title": "Exhaust Pipe and Clamp",
            "tm": [
                "3600",
                "3800"
            ],
            "engfam": [],
            "formnum": "95-07-01",
            "startdate": "",
            "enddate": "05/01/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s07",
            "root": "920701",
            "filename": "920701_1.xml",
            "title": "Installation of a New Tail Pipe to Muffler Clamp",
            "tm": [
                "9000"
            ],
            "engfam": [],
            "formnum": "92-07-01",
            "startdate": "07/01/1992",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "080801",
            "filename": "080801_1.xml",
            "title": "High Voltage and Hybrid Pre-Service Checklist",
            "tm": [],
            "engfam": [],
            "formnum": "08-08-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "070806",
            "filename": "070806_1.xml",
            "title": "PTO Hour Display",
            "tm": [
                "4100",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "07-08-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16WLM",
                "60ABA",
                "60ABB",
                "60ABE",
                "60ABK",
                "60ABL"
            ]
        },
        {
            "grp": "s08",
            "root": "070804",
            "filename": "070804_1.xml",
            "title": "Headlight Moisture Dissipation",
            "tm": [
                "4100",
                "4200",
                "4300",
                "4400",
                "8500",
                "8600",
                "BE 200",
                "CE 200",
                "CE 300",
                "HC BUS",
                "LC BUS",
                "RXT"
            ],
            "engfam": [],
            "formnum": "07-08-04",
            "startdate": "",
            "enddate": "05/03/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "070803",
            "filename": "070803_1.xml",
            "title": "Remote Keyless Entry (RKE) Transmitter Learning",
            "tm": [
                "4100",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "07-08-03R",
            "startdate": "01/01/2001",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16VCN",
                "16VCP",
                "16WKZ"
            ]
        },
        {
            "grp": "s08",
            "root": "070801",
            "filename": "070801_1.xml",
            "title": "New Instrument Panel Cluster Indicators for 2008 Model Year",
            "tm": [
                "3200",
                "4100",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "BE 200",
                "CE BUS",
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "07-08-01RA",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "060807",
            "filename": "060807_1.xml",
            "title": "Replacement of Grafo Dielectric Grease",
            "tm": [],
            "engfam": [],
            "formnum": "06-08-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "060806",
            "filename": "060806_1.xml",
            "title": "Required PTO Wiring for CF 500 and CF 600 Models with Automatic Transmission Code 13ADL",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "06-08-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13ADL"
            ]
        },
        {
            "grp": "s08",
            "root": "060805",
            "filename": "060805_1.xml",
            "title": "High Voltage Circuits (Greater than 50 Volts) on International Trucks and Buses",
            "tm": [],
            "engfam": [],
            "formnum": "06-08-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "060804",
            "filename": "060804_1.xml",
            "title": "Low Current Circuit Oxidation in International 1000, 3000, 4000 HPV, 5000i, 7000 HPV, 8000 HPV, 9000i Models",
            "tm": [
                "1000",
                "3000",
                "4100",
                "4200",
                "4300",
                "4400",
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I"
            ],
            "engfam": [],
            "formnum": "06-08-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "060803",
            "filename": "060803_1.xml",
            "title": "Intermittent Engine/Transmission Fault Codes",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "06-08-03",
            "startdate": "",
            "enddate": "01/27/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "060802",
            "filename": "060802_1.xml",
            "title": "Dual Fuel Tank Transfer Pump System Troubleshooting with Diamond Logic Builder (DLB)",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "06-08-02",
            "startdate": "08/19/2002",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "060801",
            "filename": "060801_1.xml",
            "title": "New Design Steering Wheel Switches for CE Bus Models",
            "tm": [
                "CE 200",
                "CE 300"
            ],
            "engfam": [],
            "formnum": "06-08-01",
            "startdate": "03/01/2004",
            "enddate": "10/24/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "050810",
            "filename": "050810_1.xml",
            "title": "Cinch 1.5 mm Sealed Header Connector Assembly Instructions",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "05-08-10",
            "startdate": "11/01/2000",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "050809",
            "filename": "050809_1.xml",
            "title": "Headlight Aiming Procedure for CF Model Trucks",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "05-08-09",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "050808",
            "filename": "050808_1.xml",
            "title": "Power Distribution Center (PDC) Water or Debris Intrusion on 4000 and 7000 HPV Models",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700"
            ],
            "engfam": [],
            "formnum": "05-08-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "050807R",
            "filename": "050807r_1.xml",
            "title": "7600, 7700, 8600, 5000i, and 9000i Models, Built Before April 5, 2005, with Cummins ISM and ISX Engines and Extended Life Coolant, may get a False Low Coolant Level Warning which will De-Rate the Engine",
            "tm": [
                "7600",
                "7700",
                "8600",
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "05-08-07R ",
            "startdate": "",
            "enddate": "04/05/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "050806RA",
            "filename": "050806ra_1.xml",
            "title": "Full Power Brake Electrical Connector Service",
            "tm": [
                "BE 200",
                "CE 200",
                "CE 300"
            ],
            "engfam": [],
            "formnum": "05-08-06RA",
            "startdate": "03/01/2004",
            "enddate": "05/01/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "050805",
            "filename": "050805_1.xml",
            "title": "Remote Keyless Entry",
            "tm": [
                "9000",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "05-08-05R",
            "startdate": "05/17/2005",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16WJY"
            ]
        },
        {
            "grp": "s08",
            "root": "050804",
            "filename": "050804_1.xml",
            "title": "9000 Series Trailer Turn Signal Relays",
            "tm": [
                "9000",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "05-08-04",
            "startdate": "01/28/2005",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "050802",
            "filename": "050802_1.xml",
            "title": "Certain CE 200 and CE 300 Bus Models Built Between March 1, 2004 and September 9, 2004 may Experience Random Air Operated Door Opening or Closing while the Bus is Stationary and the Key in the Ignition is Cycled Either On or Off",
            "tm": [
                "CE 200",
                "CE 300"
            ],
            "engfam": [],
            "formnum": "05-08-02",
            "startdate": "03/01/2004",
            "enddate": "09/09/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "050801",
            "filename": "050801_1.xml",
            "title": "Engine and Transmission ECU Clean Power Connector Checks To Correct Intermittent Operation",
            "tm": [
                "4200",
                "3200",
                "CE BUS"
            ],
            "engfam": [
                "VT 365"
            ],
            "formnum": "05-08-01",
            "startdate": "08/01/2001",
            "enddate": "11/08/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "040807",
            "filename": "040807_1.xml",
            "title": "Instrument Cluster Individual Circuit Board Replacement",
            "tm": [
                "2000",
                "3400",
                "3600",
                "3700",
                "4000",
                "8000",
                "3800",
                "3000 FE",
                "3000 RE",
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "04-08-07",
            "startdate": "01/01/1989",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "040806",
            "filename": "040806_1.xml",
            "title": "International VT 365 Engine Starter Shims",
            "tm": [
                "1000",
                "1300 FBC",
                "1652",
                "3200",
                "4200",
                "CE BUS"
            ],
            "engfam": [],
            "formnum": "04-08-06",
            "startdate": "04/22/2004",
            "enddate": "06/01/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08WWN",
                "08WWP",
                "08WSZ",
                "13ACP",
                "13ACS",
                "13ACW",
                "13ACY",
                "13ACX",
                "13ACZ",
                "13ADA",
                "13ADB",
                "13AEB"
            ]
        },
        {
            "grp": "s08",
            "root": "040805",
            "filename": "040805_1.xml",
            "title": "New Design Fuel Sender for HPV Models",
            "tm": [
                "3200",
                "3300",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600"
            ],
            "engfam": [],
            "formnum": "04-08-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "040804",
            "filename": "040804_1.xml",
            "title": "Battery Supervisor With Latching Relay",
            "tm": [
                "9000",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-08-04",
            "startdate": "01/07/2002",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "040803R",
            "filename": "040803r_1.xml",
            "title": "Engine and Transmission ECU Clean Power Connector Checks To Correct Intermittent Operation",
            "tm": [
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "8500"
            ],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "04-08-03R",
            "startdate": "01/01/2001",
            "enddate": "04/05/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "040802",
            "filename": "040802_1.xml",
            "title": "Radio Repair Checklist",
            "tm": [],
            "engfam": [],
            "formnum": "04-08-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "040801",
            "filename": "040801_1.xml",
            "title": "Parking Brake Indicator Lamp \"Glow\"",
            "tm": [
                "9000",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-08-01",
            "startdate": "01/31/2003",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16WJY"
            ]
        },
        {
            "grp": "s08",
            "root": "030802",
            "filename": "030802_1.xml",
            "title": "Remote Keyless Entry",
            "tm": [
                "9000",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "03-08-02R",
            "startdate": "02/01/2003",
            "enddate": "05/16/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16WJY"
            ]
        },
        {
            "grp": "s08",
            "root": "030801",
            "filename": "030801_1.xml",
            "title": "Remote Keyless Entry",
            "tm": [
                "9000",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "03-08-01",
            "startdate": "08/02/1999",
            "enddate": "02/17/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16WJY"
            ]
        },
        {
            "grp": "s08",
            "root": "020803",
            "filename": "020803_1.xml",
            "title": "Replacement Turn Signal Switches",
            "tm": [
                "1000",
                "1452",
                "1652",
                "2000",
                "2554",
                "2574",
                "2654",
                "2674",
                "3400",
                "3600",
                "3700",
                "3800",
                "4600",
                "4700",
                "4800",
                "4900",
                "7100",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "02-08-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "010811",
            "filename": "010811_1.xml",
            "title": "Electronic Module Removal Tools",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "01-08-11",
            "startdate": "01/01/2001",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "010810",
            "filename": "010810_1.xml",
            "title": "Rear Chassis Harness Extension",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "01-08-10",
            "startdate": "01/01/2001",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "010809",
            "filename": "010809_1.xml",
            "title": "Dash Panel Pass-Through Electrical Connector 4014/1700",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01-08-09",
            "startdate": "07/23/2001",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "010808",
            "filename": "010808_1.xml",
            "title": "Dual Drive Cab Throttle Position Harness for Converting 2000, 4000, 4300, 4400, and 7400 Models to both Left and Right Hand Drive",
            "tm": [
                "2000",
                "4000",
                "4300",
                "4400",
                "7400"
            ],
            "engfam": [],
            "formnum": "01-08-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "010807",
            "filename": "010807_1.xml",
            "title": "Reading and Clearing Vehicle On-Board DTC's (Diagnostic Trouble Codes)",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "01-08-07",
            "startdate": "01/01/2001",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "010806",
            "filename": "010806_1.xml",
            "title": "Troubleshooting Intermittent Instrument Panel Data Link Gauges and Fuel Gauge that Lock-up or Freeze in Position in 5000i and 9000i Models Built Between February 21, 2000 and April 18, 2001 with Instrument Panels that have a Date Code Less Than 1501",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "01-08-06",
            "startdate": "02/21/2000",
            "enddate": "04/18/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "010805",
            "filename": "010805_1.xml",
            "title": "Low Coolant Level Sensor",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "01-08-05",
            "startdate": "01/01/2001",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "010804",
            "filename": "010804_1.xml",
            "title": "Instrument Cluster Digital LCD Display on 4300 and 4400 Models",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01-08-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "010803",
            "filename": "010803_1.xml",
            "title": "Entertainment Radio on 4300 and 4400 Models",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01-08-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "010802",
            "filename": "010802_1.xml",
            "title": "Audible Warning Alarm",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "01-08-02",
            "startdate": "01/01/2001",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "010801",
            "filename": "010801_1.xml",
            "title": "Erratic Exhaust Pipe Pyrometer Gauge, Code 16HGK, Needle Movement in 5000, 5000i, 9000, and 9000i Models Built Before January 01, 2000 with CB Radios",
            "tm": [
                "5000",
                "5000I",
                "9000",
                "9000I"
            ],
            "engfam": [],
            "formnum": "01-08-01",
            "startdate": "",
            "enddate": "01/01/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16HGK"
            ]
        },
        {
            "grp": "s08",
            "root": "000809R",
            "filename": "000809r_1.xml",
            "title": "Electrical Circuit Revision for the Optimized Idle System to Prevent Unnecessary Battery Drain in 9000i Models Built Before January 7, 2000 at Garland, May 9, 2000 at Chatham, and August 14, 2000 at Escobedo",
            "tm": [
                "9000I"
            ],
            "engfam": [],
            "formnum": "00-08-09R",
            "startdate": "",
            "enddate": "08/14/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "000808",
            "filename": "000808_1.xml",
            "title": "Dimmer Switch Relay for All 5000, 5000i, 9000, 9000i Models with Floor Mounted Dimmer Switch",
            "tm": [
                "5000",
                "5000I",
                "9000",
                "9000I"
            ],
            "engfam": [],
            "formnum": "00-08-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "000807",
            "filename": "000807_1.xml",
            "title": "Auto Neutral Circuit Revision for 2000 and 4000 Models Built Between November 1, 1997 and April 3, 2000 with Allison WTEC III Transmissions, International Code 813AAS",
            "tm": [
                "2000",
                "4000"
            ],
            "engfam": [],
            "formnum": "00-08-07",
            "startdate": "11/01/1997",
            "enddate": "04/03/2000",
            "vendor": "ALLISON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "813AAS"
            ]
        },
        {
            "grp": "s08",
            "root": "000806R",
            "filename": "000806r_1.xml",
            "title": "False Signal from the Hydraulic Brake Warning Light and Buzzer",
            "tm": [
                "1000",
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "00-08-06R",
            "startdate": "",
            "enddate": "11/01/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "000805",
            "filename": "000805_1.xml",
            "title": "Medium Duty Instrument Cluster Diagnostics",
            "tm": [
                "2000",
                "3000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "00-08-05",
            "startdate": "01/01/1994",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "000804",
            "filename": "000804_1.xml",
            "title": "Heavy Duty Command Center Instrument Cluster Diagnostics",
            "tm": [
                "5000",
                "5000I",
                "9000",
                "9000I"
            ],
            "engfam": [],
            "formnum": "00-08-04",
            "startdate": "01/01/1994",
            "enddate": "01/01/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "000803",
            "filename": "000803_1.xml",
            "title": "Green Color Trailer Lighting Cable Wearing on Frame Rails or Deckplates",
            "tm": [
                "2000",
                "4000",
                "5000",
                "5000I",
                "8000",
                "9000",
                "9000I"
            ],
            "engfam": [],
            "formnum": "00-08-03",
            "startdate": "03/01/1997",
            "enddate": "11/01/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "000802",
            "filename": "000802_1.xml",
            "title": "Vertical Rod Antenna for 5000i and 9000i Models Equipped with a CB/Weather Band/Entertainment (AM/FM) Radio and Antenna Splitter Box System",
            "tm": [
                "5000I",
                "9000",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "00-08-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "000801",
            "filename": "000801_1.xml",
            "title": "CB Antenna Ground Strap Kit for 5000i and 9000i Models with Aero Mirrors, Code 16WRW and 16WRV, Built Before September 8, 1999",
            "tm": [
                "5000I",
                "9000",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "00-08-01",
            "startdate": "",
            "enddate": "09/08/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16WRV",
                "16WRW"
            ]
        },
        {
            "grp": "s08",
            "root": "990802",
            "filename": "990802_1.xml",
            "title": "Door Harness Replacement for 5000 and 9000 Models Excluding 5000i and 9000i Models",
            "tm": [
                "5000",
                "9000",
                "9100",
                "9200",
                "9400",
                "9900"
            ],
            "engfam": [],
            "formnum": "99-08-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "990801",
            "filename": "990801_1.xml",
            "title": "Day Time Running Light (DRL) Module in U.S. and Canadian Vehicles with Lift-To- Dim Relay Buzz and/or Failure",
            "tm": [
                "1000",
                "1652",
                "2000",
                "3800",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "99-08-01",
            "startdate": "",
            "enddate": "05/01/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "980805",
            "filename": "980805_1.xml",
            "title": "Year 2000 Compliance with International Trucks",
            "tm": [],
            "engfam": [],
            "formnum": "98-08-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "980804",
            "filename": "980804_1.xml",
            "title": "Detroit Diesel Series 60 Engine Overlay Harness",
            "tm": [
                "9000",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "98-08-04",
            "startdate": "",
            "enddate": "01/01/1998",
            "vendor": "DETROIT DIESEL",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "980803",
            "filename": "980803_1.xml",
            "title": "Replacing Terminal Pins on the Single Engine Controller (ECM) Chassis Harness Connector",
            "tm": [],
            "engfam": [],
            "formnum": "98-08-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "980802",
            "filename": "980802_1.xml",
            "title": "Command Center with Trip Odometer Option having Symptoms of Display Flicker/Errors, Speedometer/Tachometer Pointers Frozen or Registered Miles Lower Than Actual",
            "tm": [
                "9000",
                "9100",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "98-08-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "980801",
            "filename": "980801_1.xml",
            "title": "Disconnecting Electrical System",
            "tm": [],
            "engfam": [],
            "formnum": "98-08-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "970808",
            "filename": "970808_1.xml",
            "title": "Bunk Blower Motor Feed Relocated to Ignition Side of Switch",
            "tm": [
                "9000",
                "9100",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "97-08-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "970807",
            "filename": "970807_1.xml",
            "title": "Wabco and New Allied Signal (Bendix) ABS Controllers",
            "tm": [],
            "engfam": [],
            "formnum": "97-08-07",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "BENDIX",
                "WABCO"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "970806",
            "filename": "970806_1.xml",
            "title": "Ammeter Sensor Mounting Stud Nut Tightening Torque and Method - 3000RE",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "97-08-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "970805",
            "filename": "970805_1.xml",
            "title": "False ABS Warning Lamp Illumination",
            "tm": [
                "3000",
                "4000",
                "8100",
                "8200",
                "8300",
                "9000"
            ],
            "engfam": [],
            "formnum": "97-08-05",
            "startdate": "",
            "enddate": "",
            "vendor": "BENDIX",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "970804",
            "filename": "970804_1.xml",
            "title": "Air Conditioning/Heater Blower Motor Replacement",
            "tm": [
                "5000",
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "97-08-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "970803",
            "filename": "970803_1.xml",
            "title": "21 SI and 30 SI Delco Remy Alternators",
            "tm": [],
            "engfam": [],
            "formnum": "97-08-03",
            "startdate": "",
            "enddate": "",
            "vendor": "DELCO",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "970802",
            "filename": "970802_1.xml",
            "title": "Allison AT/MT Transmissions Used with International T 444E, DT 466E and 530E Engines",
            "tm": [
                "1000",
                "3000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "97-08-02",
            "startdate": "",
            "enddate": "",
            "vendor": "ALLISON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "970801",
            "filename": "970801_1.xml",
            "title": "Sealed Connectors For Underseat Heater Box",
            "tm": [
                "9000"
            ],
            "engfam": [],
            "formnum": "97-08-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "960809",
            "filename": "960809_1.xml",
            "title": "PTO Disengagement When 4-Way Flashers Are Turned On",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "96-08-09",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "960808",
            "filename": "960808_1.xml",
            "title": "Operation and Adjustment of the New Design Stop Light/Brake Booster Switch",
            "tm": [
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "96-08-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "960807",
            "filename": "960807_1.xml",
            "title": "Addition of a Jumper Fuse Harness to Cummins Celect Plus Feed Circuit",
            "tm": [],
            "engfam": [],
            "formnum": "96-08-07",
            "startdate": "",
            "enddate": "",
            "vendor": "CUMMINS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "960806",
            "filename": "960806_1.xml",
            "title": "Engine Fan Continuously Runs",
            "tm": [],
            "engfam": [],
            "formnum": "96-08-06",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "HORTON",
                "KYSOR"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "960805",
            "filename": "960805_1.xml",
            "title": "Instructions to Add a Starter Re-engagement Delay Module",
            "tm": [],
            "engfam": [],
            "formnum": "96-08-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "960804",
            "filename": "960804_1.xml",
            "title": "Operation of the Hall Effect Stop Light and Brake Booster Pump Switch",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "96-08-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "960803",
            "filename": "960803_1.xml",
            "title": "Diagnostic Table Change",
            "tm": [],
            "engfam": [],
            "formnum": "96-08-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "960802",
            "filename": "960802_1.xml",
            "title": "Adding a Relay Harness",
            "tm": [],
            "engfam": [],
            "formnum": "96-08-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "960801",
            "filename": "960801_1.xml",
            "title": "Small Aero Roof Mounted Clearance and Marker Lamps",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "96-08-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "950801",
            "filename": "950801_1.xml",
            "title": "Intermittent Instrument Cluster Operation",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "5000",
                "8000",
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "95-08-01",
            "startdate": "",
            "enddate": "04/07/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "940809",
            "filename": "940809_1.xml",
            "title": "Heater Switch Harness",
            "tm": [
                "9000"
            ],
            "engfam": [],
            "formnum": "94-08-09",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "940808",
            "filename": "940808_1.xml",
            "title": "K7N Integrated Fan Drive Control System Kit",
            "tm": [],
            "engfam": [],
            "formnum": "94-08-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "940807",
            "filename": "940807_1.xml",
            "title": "3+1 Battery System (Code 08MCB)",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "94-08-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08MCB"
            ]
        },
        {
            "grp": "s08",
            "root": "940806",
            "filename": "940806_1.xml",
            "title": "City Horn Relocation",
            "tm": [
                "9000",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "94-08-06",
            "startdate": "",
            "enddate": "01/03/1994",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "940805",
            "filename": "940805_1.xml",
            "title": "Using The MPSI PRO-LINK 9000 Electronic Tool",
            "tm": [],
            "engfam": [],
            "formnum": "94-08-05",
            "startdate": "",
            "enddate": "",
            "vendor": "MPSI",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "940804",
            "filename": "940804_1.xml",
            "title": "Speedometer and Tachometer Ground Clip Installation",
            "tm": [
                "9000"
            ],
            "engfam": [],
            "formnum": "94-08-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "940803",
            "filename": "940803_1.xml",
            "title": "Instructions To Service or Upgrade A Suspended Pedal With An Integrated Accelerator Position Sensor/Idle Validation Switch.",
            "tm": [],
            "engfam": [],
            "formnum": "94-08-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "940802",
            "filename": "940802_1.xml",
            "title": "Data Link Driven Speedometer and Tachometer",
            "tm": [],
            "engfam": [],
            "formnum": "94-08-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "930803",
            "filename": "930803_1.xml",
            "title": "Troubleshooting Procedures for On-Off Engine Fan Control Circuits",
            "tm": [],
            "engfam": [],
            "formnum": "93-08-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "930802",
            "filename": "930802_1.xml",
            "title": "Cummins CELECT Engine Fault Code 434",
            "tm": [],
            "engfam": [],
            "formnum": "93-08-02",
            "startdate": "",
            "enddate": "",
            "vendor": "CUMMINS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "930801",
            "filename": "930801_1.xml",
            "title": "Grounding of Radiators",
            "tm": [],
            "engfam": [],
            "formnum": "93-08-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "920813",
            "filename": "920813_1.xml",
            "title": "Delco 21SI Alternator Ignition Turn-On",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "92-08-13",
            "startdate": "",
            "enddate": "",
            "vendor": "DELCO",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "920812",
            "filename": "920812_1.xml",
            "title": "Programming Information for Medium and Heavy Duty Truck Instrument Clusters",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "5000",
                "8000",
                "9000"
            ],
            "engfam": [],
            "formnum": "92-08-12",
            "startdate": "01/01/1991",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "920811",
            "filename": "920811_1.xml",
            "title": "Removing and Replacing Factory Installed Panasonic, Alpine and Technics Radios",
            "tm": [
                "2000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000"
            ],
            "engfam": [],
            "formnum": "92-08-11",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "920810",
            "filename": "920810_1.xml",
            "title": "Ammeter Installation Procedure",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "92-08-10",
            "startdate": "03/15/1992",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "920809",
            "filename": "920809_1.xml",
            "title": "Creation of False 412 Fault Code With Cummins Echek Service Tool",
            "tm": [],
            "engfam": [],
            "formnum": "92-08-09",
            "startdate": "",
            "enddate": "",
            "vendor": "CUMMINS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "920808",
            "filename": "920808_1.xml",
            "title": "Introduction of New Instrument Cluster",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "92-08-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "920806",
            "filename": "920806_1.xml",
            "title": "Delco 21SI Alternator Regulator Terminal Corrosion",
            "tm": [],
            "engfam": [],
            "formnum": "92-08-06",
            "startdate": "",
            "enddate": "",
            "vendor": "DELCO",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "920805",
            "filename": "920805_1.xml",
            "title": "Calibration Procedure for Motorola 86MM Speedometer/Odometer and Tachometer",
            "tm": [],
            "engfam": [],
            "formnum": "92-08-05",
            "startdate": "",
            "enddate": "",
            "vendor": "MOTOROLA",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "920804",
            "filename": "920804_1.xml",
            "title": "Welding on Navistar Vehicles",
            "tm": [],
            "engfam": [],
            "formnum": "92-08-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "920803",
            "filename": "920803_1.xml",
            "title": "Vehicle Jump-Starting Information",
            "tm": [],
            "engfam": [],
            "formnum": "92-08-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "920802",
            "filename": "920802_1.xml",
            "title": "International 3 + 1 Battery System",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "92-08-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "920801",
            "filename": "920801_1.xml",
            "title": "Incorrect Reading by Kysor Temperature Switches",
            "tm": [],
            "engfam": [],
            "formnum": "92-08-01",
            "startdate": "",
            "enddate": "",
            "vendor": "KYSOR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "910805",
            "filename": "910805_1.xml",
            "title": "Correction For Tripping Of Heater/Air Conditioner Breakers",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "91-08-05",
            "startdate": "",
            "enddate": "02/01/1991",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "910804",
            "filename": "910804_1.xml",
            "title": "Alternator Turn On Speeds",
            "tm": [],
            "engfam": [],
            "formnum": "91-08-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "910803",
            "filename": "910803_1.xml",
            "title": "Installation Guidelines For High Output Radio Transmitters",
            "tm": [],
            "engfam": [],
            "formnum": "91-08-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s08",
            "root": "910801",
            "filename": "910801_1.xml",
            "title": "Suppression of Electromagnetic Devices",
            "tm": [],
            "engfam": [],
            "formnum": "91-08-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "080902",
            "filename": "080902_1.xml",
            "title": "Removing the Hood Assist Tilt Cylinder on ProStar",
            "tm": [
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "08-09-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "080901",
            "filename": "080901_1.xml",
            "title": "Hood Insulation on 5500i and 5600i",
            "tm": [
                "5000",
                "5500I",
                "5600I"
            ],
            "engfam": [],
            "formnum": "08-09-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "050902",
            "filename": "050902_1.xml",
            "title": "On Certain 7000 HPV Models the Passenger Side Splash Panel may Rub the Underside of the Hood",
            "tm": [
                "7300",
                "7400",
                "7500",
                "7600",
                "7700"
            ],
            "engfam": [],
            "formnum": "05-09-02R",
            "startdate": "",
            "enddate": "08/28/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "050901R",
            "filename": "050901r_1.xml",
            "title": "Repair Instructions for 8600 Model, Built Before November 22, 2004, Fender Extensions with Cracks Along the Rear Bottom Edge",
            "tm": [
                "8600"
            ],
            "engfam": [],
            "formnum": "05-09-01R",
            "startdate": "",
            "enddate": "11/22/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "040901",
            "filename": "040901_1.xml",
            "title": "Repair Procedure for 8600 Models, Built Between June 2, 2003 to September 18, 2003, with a Stress Crack on the Hood at the Reinforcement Near the Air Intake",
            "tm": [
                "8600"
            ],
            "engfam": [],
            "formnum": "04-09-01",
            "startdate": "06/02/2003",
            "enddate": "09/18/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "030904",
            "filename": "030904_1.xml",
            "title": "Fuel Tank/Mud Flap Combinations",
            "tm": [
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "03-09-04",
            "startdate": "01/01/2000",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "15SEM",
                "15SEN"
            ]
        },
        {
            "grp": "s09",
            "root": "030903",
            "filename": "030903_1.xml",
            "title": "Hood/Fender Repair, Fender Section Replacement",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "9000",
                "9100",
                "9200",
                "9400"
            ],
            "engfam": [],
            "formnum": "03-09-03",
            "startdate": "07/01/1996",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "030902",
            "filename": "030902_1.xml",
            "title": "Fender Paint Surface With Star Cracks",
            "tm": [
                "5000",
                "5900",
                "9000",
                "9200",
                "9300",
                "9400",
                "9900I"
            ],
            "engfam": [],
            "formnum": "03-09-02",
            "startdate": "",
            "enddate": "04/01/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "030901R",
            "filename": "030901r_1.xml",
            "title": "Grille Removal",
            "tm": [
                "8600"
            ],
            "engfam": [],
            "formnum": "03-09-01R",
            "startdate": "04/23/2002",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "010905",
            "filename": "010905_1.xml",
            "title": "Painting of Revised Fender Extensions",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01-09-05",
            "startdate": "10/17/2001",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "010904",
            "filename": "010904_1.xml",
            "title": "Repair Procedures for New 9900 Hoods",
            "tm": [
                "9000",
                "9900"
            ],
            "engfam": [],
            "formnum": "01-09-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "010903",
            "filename": "010903_1.xml",
            "title": "Hood Adjustment",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01-09-03",
            "startdate": "10/24/2000",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "010902",
            "filename": "010902_1.xml",
            "title": "Headlight Aiming on 4300 and 4400 Models",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01-09-02",
            "startdate": "10/24/2000",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "010901",
            "filename": "010901_1.xml",
            "title": "Hood Noise in 5000 and 9000 Models Built Between July, 1996 and July, 1999, and 5000i and 9000i Models Built Between July, 1999 and February, 2001",
            "tm": [
                "5000",
                "5000I",
                "9000",
                "9000I"
            ],
            "engfam": [],
            "formnum": "01-09-01",
            "startdate": "07/01/1996",
            "enddate": "02/01/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "000901",
            "filename": "000901_1.xml",
            "title": "5000i and 9000i Models with Under The Hood Engine Air Cleaners That Hit the Cowl Tray During Normal Operation Resulting in Noise",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "9000",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "00-09-01",
            "startdate": "",
            "enddate": "10/06/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "990903",
            "filename": "990903_1.xml",
            "title": "Hood Modification to Prevent Interference and Scratching of the Right and Left Air Intake Scoop on 9200 Models Built Between September 1, 1998 to May 15, 1999",
            "tm": [
                "9000",
                "9200"
            ],
            "engfam": [],
            "formnum": "99-09-03",
            "startdate": "09/01/1998",
            "enddate": "05/15/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "990902",
            "filename": "990902_1.xml",
            "title": "Redesigned Hood Assist Cable Assembly",
            "tm": [
                "2000",
                "2600",
                "5000",
                "8200",
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "99-09-02",
            "startdate": "01/01/1994",
            "enddate": "06/29/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "970902",
            "filename": "970902_1.xml",
            "title": "Installation of Sound Insulation Retention Straps",
            "tm": [
                "9000",
                "9100",
                "9200",
                "9400"
            ],
            "engfam": [],
            "formnum": "97-09-02",
            "startdate": "06/24/1996",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "970901",
            "filename": "970901_1.xml",
            "title": "No TSI was released using this number",
            "tm": [],
            "engfam": [],
            "formnum": "97-09-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "960902",
            "filename": "960902_1.xml",
            "title": "Hood Adjustment",
            "tm": [
                "9000",
                "9200",
                "9400"
            ],
            "engfam": [],
            "formnum": "96-09-02",
            "startdate": "08/01/1996",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "960901",
            "filename": "960901_1.xml",
            "title": "Installation of Stainless Steel Hood Rub Plates",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "96-09-01",
            "startdate": "",
            "enddate": "02/02/1996",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "950902",
            "filename": "950902_1.xml",
            "title": "Cab Air Ride Hood Wear Plate",
            "tm": [
                "8000"
            ],
            "engfam": [],
            "formnum": "95-09-02",
            "startdate": "03/03/1993",
            "enddate": "07/31/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "950901",
            "filename": "950901_1.xml",
            "title": "Hood Adjustment",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "95-09-01",
            "startdate": "06/01/1994",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s09",
            "root": "910901R",
            "filename": "910901r_1.xml",
            "title": "Fiberglass Hood Wear",
            "tm": [
                "3000",
                "4000",
                "7000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "91-09-01R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "081001",
            "filename": "081001_1.xml",
            "title": "Navistar Hybrid Identification",
            "tm": [],
            "engfam": [],
            "formnum": "08-10-01R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "051001",
            "filename": "051001_1.xml",
            "title": "Use of Sikkens Paint for Field Repairs on International Trucks",
            "tm": [],
            "engfam": [],
            "formnum": "05-10-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "931002",
            "filename": "931002_1.xml",
            "title": "Vehicle Identification Number and Serial Number Location on Major Components Used on International Vehicles Since January 1, 1991",
            "tm": [],
            "engfam": [],
            "formnum": "93-10-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s10",
            "root": "921001",
            "filename": "921001_1.xml",
            "title": "Questions and Answers About Adhesives, Sealants and Cleaning Compounds",
            "tm": [],
            "engfam": [],
            "formnum": "92-10-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s11",
            "root": "991101R",
            "filename": "991101r_1.xml",
            "title": "Eaton Fuller Solo XL Clutches and Roller Yoke Release Assemblies",
            "tm": [],
            "engfam": [],
            "formnum": "99-11-01R",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s11",
            "root": "981102",
            "filename": "981102_1.xml",
            "title": "Clutch Linkage Upgrade",
            "tm": [
                "9000",
                "9100",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "98-11-02",
            "startdate": "09/01/1996",
            "enddate": "07/03/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s11",
            "root": "981101",
            "filename": "981101_1.xml",
            "title": "Clutch Engagement Noise with Eaton Spicer Angle-Ring 350 MM Clutches",
            "tm": [],
            "engfam": [],
            "formnum": "98-11-01",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "EATON",
                "SPICER"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s11",
            "root": "921102",
            "filename": "921102_1.xml",
            "title": "Clutch Operation",
            "tm": [],
            "engfam": [],
            "formnum": "92-11-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s11",
            "root": "921101",
            "filename": "921101_1.xml",
            "title": "Clutch Adjustment of Rockwell and Eaton Valeo Clutches",
            "tm": [
                "2000",
                "8100",
                "8200",
                "8300",
                "9000"
            ],
            "engfam": [],
            "formnum": "92-11-01",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "ROCKWELL",
                "EATON"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "11LRA",
                "11LRB",
                "11MRA",
                "11MRB",
                "11SXD",
                "11SXE"
            ]
        },
        {
            "grp": "s12",
            "root": "081214",
            "filename": "081214_1.xml",
            "title": "Turbocharger Unison Ring",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "08-12-14",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "081213",
            "filename": "081213_1.xml",
            "title": "Serial Number Prefix Change and New Engine Features",
            "tm": [],
            "engfam": [
                "MAXXFORCE 5",
                "VT 275"
            ],
            "formnum": "08-12-13",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "081210",
            "filename": "081210_1.xml",
            "title": "Hard Start and No Start Diagnostics - New Injection Control Pressure (ICP) Test",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570",
                "MAXXFORCE DT",
                "MAXXFORCE 9",
                "MAXXFORCE 10"
            ],
            "formnum": "08-12-10",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "081209",
            "filename": "081209_1.xml",
            "title": "Installation of Lower Crankcase Seals",
            "tm": [],
            "engfam": [
                "VT 275",
                "VT 365",
                "MAXXFORCE 5",
                "MAXXFORCE 7"
            ],
            "formnum": "08-12-09",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "081208",
            "filename": "081208_1.xml",
            "title": "Eliminate Fuel Prescreen Element",
            "tm": [],
            "engfam": [
                "MAXXFORCE 7"
            ],
            "formnum": "08-12-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "081207",
            "filename": "081207_1.xml",
            "title": "Biodiesel Fuel and Biodiesel Blends",
            "tm": [],
            "engfam": [],
            "formnum": "08-12-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "081206",
            "filename": "081206_1.xml",
            "title": "RE and RC Bus Hydraulic Cooling Fan Diagnostics",
            "tm": [
                "RE BUS",
                "RC BUS"
            ],
            "engfam": [],
            "formnum": "08-12-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "081205",
            "filename": "081205_1.xml",
            "title": "Exhaust Diesel Particulate Filter (DPF) Serial Number Location",
            "tm": [],
            "engfam": [],
            "formnum": "08-12-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "081204",
            "filename": "081204_1.xml",
            "title": "EGR Cooler and Bracket Installation Procedure",
            "tm": [],
            "engfam": [
                "MAXXFORCE DT",
                "MAXXFORCE 9",
                "MAXXFORCE 10"
            ],
            "formnum": "08-12-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "081203",
            "filename": "081203_1.xml",
            "title": "Revise Special Torques On Power Steering Flared Tube Nuts",
            "tm": [],
            "engfam": [
                "MAXXFORCE 7"
            ],
            "formnum": "08-12-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "081202",
            "filename": "081202_1.xml",
            "title": "Release New Wear Sleeve Removal Tool",
            "tm": [],
            "engfam": [
                "MAXXFORCE 7"
            ],
            "formnum": "08-12-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "081201",
            "filename": "081201_1.xml",
            "title": "Engine Idle Shutdown Timer (IST) Regulations",
            "tm": [],
            "engfam": [
                "MAXXFORCE DT",
                "MAXXFORCE 5",
                "MAXXFORCE 7",
                "MAXXFORCE 9",
                "MAXXFORCE 10"
            ],
            "formnum": "08-12-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "071216",
            "filename": "071216_1.xml",
            "title": "Remote Fuel/Water Separator Installation With 150 Watt Electric Heater, Water In Fuel Sensor, Fuel Restriction Switch And Optional Coolant Heat Exchanger",
            "tm": [
                "4100",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "8500"
            ],
            "engfam": [],
            "formnum": "07-12-16RA",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "071214",
            "filename": "071214_1.xml",
            "title": "Severe Service Fan Blade Failures",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7600",
                "7700"
            ],
            "engfam": [],
            "formnum": "07-12-14R",
            "startdate": "11/01/2002",
            "enddate": "08/01/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "071212",
            "filename": "071212_1.xml",
            "title": "EGR Coolant Return Kits",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "07-12-12",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "071211",
            "filename": "071211_1.xml",
            "title": "New I6 Connecting Rod Assembly and Torque Specification",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 530",
                "HT 530",
                "MAXXFORCE DT",
                "MAXXFORCE 9",
                "MAXXFORCE 10"
            ],
            "formnum": "07-12-11",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "071210",
            "filename": "071210_1.xml",
            "title": "Revised Cylinder Head Flatness Check",
            "tm": [],
            "engfam": [
                "VT 275",
                "VT 365",
                "MAXXFORCE 7"
            ],
            "formnum": "07-12-10",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "071209",
            "filename": "071209_1.xml",
            "title": "New High-Pressure Hose Assemblies",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "07-12-09",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "071208",
            "filename": "071208_1.xml",
            "title": "Revision to Air Compressor Pulley Nut Torque Value",
            "tm": [],
            "engfam": [
                "MAXXFORCE 7"
            ],
            "formnum": "07-12-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "071207",
            "filename": "071207_1.xml",
            "title": "Prevention of Objects and Debris from Falling into Intake Ports during Removal and Installation of Intake Manifold",
            "tm": [],
            "engfam": [
                "MAXXFORCE 5",
                "MAXXFORCE 7",
                "VT 275",
                "VT 365"
            ],
            "formnum": "07-12-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "071206",
            "filename": "071206_1.xml",
            "title": "Fuel Line Sealing Kit",
            "tm": [],
            "engfam": [
                "DT 466",
                "530",
                "DT 466E",
                "530E",
                "DT 570",
                "HT 570",
                "DT 530E"
            ],
            "formnum": "07-12-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "071205",
            "filename": "071205_1.xml",
            "title": "Protecting Removed Hydraulically Actuated Fuel Injectors",
            "tm": [],
            "engfam": [
                "VT 275",
                "VT 365",
                "T 444E",
                "HT 530",
                "DT 466",
                "DT 466E",
                "DT 530",
                "DT 530E",
                "DT 570",
                "HT 570",
                "MAXXFORCE DT",
                "MAXXFORCE 9",
                "MAXXFORCE 10"
            ],
            "formnum": "07-12-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "071204",
            "filename": "071204_1.xml",
            "title": "Cylinder Head Service Kit Identification",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "07-12-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "071203",
            "filename": "071203_1.xml",
            "title": "Redesigned Upper Radiator Inlet Pipe Support Bracket",
            "tm": [
                "9000",
                "9200I",
                "9400I"
            ],
            "engfam": [
                "CUMMINS ISX"
            ],
            "formnum": "07-12-03",
            "startdate": "08/14/2006",
            "enddate": "11/27/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "071202",
            "filename": "071202_1.xml",
            "title": "Rubber Vibration Damper Replacement Kits",
            "tm": [],
            "engfam": [
                "DT 570",
                "HT 570"
            ],
            "formnum": "07-12-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "071201",
            "filename": "071201_1.xml",
            "title": "International Diesel Engine Service Publications Application Guide",
            "tm": [],
            "engfam": [],
            "formnum": "07-12-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061230",
            "filename": "061230_1.xml",
            "title": "Valve Train Service Kit",
            "tm": [],
            "engfam": [
                "VT 365",
                "VT 275"
            ],
            "formnum": "06-12-30",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061229",
            "filename": "061229_1.xml",
            "title": "Piston, Sleeve, and Ring Kit",
            "tm": [],
            "engfam": [
                "DT 570",
                "HT 570"
            ],
            "formnum": "06-12-29",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061228",
            "filename": "061228_1.xml",
            "title": "Turbocharger Service Parts",
            "tm": [],
            "engfam": [
                "VT 275"
            ],
            "formnum": "06-12-28",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061227",
            "filename": "061227_1.xml",
            "title": "New Piston and Piston Ring Assemblies",
            "tm": [],
            "engfam": [
                "DT 466"
            ],
            "formnum": "06-12-27",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061225",
            "filename": "061225_1.xml",
            "title": "Lube Oil Recommendations for International Diesel Engines",
            "tm": [],
            "engfam": [
                "VT 275",
                "VT 365",
                "T 444E",
                "HT 530",
                "DT 466",
                "DT 530",
                "DT 466E",
                "DT 530E",
                "DT 570",
                "HT 570",
                "MAXXFORCE 5",
                "MAXXFORCE 7",
                "MAXXFORCE DT",
                "MAXXFORCE 9",
                "MAXXFORCE 10",
                "MAXXFORCE 11",
                "MAXXFORCE 13"
            ],
            "formnum": "06-12-25",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061224",
            "filename": "061224_1.xml",
            "title": "Flat Pulley and Belt Kit to Eliminate Belt Squeal",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "06-12-24",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061223",
            "filename": "061223_1.xml",
            "title": "Repair Guidelines for Horton DriveMaster Fan Clutches Installed on Vehicles Starting 06/01/2000",
            "tm": [],
            "engfam": [],
            "formnum": "06-12-23",
            "startdate": "",
            "enddate": "",
            "vendor": "HORTON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061222",
            "filename": "061222_1.xml",
            "title": "Redesigned Upper Radiator Inlet Pipe and Mounting",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I"
            ],
            "engfam": [
                "CUMMINS ISM",
                "CUMMINS ISX",
                "CATERPILLAR C-13",
                "CATERPILLAR C-15"
            ],
            "formnum": "06-12-22R",
            "startdate": "04/10/2006",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061221",
            "filename": "061221_1.xml",
            "title": "Update Valve Train Components",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "06-12-21",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061220",
            "filename": "061220_1.xml",
            "title": "Turbocharger VGT Linkage Kit",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "06-12-20",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061219",
            "filename": "061219_1.xml",
            "title": "Air Sensing Viscous Fan Drive Diagnostic Test Procedure",
            "tm": [],
            "engfam": [],
            "formnum": "06-12-19",
            "startdate": "",
            "enddate": "",
            "vendor": "BORGWARNER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061218",
            "filename": "061218_1.xml",
            "title": "Release of New Main Drive Belts to Eliminate Belt Chirp",
            "tm": [],
            "engfam": [
                "VT 275"
            ],
            "formnum": "06-12-18",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061217",
            "filename": "061217_1.xml",
            "title": "Ultra Low Sulfur Diesel (ULSD) Effects on Seals",
            "tm": [],
            "engfam": [],
            "formnum": "06-12-17",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061216",
            "filename": "061216_1.xml",
            "title": "Redesigned Engine Block Heater Assembly",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "06-12-16",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061215",
            "filename": "061215_1.xml",
            "title": "Sensor O-ring Kit for CMP or CKP Applications",
            "tm": [],
            "engfam": [
                "VT 365",
                "VT 275",
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "06-12-15",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061214",
            "filename": "061214_1.xml",
            "title": "Update Valve Train Components",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "530",
                "DT 466E",
                "530E",
                "DT 530",
                "HT 530",
                "DT 570",
                "HT 570"
            ],
            "formnum": "06-12-14",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061213",
            "filename": "061213_1.xml",
            "title": "Emission Calibration Conversion from Highway to Non-road (off-road)",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "06-12-13",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061212",
            "filename": "061212_1.xml",
            "title": "Flywheel Housing Adapter Hub Assembly Changes",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "06-12-12",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061211",
            "filename": "061211_1.xml",
            "title": "2006 Model Year Changes for VT 275 Diesel Engines",
            "tm": [],
            "engfam": [
                "VT 275"
            ],
            "formnum": "06-12-11",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061210",
            "filename": "061210_1.xml",
            "title": "2006 Model Year Changes for VT 365 Diesel Engines",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "06-12-10",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061209",
            "filename": "061209_1.xml",
            "title": "Extended Life Fan Belt Design for Caterpillar C-15 Engines used in International 9200i and 9400i Models built after October, 2002",
            "tm": [
                "9000",
                "9200I",
                "9400I"
            ],
            "engfam": [],
            "formnum": "06-12-09",
            "startdate": "10/01/2002",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12KPD",
                "12KPE",
                "12KPG",
                "12KPH",
                "12KPL",
                "12KPM",
                "12KPN",
                "12KPP",
                "12KPW",
                "12KPX",
                "12KPY",
                "12KPZ",
                "12KRB",
                "12KRW",
                "12KRY",
                "12KRZ",
                "12KSK",
                "12KSL",
                "12KSY",
                "12KTB",
                "12KTR",
                "12KTX",
                "12KTY",
                "12KTZ",
                "12KUA",
                "12KUB",
                "12KUC",
                "12KUD",
                "12KVK"
            ]
        },
        {
            "grp": "s12",
            "root": "061208",
            "filename": "061208_1.xml",
            "title": "The Engine Turbocharger Clean Air Intake Hose Nipple that Provides Air to the Air Compressor May Disconnect from the Intake Hose in a Limited Number of International 7300 Models Built Between October 1, 2001 and December 01, 2004 and International 7400 Models Built Between July 1, 2001 and December 01, 2004 with International I-6 Engines",
            "tm": [
                "7300",
                "7400"
            ],
            "engfam": [],
            "formnum": "06-12-08",
            "startdate": "07/01/2001",
            "enddate": "12/01/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12VAG",
                "12VAL",
                "12VBB",
                "12VBC",
                "12VBG",
                "12VBH"
            ]
        },
        {
            "grp": "s12",
            "root": "061207",
            "filename": "061207_1.xml",
            "title": "Redesigned Front Covers",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "06-12-07R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061206",
            "filename": "061206_1.xml",
            "title": "In-Chassis Service Procedure: Removal and Installation of Branch Tube Assembly",
            "tm": [],
            "engfam": [
                "VT 275"
            ],
            "formnum": "06-12-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061205",
            "filename": "061205_1.xml",
            "title": "New Design Oil Level Dip Stick Assembly for Caterpillar C-13 Engines in 8600 Models Built October 1, 2003 to September 1, 2005",
            "tm": [
                "8600"
            ],
            "engfam": [],
            "formnum": "06-12-05",
            "startdate": "10/01/2003",
            "enddate": "09/01/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12KRU",
                "12KRV",
                "12KRX",
                "12KSH",
                "12KSJ",
                "12KSM",
                "12KSR",
                "12KSV"
            ]
        },
        {
            "grp": "s12",
            "root": "061204",
            "filename": "061204_1.xml",
            "title": "In-chassis Service Procedure: Removal and Installation of Branch Tube Assembly",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "06-12-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061203",
            "filename": "061203_1.xml",
            "title": "Increase Crankshaft Vibration Damper Bolt Torque",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 530",
                "DT 570",
                "HT 530",
                "HT 570"
            ],
            "formnum": "06-12-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061202",
            "filename": "061202_1.xml",
            "title": "Barry Style Rear Engine Mounts Available for 5000i Models Built After January 1, 2000 with Caterpillar or Cummins Engines",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I"
            ],
            "engfam": [],
            "formnum": "06-12-02",
            "startdate": "01/01/2000",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "061201",
            "filename": "061201_1.xml",
            "title": "New Service Calibration",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "06-12-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051245",
            "filename": "051245_1.xml",
            "title": "Water Pump And Air Compressor Drive Pulley",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "05-12-45",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051244",
            "filename": "051244_1.xml",
            "title": "Performing an Engine Stall Test on CE 200, CE 300 Bus Models with Feature Code 04085 Built Between March 12, 2004 to the Present",
            "tm": [
                "CE 200",
                "CE 300"
            ],
            "engfam": [],
            "formnum": "05-12-44",
            "startdate": "03/12/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051243",
            "filename": "051243_1.xml",
            "title": "Fan Blade Replacement for Borg Warner DD-26 (Code 12TSG), DD-30 (Code 12TSJ), SD-65 (Code 12TST) Viscous Fan Drives on 3600, 3800, 4700,4800, 4900, IC and FE Bus Models Built Between January 1, 1998 and March 1, 2004",
            "tm": [
                "3600",
                "3800",
                "4700",
                "4800",
                "4900",
                "IC BUS",
                "FE BUS"
            ],
            "engfam": [],
            "formnum": "05-12-43",
            "startdate": "01/01/1998",
            "enddate": "03/01/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12TSG",
                "12TSJ",
                "12TST"
            ]
        },
        {
            "grp": "s12",
            "root": "051242R",
            "filename": "051242r_1.xml",
            "title": "Updated Turbocharger Service Kits",
            "tm": [],
            "engfam": [
                "DT 466"
            ],
            "formnum": "05-12-42R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051241",
            "filename": "051241_1.xml",
            "title": "Turbocharger and Mounting Assembly Service Kits",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "05-12-41",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051240",
            "filename": "051240_1.xml",
            "title": "EPA Emergency Fuel Usage Waiver",
            "tm": [],
            "engfam": [],
            "formnum": "05-12-40",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051237",
            "filename": "051237_1.xml",
            "title": "MasterDiagnostic Unknown Diagnostic Trouble Codes (DTC)",
            "tm": [],
            "engfam": [
                "VT 275"
            ],
            "formnum": "05-12-37",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051236",
            "filename": "051236_1.xml",
            "title": "Inspection and Correction Procedures for International Engines Subjected to Flood Water",
            "tm": [],
            "engfam": [],
            "formnum": "05-12-36",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051235",
            "filename": "051235_1.xml",
            "title": "New 1500 Watt Single Grid Intake Air Heater Production Option",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "05-12-35",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051234",
            "filename": "051234_1.xml",
            "title": "Systematic Method to Diagnose an Engine Overheat Condition",
            "tm": [],
            "engfam": [],
            "formnum": "05-12-34",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051233",
            "filename": "051233_1.xml",
            "title": "Upper Radiator Inlet Pipe Revision",
            "tm": [
                "7600"
            ],
            "engfam": [],
            "formnum": "05-12-33",
            "startdate": "06/20/2005",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051232",
            "filename": "051232_1.xml",
            "title": "Radiator Caps for HPV Models",
            "tm": [
                "3200",
                "3300",
                "CE 200",
                "CE 300",
                "RE 200",
                "RE 300",
                "IC BUS",
                "3800",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "8500"
            ],
            "engfam": [],
            "formnum": "05-12-32",
            "startdate": "07/01/2003",
            "enddate": "03/15/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051231",
            "filename": "051231_1.xml",
            "title": "Horton Fan Drive Diagnostics for All Truck Models Built Starting January, 1990 to Present",
            "tm": [],
            "engfam": [],
            "formnum": "05-12-31",
            "startdate": "",
            "enddate": "",
            "vendor": "HORTON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051230",
            "filename": "051230_1.xml",
            "title": "Diamond Logic Exhaust Brake and Diamond Logic Engine Brake",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "05-12-30",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051229",
            "filename": "051229_1.xml",
            "title": "Connecting Rod Bearing Kits",
            "tm": [],
            "engfam": [
                "VT 275"
            ],
            "formnum": "05-12-29",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051228",
            "filename": "051228_1.xml",
            "title": "New High-Pressure Oil Rails",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "05-12-28",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051227",
            "filename": "051227_1.xml",
            "title": "Valve Spring Retainer",
            "tm": [],
            "engfam": [
                "DT 466"
            ],
            "formnum": "05-12-27",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051226",
            "filename": "051226_1.xml",
            "title": "Release of New Air Compressor and Elbow Service Kit",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "05-12-26",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051225",
            "filename": "051225_1.xml",
            "title": "Service Replacement Radiators Shipped With and Without Isolators",
            "tm": [],
            "engfam": [],
            "formnum": "05-12-25",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051224",
            "filename": "051224_1.xml",
            "title": "Turbo Actuator Service Kit (SRA)",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "05-12-24",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051223",
            "filename": "051223_1.xml",
            "title": "Performance Specifications for Model Year 2005 International VT 275 Engine Applications",
            "tm": [],
            "engfam": [
                "VT 275"
            ],
            "formnum": "05-12-23",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051222",
            "filename": "051222_1.xml",
            "title": "Cylinder Head Kit",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "05-12-22",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051220",
            "filename": "051220_1.xml",
            "title": "New Fan Design for 7600 Models with Cummins ISM Engine Used in Certain Vocations",
            "tm": [
                "7600"
            ],
            "engfam": [],
            "formnum": "05-12-20",
            "startdate": "10/01/2002",
            "enddate": "12/17/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051219",
            "filename": "051219_1.xml",
            "title": "Turbocharger Solenoid Valve Kits",
            "tm": [],
            "engfam": [
                "VT 365",
                "HT 530"
            ],
            "formnum": "05-12-19",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051218",
            "filename": "051218_1.xml",
            "title": "Check Ball - Rexroth High-Pressure Oil Pump Repairs",
            "tm": [],
            "engfam": [
                "DT 466E",
                "DT 466",
                "530E",
                "DT 530",
                "HT 530"
            ],
            "formnum": "05-12-18",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051217",
            "filename": "051217_1.xml",
            "title": "Pushrod Assembly",
            "tm": [],
            "engfam": [
                "VT 275",
                "VT 365"
            ],
            "formnum": "05-12-17",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051216",
            "filename": "051216_1.xml",
            "title": "Fuel Dilution (Fuel in the Oil) Diagnosis with Dye",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "05-12-16",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051215",
            "filename": "051215_1.xml",
            "title": "New EGR Cooler Service Kits",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "05-12-15",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051214",
            "filename": "051214_1.xml",
            "title": "Starting January 3, 2005, CE 200, 3200, and 4200 Models Built with International VT 365 Engines and Air Brakes, a Brass Tee Fitting Replaces the Plastic \"Y\" Fitting in the Deaeration Line Between the Surge Tank, Engine and Air Compressor",
            "tm": [
                "CE 200",
                "3200",
                "4200"
            ],
            "engfam": [],
            "formnum": "05-12-14",
            "startdate": "02/01/2002",
            "enddate": "01/02/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051213",
            "filename": "051213_1.xml",
            "title": "Air Filter Mounted Air Restriction Gauges",
            "tm": [
                "3200",
                "3300",
                "3400",
                "3800",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "05-12-13",
            "startdate": "",
            "enddate": "10/11/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051211",
            "filename": "051211_1.xml",
            "title": "New Crankcase-to-Head Tube Assembly and Injection Control Pressure (ICP) Adapter/Plug Kit for Diagnostics",
            "tm": [],
            "engfam": [
                "VT 275",
                "VT 365"
            ],
            "formnum": "05-12-11",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051210",
            "filename": "051210_1.xml",
            "title": "Valve Cover Electrical Connector Lock",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "05-12-10",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051209",
            "filename": "051209_1.xml",
            "title": "New Design Lower Radiator Pipe Bracket for 9000i Models, with Cummins ISX Engine, Built Between August 1, 2003 and June 1, 2004",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "05-12-09",
            "startdate": "08/01/2003",
            "enddate": "06/01/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051208",
            "filename": "051208_1.xml",
            "title": "Exhaust Manifold Leak",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "05-12-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051207",
            "filename": "051207_1.xml",
            "title": "Low Injection Control Pressure (ICP) Test",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "05-12-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051206",
            "filename": "051206_1.xml",
            "title": "Heat Shield Kit for Exhaust Manifold",
            "tm": [
                "7300",
                "7400",
                "7500",
                "7600"
            ],
            "engfam": [
                "DT 466E"
            ],
            "formnum": "05-12-06R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12NMG",
                "12NMH",
                "12NMK"
            ]
        },
        {
            "grp": "s12",
            "root": "051205",
            "filename": "051205_1.xml",
            "title": "New Piston Cooling Tube",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "05-12-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "051202",
            "filename": "051202_1.xml",
            "title": "Cylinder Sleeve Ring Kit",
            "tm": [],
            "engfam": [
                "DT 466E",
                "DT 530E",
                "DT 530",
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "05-12-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041233",
            "filename": "041233_1.xml",
            "title": "Electronic Control Module (ECM) Diagnostic Effects for International T 444E, DT 466E/530E, and DT 466/530 Diesel Engines in International Truck Applications",
            "tm": [],
            "engfam": [
                "T 444E",
                "DT 466E",
                "DT 466",
                "DT 530",
                "HT 530",
                "530E"
            ],
            "formnum": "04-12-33",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041232",
            "filename": "041232_1.xml",
            "title": "Convert The International VT 365 2004 Model Year Engine Emission Calibration (Highway Use) To Non-Road (Off-Road) Engine Emission Calibration",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "04-12-32",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041231",
            "filename": "041231_1.xml",
            "title": "Bolt Retainers Removed from Branch Tube Adapter for High-Pressure Oil Pump",
            "tm": [],
            "engfam": [
                "VT 275",
                "VT 365"
            ],
            "formnum": "04-12-31",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041230",
            "filename": "041230_1.xml",
            "title": "Cold Weather Startability Guidelines for 2004 Emission DT 466 Engines",
            "tm": [],
            "engfam": [
                "DT 466"
            ],
            "formnum": "04-12-30",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041229",
            "filename": "041229_1.xml",
            "title": "Priming Fuel System after Running Out of Fuel",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "04-12-29",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041228",
            "filename": "041228_1.xml",
            "title": "Replacement of Copper / Brass Core Radiators with Aluminum Core Radiators in 5000 Models Built from 1994 to Current Production and 9000 Models Built Between 1994 and October 2002",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-12-28",
            "startdate": "01/01/1994",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041225",
            "filename": "041225_1.xml",
            "title": "New Articulated Piston Crown and Skirt",
            "tm": [],
            "engfam": [
                "530E",
                "HT 530",
                "DT 530"
            ],
            "formnum": "04-12-25",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041224",
            "filename": "041224_1.xml",
            "title": "New High Performance Aluminum Core Radiator Replaces Copper/Brass Radiator for HPV Models Built Between January 1, 2001 and November 1, 2003",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "8500"
            ],
            "engfam": [],
            "formnum": "04-12-24",
            "startdate": "01/01/2001",
            "enddate": "11/01/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12UWD",
                "12UWG",
                "12UVT",
                "12UVW",
                "12UVX"
            ]
        },
        {
            "grp": "s12",
            "root": "041223RA",
            "filename": "041223ra_1.xml",
            "title": "Coolant Sealant Conditioner To Eliminate Engine Front Cover Leaks",
            "tm": [],
            "engfam": [
                "DT 466E",
                "DT 466",
                "DT 530",
                "HT 530",
                "530E"
            ],
            "formnum": "04-12-23RA",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041222",
            "filename": "041222_1.xml",
            "title": "Convert the International VT 365 on-road engine emission calibration to off-road engine emission calibration",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "04-12-22",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041220",
            "filename": "041220_1.xml",
            "title": "International VT 365 Upper Oil Pan Assembly",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "04-12-20",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041219",
            "filename": "041219_1.xml",
            "title": "New Exhaust Back Pressure (EBP) piston rod assembly kit",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "04-12-19",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041218",
            "filename": "041218_1.xml",
            "title": "Ethylene Glycol Coolant Color Change to be Phased-In Approximately April 1, 2004",
            "tm": [
                "2000",
                "200RE",
                "300FE",
                "3000IC",
                "3200",
                "3300",
                "4200",
                "4300",
                "4400",
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "04-12-18",
            "startdate": "04/01/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041217",
            "filename": "041217_1.xml",
            "title": "Remote Engine Speed Control For HPV Models with 2004 International Engines",
            "tm": [],
            "engfam": [],
            "formnum": "04-12-17",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12VVW",
                "12VYC",
                "12VXY"
            ]
        },
        {
            "grp": "s12",
            "root": "041216",
            "filename": "041216_1.xml",
            "title": "High-Pressure Pump Repair Kit For Fitting Leakage Repair",
            "tm": [],
            "engfam": [
                "DT 466E",
                "DT 466",
                "530E",
                "DT 530",
                "HT 530"
            ],
            "formnum": "04-12-16",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041214",
            "filename": "041214_1.xml",
            "title": "Performance Specifications for Model Year 2002 and 2003 International VT 365 Engine Applications",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "04-12-14",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041213",
            "filename": "041213_1.xml",
            "title": "Oil Level Gauge Adapter Service Kit",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "04-12-13",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041212",
            "filename": "041212_1.xml",
            "title": "Air Cleaner Snow Valve Motor Improvement for 4000, 7000, 8000 HPV Models Built After August 1, 2000",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600"
            ],
            "engfam": [],
            "formnum": "04-12-12",
            "startdate": "08/01/2000",
            "enddate": "02/28/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12VAG",
                "12VAL"
            ]
        },
        {
            "grp": "s12",
            "root": "041210R",
            "filename": "041210r_1.xml",
            "title": "Exhaust Gas Recirculation (EGR) Diagnostics for Model Year 2004 International VT 365 Engine Applications",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "04-12-10R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041209",
            "filename": "041209_1.xml",
            "title": "Releasing Front Cover PTO Adaptation Kit.",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 570",
                "HT 570"
            ],
            "formnum": "04-12-09",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041207",
            "filename": "041207_1.xml",
            "title": "In-line Engine Standard Torque Values",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 466E",
                "530E",
                "DT 530",
                "HT 530",
                "GREEN DIESEL TECHNOLOGY ENGINE"
            ],
            "formnum": "04-12-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041206R",
            "filename": "041206r_1.xml",
            "title": "In-Line Engine Bolt Tightening Torque Updates For Model Years 1993 Through 2003",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "DT 530",
                "HT 530",
                "DT 466E",
                "530E",
                "GREEN DIESEL TECHNOLOGY ENGINE"
            ],
            "formnum": "04-12-06R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041205",
            "filename": "041205_1.xml",
            "title": "Clutch Damper Interference with Flywheel Bolts on Caterpillar 3406E, C-15, C-16 Engines",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-12-05",
            "startdate": "04/01/2003",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041204",
            "filename": "041204_1.xml",
            "title": "Production and service calibration history and new production and service calibrations for the Electronic Control Module (ECM) and Injector Drive Module (IDM) of the Diamond Logic Engine Control II.",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "04-12-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041203R",
            "filename": "041203r_1.xml",
            "title": "Release Of Three New International I-6 Diesel Engine Turbocharger Oil Supply Tube Service Items",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 466E",
                "DT 570",
                "HT 570",
                "DT 530",
                "DT 530E"
            ],
            "formnum": "04-12-03R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041202",
            "filename": "041202_1.xml",
            "title": "New Bolt Tightening Procedure For Supply Manifold",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 530",
                "HT 530",
                "DT 466E",
                "530E",
                "THE  530E GREEN DIESEL TECHNOLOGY"
            ],
            "formnum": "04-12-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "041201R",
            "filename": "041201r_1.xml",
            "title": "Correct Fuel System Priming Procedure To Prevent Injector Tip Failures",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 466E",
                "530E",
                "DT 530"
            ],
            "formnum": "04-12-01R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031220",
            "filename": "031220_1.xml",
            "title": "Color Change of Ethylene Glycol (Green Coolant)",
            "tm": [],
            "engfam": [],
            "formnum": "03-12-20",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031219",
            "filename": "031219_1.xml",
            "title": "Performance Specifications for 2003 Model Year International Engines",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 530",
                "HT 530"
            ],
            "formnum": "03-12-19",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031218",
            "filename": "031218_1.xml",
            "title": "Production and service calibration history and new service calibration PRC2BV02 for the Diamond Logic engine controller",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "03-12-18",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031217",
            "filename": "031217_1.xml",
            "title": "Optimized Radiator Life",
            "tm": [
                "2000",
                "5000",
                "9000"
            ],
            "engfam": [],
            "formnum": "03-12-17",
            "startdate": "",
            "enddate": "11/01/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031216",
            "filename": "031216_1.xml",
            "title": "Rear Oil Seal Carrier And Rear Seal Carrier Gasket Material For International Inline 6 Cylinder Engines Starting At Model Year 1994 Through 2003 With Serial Number 850,000 And Above",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 466E",
                "530E",
                "DT 530",
                "HT 530",
                "THE  530E WITH GREEN DIESEL TECHNOLOGY"
            ],
            "formnum": "03-12-16",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031215",
            "filename": "031215_1.xml",
            "title": "Performance Specifications for Model Year 2002 and 2003 International T 444E Engine Applications",
            "tm": [],
            "engfam": [
                "T 444E (MODEL YEAR 2002)",
                "T 444E (MODEL YEAR 2003)"
            ],
            "formnum": "03-12-15",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031213",
            "filename": "031213_1.xml",
            "title": "Radiator Hose Clamps for 8600 Models",
            "tm": [
                "8600"
            ],
            "engfam": [],
            "formnum": "03-12-13",
            "startdate": "11/01/2002",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031212",
            "filename": "031212_1.xml",
            "title": "Service Radiators for 2000, 5000, and 9000 Model Series",
            "tm": [
                "2000",
                "5000",
                "9000"
            ],
            "engfam": [],
            "formnum": "03-12-12",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031211",
            "filename": "031211_1.xml",
            "title": "Front and Rear Fan Clutch Diagnostic and Troubleshooting Procedures for International Code 12TKN, BorgWarner K22, and International Code 12TKS, Borg Warner K26",
            "tm": [],
            "engfam": [],
            "formnum": "03-12-11",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12TKN",
                "12TKS"
            ]
        },
        {
            "grp": "s12",
            "root": "031210R",
            "filename": "031210r_1.xml",
            "title": "Belt Wear On International VT 365, T 444E, DT 466, and 530 Engines",
            "tm": [],
            "engfam": [
                "DT 466",
                "530",
                "T 444E",
                "VT 365"
            ],
            "formnum": "03-12-10R",
            "startdate": "09/01/1993",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031209",
            "filename": "031209_1.xml",
            "title": "Inability to Run an Air Management Test",
            "tm": [],
            "engfam": [
                "HT530"
            ],
            "formnum": "03-12-09",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031208",
            "filename": "031208_1.xml",
            "title": "Intake Air Piping Oil Residue",
            "tm": [],
            "engfam": [
                "-6 ENGINES EQUIPPED SIMULTANEOUSLY WITH BOTH A DIAMOND LOGIC ENGINE BRAKE AND AN EVRT ELECTRONICALLY CONTROLLED TURBOCHARGER BEGINNING WITH ENGINE SERIAL NUMBER 1319430."
            ],
            "formnum": "03-12-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031207",
            "filename": "031207_1.xml",
            "title": "DT 466 Service Piston",
            "tm": [],
            "engfam": [
                "DT 466"
            ],
            "formnum": "03-12-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031206",
            "filename": "031206_1.xml",
            "title": "Caterpillar Main Drive Belts",
            "tm": [
                "5000I",
                "7600",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "03-12-06",
            "startdate": "10/01/2002",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031205",
            "filename": "031205_1.xml",
            "title": "Injector And Glow Plug Harness Change",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "03-12-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031204",
            "filename": "031204_1.xml",
            "title": "Lower Radiator Outlet Hose",
            "tm": [
                "7300",
                "7400",
                "7500"
            ],
            "engfam": [
                "DT 466",
                "DT 466E",
                "530E",
                "DT 530",
                "HT 530"
            ],
            "formnum": "03-12-04",
            "startdate": "07/23/2001",
            "enddate": "12/01/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031203",
            "filename": "031203_1.xml",
            "title": "High-Pressure Pump Seal Service Kit",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "03-12-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "031202",
            "filename": "031202_1.xml",
            "title": "New Engine Wiring Harness With Improved EMI Protection",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "03-12-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021230",
            "filename": "021230_1.xml",
            "title": "New Service Flexplate for Standard Torque Engines (Model Years 1994-1999)",
            "tm": [],
            "engfam": [
                "DT 466E",
                "DT 466",
                "DTA 466",
                "DT 408",
                "DTA 408"
            ],
            "formnum": "02-12-30",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021229",
            "filename": "021229_1.xml",
            "title": "Breather Element Replacement",
            "tm": [],
            "engfam": [
                "DT 466E",
                "DT 466",
                "530E",
                "THE  530E GREEN DIESEL TECHNOLOGY",
                "DT 530",
                "HT 530"
            ],
            "formnum": "02-12-29",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021228",
            "filename": "021228_1.xml",
            "title": "False Coolant Level Warning Due to Coolant Probe Corrosion in 2000 and 8000 Models Built Between October 1, 1997 and August 7, 2000; 5000 and 5000i Models Built Between October 1, 1997 and July 1, 2000; and 3000 FE Models Built After November 1, 1997 with International Engines",
            "tm": [
                "2000",
                "3000 FE",
                "5000",
                "5000I",
                "8000"
            ],
            "engfam": [],
            "formnum": "02-12-28",
            "startdate": "10/01/1997",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021227",
            "filename": "021227_1.xml",
            "title": "New Torque Value for Fractured Type Connecting Rod Bolts",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 466E",
                "530E",
                "DT 530",
                "HT 530"
            ],
            "formnum": "02-12-27",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021223",
            "filename": "021223_1.xml",
            "title": "Relocation of the Serial Number on All I-6 Engines",
            "tm": [],
            "engfam": [
                "DT 466E",
                "DT 466",
                "530E",
                "THE  530E GREEN DIESEL TECHNOLOGY",
                "DT 530",
                "HT 530"
            ],
            "formnum": "02-12-23",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021222",
            "filename": "021222_1.xml",
            "title": "Diagnostic Tests for Fuel Injector Scuffing",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "02-12-22",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021221",
            "filename": "021221_1.xml",
            "title": "High-Pressure Oil Pump Service Kit and Instruction Video",
            "tm": [],
            "engfam": [
                "DT 466E",
                "DT 466",
                "530E",
                "DT 530",
                "HT 530"
            ],
            "formnum": "02-12-21",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021219",
            "filename": "021219_1.xml",
            "title": "Piston / Flywheel / Vibration Damper Compatibility",
            "tm": [],
            "engfam": [
                "VT 365 DIESEL ENGINE"
            ],
            "formnum": "02-12-19",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021218",
            "filename": "021218_1.xml",
            "title": "Viscous Fan Drive \"Temperature Engagement\" Variability",
            "tm": [
                "1000",
                "3800",
                "4700",
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "02-12-18",
            "startdate": "09/01/2000",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021217",
            "filename": "021217_1.xml",
            "title": "Upper Radiator Pipe For Cummins N14 Engine",
            "tm": [
                "2000",
                "2500",
                "2600"
            ],
            "engfam": [],
            "formnum": "02-12-17",
            "startdate": "01/28/2002",
            "enddate": "",
            "vendor": "CUMMINS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021216",
            "filename": "021216_1.xml",
            "title": "Procedure for containment of injector hold down snap rings during removal of fuel injector assembly.",
            "tm": [],
            "engfam": [
                "VT 365"
            ],
            "formnum": "02-12-16",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021215",
            "filename": "021215_1.xml",
            "title": "Under Valve Cover (UVC) Harness Retainer Clip Service Kit",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "02-12-15",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021214",
            "filename": "021214_1.xml",
            "title": "Performance Specifications for 2002 Model Year HT 530 Engines",
            "tm": [],
            "engfam": [
                "HT 530"
            ],
            "formnum": "02-12-14",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021213",
            "filename": "021213_1.xml",
            "title": "RFI Filter Kit For Rear Mounted CEC Modules",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 530",
                "HT 530"
            ],
            "formnum": "02-12-13",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021212",
            "filename": "021212_1.xml",
            "title": "Oil Pan With Extended Life Corrosion Protection.",
            "tm": [],
            "engfam": [
                "I6 DIESEL ENGINES"
            ],
            "formnum": "02-12-12",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021211",
            "filename": "021211_1.xml",
            "title": "Bellows Exhaust System Feature For All International T 444E Engines",
            "tm": [],
            "engfam": [
                "T 444E",
                "T 444E"
            ],
            "formnum": "02-12-11",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021209",
            "filename": "021209_1.xml",
            "title": "Release of New Fractured Connecting Rod Assembly",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 466E",
                "530E",
                "DT 530",
                "HT 530"
            ],
            "formnum": "02-12-09",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021206",
            "filename": "021206_1.xml",
            "title": "Vocational Lower Water Inlet Tube Available",
            "tm": [
                "4700",
                "4800",
                "4900"
            ],
            "engfam": [],
            "formnum": "02-12-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021205",
            "filename": "021205_1.xml",
            "title": "Radiator Corrosion",
            "tm": [
                "3800",
                "4700",
                "4800",
                "4900"
            ],
            "engfam": [],
            "formnum": "02-12-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021204",
            "filename": "021204_1.xml",
            "title": "Improved Air Solenoid Valve for Engine Fan and Radiator Shutters",
            "tm": [
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "02-12-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021203",
            "filename": "021203_1.xml",
            "title": "Fan Hubs",
            "tm": [
                "3800",
                "4700",
                "4800",
                "4900"
            ],
            "engfam": [],
            "formnum": "02-12-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021202",
            "filename": "021202_1.xml",
            "title": "Selected Green Diesel Procedures and Assemblies",
            "tm": [],
            "engfam": [
                "530E WITH GREEN DIESEL TECHNOLOGY"
            ],
            "formnum": "02-12-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "021201",
            "filename": "021201_1.xml",
            "title": "In Chassis Cleaning Procedure for Vehicle Cooling Package for All International Models Except 3000RE Bus (Note: For 3000RE Model Refer to TSI-98-12-18)",
            "tm": [],
            "engfam": [],
            "formnum": "02-12-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "011216R",
            "filename": "011216r_1.xml",
            "title": "Electronic Variable Response Turbocharger (EVRT)",
            "tm": [],
            "engfam": [
                "HT 530"
            ],
            "formnum": "01-12-16R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "011215",
            "filename": "011215_1.xml",
            "title": "Identifying Remanufactured Engines",
            "tm": [],
            "engfam": [
                "T 444E",
                "7.3L DIT",
                "7.3L IDI",
                "7.3L IDIT",
                "6.9L IDI"
            ],
            "formnum": "01-12-15",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "011214",
            "filename": "011214_1.xml",
            "title": "Thirty Two Inch Fan Blade Shroud Reinforcement For 9900 Models Built Between July 6, 1998 and July 1, 1999 and 9000i Models Built Between July 1, 1999, and August 27, 2001 with Fan Code 12WBN and Shroud Part Number 3528068C1 or 3537871C1",
            "tm": [
                "9000",
                "9000I"
            ],
            "engfam": [],
            "formnum": "01-12-14",
            "startdate": "07/06/1998",
            "enddate": "08/27/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12WBN"
            ]
        },
        {
            "grp": "s12",
            "root": "011213",
            "filename": "011213_1.xml",
            "title": "Improved Shim and Service Kit for Camshaft Position (CMP) Sensor",
            "tm": [],
            "engfam": [
                "DT 466E",
                "DT 466",
                "530E"
            ],
            "formnum": "01-12-13",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "011212",
            "filename": "011212_1.xml",
            "title": "Flywheel Machining Dimensions and Guidelines",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "01 12 12",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "011211",
            "filename": "011211_1.xml",
            "title": "Refilling 4300, 4400 Cooling Systems",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01-12-11",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "011209",
            "filename": "011209_1.xml",
            "title": "New IPR (Injection Pressure Regulator) valve released with a revised spool valve",
            "tm": [],
            "engfam": [
                "DT 466E",
                "DT 466E",
                "DT 466",
                "530E",
                "530E",
                "DT 530",
                "T 444E"
            ],
            "formnum": "01-12-09",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "011208",
            "filename": "011208_1.xml",
            "title": "Oil Level Standards",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E",
                "DT 466 STANDARD AND  APPLICATIONS",
                "DT 530"
            ],
            "formnum": "01-12-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "011207",
            "filename": "011207_1.xml",
            "title": "Lower Thrust Main Bearing",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 466E",
                "DT 466E HT",
                "DT 530",
                "530E",
                "530E HT"
            ],
            "formnum": "01-12-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "011206",
            "filename": "011206_1.xml",
            "title": "Release of Field Replacement Engines for 1994-2001 Model Year T 444E engines",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "01-12-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "011205",
            "filename": "011205_1.xml",
            "title": "Turbocharger Bolt Kit",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "01-12-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "011204",
            "filename": "011204_1.xml",
            "title": "Engine Knock at Low Idle with Split-Shot Injectors",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "01-12-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "011203",
            "filename": "011203_1.xml",
            "title": "Water Pump Update For All International I6 Engines",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 466E",
                "DT 466E",
                "DT 466",
                "530",
                "530E",
                "530E",
                "DT 530"
            ],
            "formnum": "01-12-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "011202",
            "filename": "011202_1.xml",
            "title": "Extension Tube For Road Draft Exhaust Opening",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "01-12-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "011201",
            "filename": "011201_1.xml",
            "title": "HEUI Injectors",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 530",
                "DT 466E",
                "DT 466E",
                "530E",
                "530E"
            ],
            "formnum": "01-12-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "001206R",
            "filename": "001206r_1.xml",
            "title": "New Cylinder Head Bolts And Torque Values For All I6 HUEI Engines",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 530"
            ],
            "formnum": "00-12-06R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "001204",
            "filename": "001204_1.xml",
            "title": "Performance Specifications for Model Year 2000 and 2001 International T 444E Engine Applications",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "00-12-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "001203",
            "filename": "001203_1.xml",
            "title": "T 444E Lower Thrust Main Bearing",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "00-12-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "001202",
            "filename": "001202_1.xml",
            "title": "Model Year 2000 Engine Release",
            "tm": [],
            "engfam": [
                "DT 466E",
                "DT 466E HT",
                "530E",
                "530E HT"
            ],
            "formnum": "00-12-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "001201",
            "filename": "001201_1.xml",
            "title": "Four-post compressor housing for all I6 engine applications",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 466E",
                "DT 466E",
                "DT 466",
                "530",
                "530E",
                "530E",
                "DT 530"
            ],
            "formnum": "00-12-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "991213",
            "filename": "991213_1.xml",
            "title": "Performance Specifications for Model Year 1998 International DT 466E and International 530E engine applications",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "99-12-13",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "991212",
            "filename": "991212_1.xml",
            "title": "Performance Specifications for Model Year 1998 International T 444E Engine Applications",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "99-12-12",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "991211",
            "filename": "991211_1.xml",
            "title": "Performance Specifications for Model Year 1999 International T 444E Engine Applications",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "99-12-11",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "991210",
            "filename": "991210_1.xml",
            "title": "Performance Specifications for Model Year 1999 International DT 466E and International 530 Engine Applications",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530"
            ],
            "formnum": "99-12-10",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "991209",
            "filename": "991209_1.xml",
            "title": "Loose Engine Vertical Air Intake Pipes on 9800 Model Vehicles Built Between March 3, 1996 and December 7, 1998",
            "tm": [
                "9000",
                "9800"
            ],
            "engfam": [],
            "formnum": "99-12-09",
            "startdate": "03/03/1996",
            "enddate": "12/07/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "991208",
            "filename": "991208_1.xml",
            "title": "Coolant Filter Header Assembly",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "DT 466",
                "DT 466E",
                "DT 466E",
                "530",
                "530E",
                "530E"
            ],
            "formnum": "99-12-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "991207",
            "filename": "991207_1.xml",
            "title": "Missing Bolts in \"Barry\" Engine Mounts",
            "tm": [
                "2000",
                "4900",
                "8100"
            ],
            "engfam": [],
            "formnum": "99-12-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "991205",
            "filename": "991205_1.xml",
            "title": "Engine Control Module (ECM) Connector Sealing",
            "tm": [],
            "engfam": [
                "T 444E",
                "DT 466E",
                "530E"
            ],
            "formnum": "99-12-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "991204",
            "filename": "991204_1.xml",
            "title": "Engine Front Cover",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "530",
                "DT 466E",
                "530E"
            ],
            "formnum": "99-12-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "991203",
            "filename": "991203_1.xml",
            "title": "No TSI was released using this number",
            "tm": [],
            "engfam": [],
            "formnum": "99-12-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "991202R",
            "filename": "991202r_1.xml",
            "title": "Texaco Extended Life Engine Coolant (TELC), Providing -40°F/-40°C Protection, is Standard in All International Models with International, Caterpillar and Detroit Diesel Engines",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "5000I",
                "8000",
                "9000",
                "9000I"
            ],
            "engfam": [],
            "formnum": "99-12-02R",
            "startdate": "01/04/1999",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "991201",
            "filename": "991201_1.xml",
            "title": "Release of a Low Inertia Flexplate Assembly",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "99-12-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981219",
            "filename": "981219_1.xml",
            "title": "1999 Model Year Feature and Component Changes for the International DT 466E and 530E Electronically Controlled Engines Effective With Engine Serial Number 1134351",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "98-12-19",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981218",
            "filename": "981218_1.xml",
            "title": "In Chassis Cleaning Procedure for Vehicle Cooling Package",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "98-12-18",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981217",
            "filename": "981217_1.xml",
            "title": "No TSI was released using this number",
            "tm": [],
            "engfam": [],
            "formnum": "98-12-17",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981216",
            "filename": "981216_1.xml",
            "title": "No TSI was released using this number",
            "tm": [],
            "engfam": [],
            "formnum": "98-12-16",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981215",
            "filename": "981215_1.xml",
            "title": "The Diamond Logic Engine Control Module (ECM) control software calibration may cause an engine surge when the engine is operated under a light load or in the 1000 - 1300 rpm range or both.",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "98-12-15",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981214",
            "filename": "981214_1.xml",
            "title": "Cummins N-14 Engine with Poly-V Fan Belt Run Off",
            "tm": [
                "9000",
                "9100",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "98-12-14",
            "startdate": "08/01/1996",
            "enddate": "",
            "vendor": "CUMMINS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981213",
            "filename": "981213_1.xml",
            "title": "Poor high altitude cold starting of the DT 466E and International 530E diesel engines equipped with the new Diamond Logic Engine Control Module (ECM).",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "98-12-13",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981212",
            "filename": "981212_1.xml",
            "title": "Intake Valve Stem Chrome Plating For the International DT 408, DT 466/DT 466E and 530/530E Engines",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "DT 466E",
                "530",
                "530E"
            ],
            "formnum": "98-12-12",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981211",
            "filename": "981211_1.xml",
            "title": "Release of 24 Volt International Diamond Logic Electronic Control Module",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "98-12-11",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981210",
            "filename": "981210_1.xml",
            "title": "Assembling Two Piece (Articulated) Piston Used On the International 530 and 530E Engines Rated @ 300 HP and Above",
            "tm": [],
            "engfam": [
                "530",
                "530E"
            ],
            "formnum": "98-12-10",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981209",
            "filename": "981209_1.xml",
            "title": "New Engine Control Module (ECM) in Service Parts for the International DT 466E and 530E Engines with ECM 3-Box System Mounted on Cab Cowl",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "98-12-09",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981208",
            "filename": "981208_1.xml",
            "title": "Releasing new cylinder head oil rail end plug.",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "98-12-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981207",
            "filename": "981207_1.xml",
            "title": "Radio Frequency Interference Service Kit",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "98-12-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981206",
            "filename": "981206_1.xml",
            "title": "Releasing New Skeleton and Stripped Service Engines for 1998 Model Year",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "98-12-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981205",
            "filename": "981205_1.xml",
            "title": "2. 1998 Model Year Component Changes for the International T 444E Engine",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "98-12-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981204",
            "filename": "981204_1.xml",
            "title": "Crankshaft/Flywheel Alignment Dowel Pin.",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "98-12-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981203",
            "filename": "981203_1.xml",
            "title": "Engine Wire Dress Cover Service Kits",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E",
                "T 444E"
            ],
            "formnum": "98-12-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981202",
            "filename": "981202_1.xml",
            "title": "Releasing new and revised components for the flywheel housing used on all T 444E Diesel Engines.",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "98-12-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "981201",
            "filename": "981201_1.xml",
            "title": "Release of 88° C (190° F) Coolant Thermostat",
            "tm": [],
            "engfam": [
                "DT 466",
                "530",
                "DT 466E",
                "530E"
            ],
            "formnum": "98-12-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971227",
            "filename": "971227_1.xml",
            "title": "1998 Model Year (January 1) Feature and Component Changes For The International DT 466E and 530E Electronically Controlled Engines",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "97-12-27",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971226",
            "filename": "971226_1.xml",
            "title": "Navistar's New Engine Control Module For All International Electronically Controlled Engines Built October, 1997 and Later (T 444E Engine Serial Number 634234 and Above) (DT 466E and 530E Engine Serial Number 1075289 and Above)",
            "tm": [],
            "engfam": [
                "T 444E",
                "DT 466E",
                "530E"
            ],
            "formnum": "97-12-26",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971225",
            "filename": "971225_1.xml",
            "title": "Oil Pan Heater Availability",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 466E",
                "530",
                "530E"
            ],
            "formnum": "97-12-25",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971224",
            "filename": "971224_1.xml",
            "title": "Release New Crankshaft and Crankcase on International T 444E Engines",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "97-12-24",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971223",
            "filename": "971223_1.xml",
            "title": "UVC Harness Injector Connector Seal Was Eliminated On The International T 444E, DT 466E and 530E Engines",
            "tm": [],
            "engfam": [
                "T 444E",
                "DT 466E",
                "530E"
            ],
            "formnum": "97-12-23",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971221",
            "filename": "971221_1.xml",
            "title": "High Altitude Glow Plug Deactivation on International T 444E Engines",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "97-12-21",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971220R",
            "filename": "971220r_1.xml",
            "title": "Glow Plug Relay Service Package",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "97-12-20R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971219",
            "filename": "971219_1.xml",
            "title": "International T 444E Engine Cylinder Head Gasket Replacement",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "97-12-19",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971217",
            "filename": "971217_1.xml",
            "title": "Camshaft Position (CMP) Transducer Usage on International T 444E Engines",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "97-12-17",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971216",
            "filename": "971216_1.xml",
            "title": "Loss of Power and Engine Knock on International T 444E Engines Built January, 1997 and Later With Split Shot Fuel Injectors",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "97-12-16",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971215",
            "filename": "971215_1.xml",
            "title": "Fuel Injector Seal/Ring Revised For The International DT 466E and 530E Engines",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "97-12-15",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971214R",
            "filename": "971214r_1.xml",
            "title": "Replaced Identification Marking for the Inner and Outer Gerotor Gears",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "97-12-14R1",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971213",
            "filename": "971213_1.xml",
            "title": "Revision to the special torque value for the main bearing cap mounting bolts.",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "DT 466E",
                "530",
                "530E"
            ],
            "formnum": "97-12-13",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971212R",
            "filename": "971212r_1.xml",
            "title": "Release of 1996 (Effective with Engine Serial Number 375549) and 1997 (Effective with Engine Serial Number 460195) Model Year Component Changes for the T 444E Engine.",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "97-12-12R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971211R",
            "filename": "971211r_1.xml",
            "title": "Supplemental Cooling Additive (SCA) Factory Fill and Maintenance Level of Concentration for International Engines",
            "tm": [],
            "engfam": [
                "T 444E",
                "DT 466",
                "530"
            ],
            "formnum": "97-12-11R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971210",
            "filename": "971210_1.xml",
            "title": "Accelerator Cable Over-Travel Device Replacement",
            "tm": [
                "2000",
                "3000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "97-12-10",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971209",
            "filename": "971209_1.xml",
            "title": "Split Shot Injectors are also Compatible With JP8 Jet Fuel",
            "tm": [],
            "engfam": [
                "T 444E",
                "DT 466E"
            ],
            "formnum": "97-12-09",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971208",
            "filename": "971208_1.xml",
            "title": "Performance Specifications for 1996 and 1997 Model Year DT 466 and the International 530 Mechanical Type Engines Equipped with Injection Pump",
            "tm": [],
            "engfam": [
                "DT 466",
                "530"
            ],
            "formnum": "97-12-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971207R",
            "filename": "971207r_1.xml",
            "title": "Performance Specifications for 1996 and 1997 Model Year DT 466E and the International 530E Engine Applications",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "97-12-07R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971206",
            "filename": "971206_1.xml",
            "title": "Performance Specifications for 1997 Model Year T 444E Engine Applications",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "97-12-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971205",
            "filename": "971205_1.xml",
            "title": "Replacement of Vibration Damper",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 466E",
                "530",
                "530E"
            ],
            "formnum": "97-12-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971204",
            "filename": "971204_1.xml",
            "title": "Revision to specified Special Torque Values for the DT 466E and International 530E Service Manual, EGES 160-1.",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "97-12-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971202",
            "filename": "971202_1.xml",
            "title": "Replace Dow Corning With Wacker RTV Sealant For International T 444E, 530 And DT 466/466E Engines",
            "tm": [],
            "engfam": [
                "T 444E",
                "530",
                "DT 466",
                "DT 466E"
            ],
            "formnum": "97-12-02",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "WACKER",
                "DOW CORNING"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "971201",
            "filename": "971201_1.xml",
            "title": "Cold Starting And Warm Up Aid Kit For DT 408/466 and the International 530 Engines  Equipped W/Model P-3000 or 7100 Fuel Injection Pump",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "530"
            ],
            "formnum": "97-12-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961231",
            "filename": "961231_1.xml",
            "title": "Release of a Common Injection Pump Oil Supply Line",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 466E",
                "530",
                "530E"
            ],
            "formnum": "96-12-31",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961230",
            "filename": "961230_1.xml",
            "title": "Cold Ambient Protection (CAP) System For Warm-Up and Maintaining Engine Heat Under Cold Ambient Conditions For International T 444E, DT 466E and 530E Engines",
            "tm": [],
            "engfam": [
                "T 444E",
                "DT 466E",
                "530E"
            ],
            "formnum": "96-12-30",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961229",
            "filename": "961229_1.xml",
            "title": "Cold Weather Operation of International Engines",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "5000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "96-12-29",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961228",
            "filename": "961228_1.xml",
            "title": "Revision to the Special Torque Value For the Oil Pan Mounting Bolts Found on the DT 408, DT 466 and International 530 Diesel Engines",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "530"
            ],
            "formnum": "96-12-28",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961227",
            "filename": "961227_1.xml",
            "title": "Announcing Latest Field Service Components For T 444E Engines Model Years 1994-1996",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "96-12-27",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961226",
            "filename": "961226_1.xml",
            "title": "Rear Sump Lube Oil Pick-up Tube Bracket",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "DT 466E",
                "530",
                "530E"
            ],
            "formnum": "96-12-26",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961225",
            "filename": "961225_1.xml",
            "title": "Charge Air Cooler Leak Testing",
            "tm": [],
            "engfam": [],
            "formnum": "96-12-25",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961224",
            "filename": "961224_1.xml",
            "title": "Incorrect Diagnostic Fault Codes",
            "tm": [],
            "engfam": [],
            "formnum": "96-12-24",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961223",
            "filename": "961223_1.xml",
            "title": "Belt Tension for \"V\" and Ribbed Poly \"V\" Belts",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400",
                "9800"
            ],
            "engfam": [],
            "formnum": "96-12-23",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961222RB",
            "filename": "961222rb_1.xml",
            "title": "Rapid Acceleration Flutter Or Stumble, With Warmed Up Engine And No Load Condition",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "96-12-22",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961221",
            "filename": "961221_1.xml",
            "title": "New Front Cover (Rear Half) With New Seal For DT 466E and International 530E Diesel Engines",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "96-12-21",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961220",
            "filename": "961220_1.xml",
            "title": "No TSI was released using this number",
            "tm": [],
            "engfam": [],
            "formnum": "96-12-20",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961219",
            "filename": "961219_1.xml",
            "title": "Performance Specifications for 1994, 1995 and 1996 T 444E Engine Applications",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "96-12-19",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961218",
            "filename": "961218_1.xml",
            "title": "Revision To Special Torque Value For Fuel Injector Hold Down Clamp Mounting Bolt",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "96-12-18",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961216",
            "filename": "961216_1.xml",
            "title": "Releasing New Service Engines, Updated Crankcase Gasket, Front Cover Gasket Service Packages and an Updated Skeleton and Stripped Service Engine",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "96-12-16",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961215",
            "filename": "961215_1.xml",
            "title": "Installing an Electronic Hand Throttle on HEUI Engines",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "96-12-15",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961214",
            "filename": "961214_1.xml",
            "title": "Instructions to Install a T 444E Engine Exhaust Back Pressure Device",
            "tm": [
                "1000",
                "3000",
                "4000"
            ],
            "engfam": [
                "T 444E"
            ],
            "formnum": "96-12-14",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961213",
            "filename": "961213_1.xml",
            "title": "Replace 12 Point Valve Lever Mounting Bolts with New Standard Hex Head Flanged Mounting Bolts",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "96-12-13",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961212",
            "filename": "961212_1.xml",
            "title": "Revision to the Special Torque Values for the Oil Pick-Up Tube Mounting Bolts Found on the DT 408, DT 466 and International 530 Diesel Engines and the DT 466E and International 530E Diesel Engines",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "DT 466E",
                "530",
                "530E"
            ],
            "formnum": "96-12-12",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961211",
            "filename": "961211_1.xml",
            "title": "Announcing \"Exhaust Brake Ready\" Engines For DT 466/DT 466E and the International  530/530E Electronically Controlled, and Mechanical Type W/Model P Injection Pump Engines",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 466E",
                "530",
                "530E"
            ],
            "formnum": "96-12-11",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961210",
            "filename": "961210_1.xml",
            "title": "Removal and Installation of Molded Glass-Filled Tanks on Modine Radiators",
            "tm": [],
            "engfam": [],
            "formnum": "96-12-10",
            "startdate": "",
            "enddate": "",
            "vendor": "MODINE",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961209",
            "filename": "961209_1.xml",
            "title": "Air Conditioning Belt Tensioner",
            "tm": [
                "8000",
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "96-12-09",
            "startdate": "",
            "enddate": "11/01/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961208",
            "filename": "961208_1.xml",
            "title": "New Oil Pan Drain Plug and O-Ring For DT-408, DT 466, DT 466E, International 530 and International 530E Diesel Engines",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "DT 466E",
                "530",
                "530E"
            ],
            "formnum": "96-12-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961207",
            "filename": "961207_1.xml",
            "title": "Release Of New Component Changes For The T 444E Engine Effective With Various Engine Serial Numbers",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "96-12-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961206",
            "filename": "961206_1.xml",
            "title": "Revision to the Specifications of the CMP Sensor clearance when the crankshaft is rotated in a clockwise and counterclockwise direction.",
            "tm": [],
            "engfam": [],
            "formnum": "96-12-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961205",
            "filename": "961205_1.xml",
            "title": "Replace the Front Cover (Front Half) For the DT 466E and International 530E Diesel Engines",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "96-12-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961204",
            "filename": "961204_1.xml",
            "title": "DT 408/466 and the International 530 Engines Fuel Supply (Transfer) Pump",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "530"
            ],
            "formnum": "96-12-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961203",
            "filename": "961203_1.xml",
            "title": "Release Of New Piston Cooling Tube Assembly For T 444E Engines",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "96-12-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961202",
            "filename": "961202_1.xml",
            "title": "DT 408/466 and the International 530 Engine Ring Gear For Use With Allison Transmission Models MT-654CR, MD 3000 & HdD 4000",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "530"
            ],
            "formnum": "96-12-02",
            "startdate": "",
            "enddate": "",
            "vendor": "ALLISON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "961201",
            "filename": "961201_1.xml",
            "title": "Revision to the Special Torque Value for the Main Bearing Mounting Bolt for DT 408, DT 466, DT 466E, International 530 and International 530E Diesel Engines",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "DT 466E",
                "530",
                "530E"
            ],
            "formnum": "96-12-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951218R",
            "filename": "951218r_1.xml",
            "title": "Release 1993/1994/1995 Model Year \"Engine Data\" And \"Fuel Injection Pump Calibration Data\" For Service To DT-408/466 And The International 530 Diesel Engines",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "530"
            ],
            "formnum": "95-12-18R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951217",
            "filename": "951217_1.xml",
            "title": "Exhaust Manifold Failures",
            "tm": [],
            "engfam": [],
            "formnum": "95-12-17",
            "startdate": "",
            "enddate": "",
            "vendor": "CUMMINS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951216",
            "filename": "951216_1.xml",
            "title": "Revision to the Special Torque Values for the High Pressure Pump Mounting Bolts Found on the T 444E Diesel Engine and the High Pressure Pump Mounting Bolts, Injection Control Pressure Valve and Injection Control Pressure Valve Tinnermann Nut Found on the DT 466E and International 530E Diesel Engines",
            "tm": [],
            "engfam": [
                "DT 466E",
                "530E"
            ],
            "formnum": "95-12-16",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951215",
            "filename": "951215_1.xml",
            "title": "Starting and Warm-Up Instructions For Vehicles Equipped With DT 408/466 and the International 530 Engines With Model \"P 3000/7100\" Injection Pumps",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "530"
            ],
            "formnum": "95-12-15",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951214R",
            "filename": "951214r_1.xml",
            "title": "Retrofit From Aluminum To Cast Iron Water Pump (Eng. Serial Nos. Below 58559)",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "95-12-14R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951213",
            "filename": "951213_1.xml",
            "title": "Charge Air Cooler Mounting Brackets",
            "tm": [
                "2000",
                "5000",
                "8000",
                "9000",
                "9400"
            ],
            "engfam": [],
            "formnum": "95-12-13",
            "startdate": "07/01/1993",
            "enddate": "12/01/1993",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951212",
            "filename": "951212_1.xml",
            "title": "Cylinder Head Bolt Torque Values And Instructions For T 444E Engine",
            "tm": [],
            "engfam": [
                "T 444E"
            ],
            "formnum": "95-12-12",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951211",
            "filename": "951211_1.xml",
            "title": "Correction to Lubrication Oil Pressure Specifications On DT 408, DT 466 and International 530 Diesel Engines",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "530"
            ],
            "formnum": "95-12-11",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951210",
            "filename": "951210_1.xml",
            "title": "Allison Transmission Modulator Cable Slide Lever and Adjustment",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "95-12-10",
            "startdate": "12/01/1993",
            "enddate": "04/01/1994",
            "vendor": "ALLISON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951209",
            "filename": "951209_1.xml",
            "title": "Replacing The Flywheel Mounting Bolts For All Manual Transmission Applications",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "DT 466E",
                "530"
            ],
            "formnum": "95-12-09",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951208",
            "filename": "951208_1.xml",
            "title": "Release Performance Data Guidelines For 1994/1995 International 530 Diesel Engines",
            "tm": [],
            "engfam": [
                "530"
            ],
            "formnum": "95-12-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951207",
            "filename": "951207_1.xml",
            "title": "Accelerator Pedal Angle Change",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "95-12-07",
            "startdate": "12/01/1993",
            "enddate": "02/27/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951206",
            "filename": "951206_1.xml",
            "title": "Service Manual Correction For  Proper Cylinder Sleeve Installation Procedure",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "530"
            ],
            "formnum": "95-12-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951205",
            "filename": "951205_1.xml",
            "title": "Deaeration Tank Replacement",
            "tm": [
                "3000",
                "4000"
            ],
            "engfam": [],
            "formnum": "95-12-05",
            "startdate": "",
            "enddate": "05/01/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951204",
            "filename": "951204_1.xml",
            "title": "Service Procedure Changes For Model GT 40 Turbochargers Used On All DT 408/466 and the International 530 Engines",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "530"
            ],
            "formnum": "95-12-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951202",
            "filename": "951202_1.xml",
            "title": "Air Cleaner Air Intake Duct to Air Cleaner Housing Modification",
            "tm": [
                "2000"
            ],
            "engfam": [],
            "formnum": "95-12-02",
            "startdate": "09/01/1993",
            "enddate": "08/31/1994",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "951201",
            "filename": "951201_1.xml",
            "title": "Engine Fan Continuously Runs",
            "tm": [],
            "engfam": [],
            "formnum": "95-12-01",
            "startdate": "",
            "enddate": "",
            "vendor": "HORTON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "941213",
            "filename": "941213_1.xml",
            "title": "New Style Radiator Fill Tube",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "94-12-13",
            "startdate": "01/01/1994",
            "enddate": "07/12/1994",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "941211",
            "filename": "941211_1.xml",
            "title": "Upper Idler Gear Bolt Torque For DT 408, DT 466 and the International 530 Engines",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "530"
            ],
            "formnum": "94-12-11",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "941207",
            "filename": "941207_1.xml",
            "title": "Maintenance and Replacement Information For V-Ribbed Belts (Dayco Poly Rib)",
            "tm": [],
            "engfam": [],
            "formnum": "94-12-07",
            "startdate": "",
            "enddate": "",
            "vendor": "DAYCO",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "941205",
            "filename": "941205_1.xml",
            "title": "Method to Clean Oil From A Chassis Mounted Charge Air Coolant",
            "tm": [],
            "engfam": [],
            "formnum": "94-12-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "941204",
            "filename": "941204_1.xml",
            "title": "Procedure for Servicing the Road Draft Tube Baffle/Valve Cover on DT 408, DT 466 and International 530",
            "tm": [],
            "engfam": [
                "DT 408",
                "DT 466",
                "530"
            ],
            "formnum": "94-12-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "941202R",
            "filename": "941202r_1.xml",
            "title": "Air Conditioning Compressor Belt Flip Off",
            "tm": [
                "9000",
                "9400"
            ],
            "engfam": [],
            "formnum": "94-12-02R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "941201",
            "filename": "941201_1.xml",
            "title": "Supplemental Coolant Additives (SCA'S)",
            "tm": [],
            "engfam": [],
            "formnum": "94-12-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "931210",
            "filename": "931210_1.xml",
            "title": "Horton Fan Clutch Noise",
            "tm": [],
            "engfam": [],
            "formnum": "93-12-10",
            "startdate": "",
            "enddate": "",
            "vendor": "HORTON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "931209",
            "filename": "931209_1.xml",
            "title": "Horton Fan Clutch \"System Saver\"",
            "tm": [],
            "engfam": [],
            "formnum": "93-12-09",
            "startdate": "",
            "enddate": "",
            "vendor": "HORTON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "931208",
            "filename": "931208_1.xml",
            "title": "Modification of Accelerator Rod At The Modulator Cable Position",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "93-12-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "931207",
            "filename": "931207_1.xml",
            "title": "Replacing a Garrett Charge Air Cooler with a Modine Charge Air Cooler",
            "tm": [
                "2000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9400",
                "5000"
            ],
            "engfam": [],
            "formnum": "93-12-07",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "GARRETT",
                "MODINE"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "931202",
            "filename": "931202_1.xml",
            "title": "The Use of Propylene Glycol Antifreeze",
            "tm": [],
            "engfam": [],
            "formnum": "93-12-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "921217",
            "filename": "921217_1.xml",
            "title": "Injection Pump Electric Shut-Off Service Package Revisions for DT/DTI/DTA-466 and DT/DTA-360 Engines",
            "tm": [],
            "engfam": [
                "DT 466",
                "DTI 466",
                "DTA 466",
                "DT 360",
                "DTA 360"
            ],
            "formnum": "92-12-17",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "921216",
            "filename": "921216_1.xml",
            "title": "Revised 7.3L Final Fuel Filter/Water Separator Assembly",
            "tm": [
                "4000"
            ],
            "engfam": [
                "7.3L"
            ],
            "formnum": "92-12-16",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "921213",
            "filename": "921213_1.xml",
            "title": "New Fan Drives To Accommodate \"SPIN-ON\" Type Fan Drive Clutches For All DT/DTA-360 and DT/DTA-466 Diesel Engines",
            "tm": [],
            "engfam": [
                "DT 360",
                "DTA 360",
                "DT 466",
                "DTA 466"
            ],
            "formnum": "92-12-13",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "921212",
            "filename": "921212_1.xml",
            "title": "Injection Nozzle Change For 1992 Model Year DTA-466 (E270F) 270 HP Engine Applications",
            "tm": [],
            "engfam": [
                "DTA 466"
            ],
            "formnum": "92-12-12",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "921211",
            "filename": "921211_1.xml",
            "title": "Release of Segmented Oil Pan Gaskets for DT/DTA-360 and DT/DTA-466 Diesel Engines.",
            "tm": [],
            "engfam": [
                "DT 360",
                "DTA 360",
                "DT 466",
                "DTA 466"
            ],
            "formnum": "92-12-11",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "921210",
            "filename": "921210_1.xml",
            "title": "Release of 1992-1993 Model Year 7.3 Liter Diesel Engines",
            "tm": [],
            "engfam": [
                "7.3 LITER"
            ],
            "formnum": "92-12-10",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "921207",
            "filename": "921207_1.xml",
            "title": "Release Separate Service Flywheels For Use On 360 and 466 Diesel Engines",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 360"
            ],
            "formnum": "92-12-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "921206",
            "filename": "921206_1.xml",
            "title": "Release 1992 Service Turbocharger Application Guide For All DT/DTA360 and 466 Engines",
            "tm": [],
            "engfam": [
                "DT 466",
                "DT 360",
                "DTA 360"
            ],
            "formnum": "92-12-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "921205",
            "filename": "921205_1.xml",
            "title": "Inspection Procedure For Verification Of Oil Or Coolant Leakage From Cylinder Head Gasket (7.3L Diesel Engine)",
            "tm": [],
            "engfam": [
                "7.3L DIESEL ENGINE"
            ],
            "formnum": "92-12-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "921202",
            "filename": "921202_1.xml",
            "title": "Release of 1992 Model Year DT/DTA-466 Diesel Engines, Starting Serial Numbers: DT/DTA-446 642456* and Above, Also 642420, 642449 and 642451",
            "tm": [],
            "engfam": [
                "DT 466",
                "DTA 466",
                "DTA 360"
            ],
            "formnum": "92-12-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "921201",
            "filename": "921201_1.xml",
            "title": "Consolidate Service Cylinder Head Assemblies For All DT/DTA-360 engines and for DT/DTA/DTI-466 Diesel Engines With Engine Serial Numbers Above 75000",
            "tm": [],
            "engfam": [
                "DT 466",
                "DTI 466",
                "DTA 466",
                "DT 360",
                "DTA 360"
            ],
            "formnum": "92-12-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "911207R",
            "filename": "911207r_1.xml",
            "title": "1991 Model Year Component Identification and Service Parts Listing For DT/DTA-466 Diesel Engines",
            "tm": [],
            "engfam": [
                "DT 466",
                "DTA 466"
            ],
            "formnum": "91-12-07R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s12",
            "root": "911201",
            "filename": "911201_1.xml",
            "title": "Engine Idle Shutdown Feature On Electronic Engines",
            "tm": [],
            "engfam": [],
            "formnum": "91-12-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "081301",
            "filename": "081301_1.xml",
            "title": "Manual Shift Lever Jumps Out of Gear",
            "tm": [
                "7600",
                "7700",
                "8600"
            ],
            "engfam": [],
            "formnum": "08-13-01",
            "startdate": "01/01/2002",
            "enddate": "02/01/2008",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "071301",
            "filename": "071301_1.xml",
            "title": "Allison Transmission Fluid Specification Changes",
            "tm": [],
            "engfam": [],
            "formnum": "07-13-01",
            "startdate": "",
            "enddate": "",
            "vendor": "ALLISON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "061303",
            "filename": "061303_1.xml",
            "title": "New Synthetic Oil for Eaton and Spicer Transmissions, Starting 04/01/2006",
            "tm": [],
            "engfam": [],
            "formnum": "06-13-03",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "EATON",
                "SPICER"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "061302",
            "filename": "061302_1.xml",
            "title": "Guidelines to Ensure Satisfactory Performance of Meritor Transfer Case Models MTC-4208, MTC-4210, MTC-4213 in Certain International 7000 HPV Models",
            "tm": [
                "7300",
                "7400",
                "7500",
                "7600",
                "7700"
            ],
            "engfam": [],
            "formnum": "06-13-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13TKA",
                "13TKB",
                "13TKC"
            ]
        },
        {
            "grp": "s13",
            "root": "061301",
            "filename": "061301_1.xml",
            "title": "Allison WT Transmission Control Module Relocation",
            "tm": [
                "4300",
                "4400",
                "7400",
                "7500"
            ],
            "engfam": [],
            "formnum": "06-13-01R",
            "startdate": "11/01/2000",
            "enddate": "",
            "vendor": "ALLISON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "051303",
            "filename": "051303_1.xml",
            "title": "Allison WT Transmission Control Module Relocation",
            "tm": [
                "7600",
                "8600"
            ],
            "engfam": [],
            "formnum": "05-13-03",
            "startdate": "11/01/2001",
            "enddate": "",
            "vendor": "ALLISON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "051301",
            "filename": "051301_1.xml",
            "title": "Minimal Lever Engagement or Jump Out on Eaton 8LL or 9LL Transmissions",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "05-13-01",
            "startdate": "09/01/2004",
            "enddate": "04/01/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GHX",
                "13GHV",
                "13GJR",
                "13GMY",
                "13GMZ",
                "13GNA"
            ]
        },
        {
            "grp": "s13",
            "root": "041306",
            "filename": "041306_1.xml",
            "title": "Product Upgrades for Fuller 13 and 18 Speed Transmissions",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "04-13-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GJS, 13GKK, 13GKJ, 13GKL, 13GKM, 13GMU, 13GMV, 13GNM, 13GRD, 13GRE"
            ]
        },
        {
            "grp": "s13",
            "root": "041305",
            "filename": "041305_1.xml",
            "title": "Loose Output Nuts on Low Mileage Eaton Fuller Heavy Duty Transmissions Built Between June 1, 2003 and April 1, 2004",
            "tm": [
                "4400",
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-13-05",
            "startdate": "06/01/2003",
            "enddate": "04/01/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "041304",
            "filename": "041304_1.xml",
            "title": "Eaton Fuller FR Series Transmission Shift Shaft Revision for Transmissions Built After August, 2000",
            "tm": [
                "4400",
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-13-04",
            "startdate": "09/01/2000",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "041303",
            "filename": "041303_1.xml",
            "title": "New Fault Code 93 for Eaton AutoShift Transmission with System Controller Version 800, 801, or Greater",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-13-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GMV",
                "13GNR",
                "13GNT",
                "13GNU",
                "13GNV",
                "13GNW"
            ]
        },
        {
            "grp": "s13",
            "root": "041302",
            "filename": "041302_1.xml",
            "title": "New Fault Code 92 for Eaton AutoShift Transmission with System Controller Version 800, 801, or Greater",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-13-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GMV",
                "13GNR",
                "13GNT",
                "13GNU",
                "13GNV",
                "13GNW"
            ]
        },
        {
            "grp": "s13",
            "root": "041301",
            "filename": "041301_1.xml",
            "title": "Addition of Fault Code 91 and Revised Electrical Pretest for Eaton AutoShift Transmissions",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-13-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GNT",
                "13GNU",
                "13GNV",
                "13GNW"
            ]
        },
        {
            "grp": "s13",
            "root": "031306",
            "filename": "031306_1.xml",
            "title": "Eaton AutoShift 18 Speed Transmission Splitter Clutch Identification Effective October 1, 2003",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "03-13-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GMV"
            ]
        },
        {
            "grp": "s13",
            "root": "031305",
            "filename": "031305_1.xml",
            "title": "Eaton Twin Countershaft Transmission Failures Caused by Incorrect Installation of Auxiliary Section",
            "tm": [
                "4200",
                "4300",
                "4400",
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "03-13-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "031304",
            "filename": "031304_1.xml",
            "title": "Eaton Lightning Series Transmission, Codes 13GPB, 13GPC, 13GPD, 13GML, 13GMM, AND 13GMN, Clutch Access Cover Installation",
            "tm": [
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "03-13-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GPB",
                "13GPC",
                "13GPD",
                "13GML",
                "13GMM",
                "13GMN"
            ]
        },
        {
            "grp": "s13",
            "root": "031302",
            "filename": "031302_1.xml",
            "title": "Oil Leakage From Breather On Eaton AutoShift2, 10 and 18 Speed Transmissions",
            "tm": [
                "5000",
                "7000",
                "8100",
                "8200",
                "8300",
                "9000"
            ],
            "engfam": [],
            "formnum": "03-13-02",
            "startdate": "",
            "enddate": "06/01/2002",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13GMT",
                "13GMU",
                "13GMV",
                "13GMW",
                "13GNR",
                "13GNT",
                "13GNU",
                "13GNV",
                "13GNW"
            ]
        },
        {
            "grp": "s13",
            "root": "031301R",
            "filename": "031301r_1.xml",
            "title": "Oil Change Intervals For Eaton Transmissions and Dana Spicer Drive Axles Using Roadranger E250 and E500 Extended Drain Lubricants",
            "tm": [],
            "engfam": [],
            "formnum": "03-13-01R",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "021304R",
            "filename": "021304r_1.xml",
            "title": "Transmission Control Wire Harness Routing Revision with Meritor \"G\" Series Transmissions in 2000, 8000, and 9000 Models Built Between April 1, 2000 and May 31, 2002",
            "tm": [
                "2000",
                "8000",
                "9000"
            ],
            "engfam": [],
            "formnum": "02-13-04R",
            "startdate": "04/01/2000",
            "enddate": "05/31/2002",
            "vendor": "MERITOR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "021303",
            "filename": "021303_1.xml",
            "title": "Detroit Diesel Optimized Idle System Faulting Out when used with Eaton Fuller Lightning Transmission Models FRLO/F-xx410C/T2",
            "tm": [],
            "engfam": [],
            "formnum": "02-13-03",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "DETROIT DIESEL",
                "EATON FULLER"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "021302",
            "filename": "021302_1.xml",
            "title": "Eaton  Fuller  Transmission- Implementation of Helix Output Shaft For RT / FR / FRLO-1X210, 1X913, 1X410, and 2X918 Transmissions",
            "tm": [],
            "engfam": [],
            "formnum": "02-13-02",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "021301",
            "filename": "021301_1.xml",
            "title": "Eaton  Fuller  Transmission- Heavy Duty Synchronizer Improvements",
            "tm": [],
            "engfam": [],
            "formnum": "02-13-01",
            "startdate": "",
            "enddate": "",
            "vendor": "EATON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "011301",
            "filename": "011301_1.xml",
            "title": "Improved Neutral Start Backup (NSBU) Switch",
            "tm": [
                "1000",
                "3000",
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01-13-01",
            "startdate": "10/24/2000",
            "enddate": "10/29/2001",
            "vendor": "ALLISON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "13ACP",
                "13ACS",
                "13ACW",
                "13ACY"
            ]
        },
        {
            "grp": "s13",
            "root": "001302",
            "filename": "001302_1.xml",
            "title": "Spicer Model ES52-7 and ESO65-7 Transmissions Coming Out of Gear in 6/7 Gear Position",
            "tm": [],
            "engfam": [],
            "formnum": "00-13-02",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "991301",
            "filename": "991301_1.xml",
            "title": "Installation Procedure for Unitized Output Shaft Seals in Meritor Transmissions",
            "tm": [],
            "engfam": [],
            "formnum": "99-13-01",
            "startdate": "",
            "enddate": "",
            "vendor": "MERITOR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "981301",
            "filename": "981301_1.xml",
            "title": "Automatic Transmission Shift Cable Boot/Seal Retrofit",
            "tm": [],
            "engfam": [],
            "formnum": "98-13-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "971302",
            "filename": "971302_1.xml",
            "title": "Back Tapered Clutching Teeth in Spicer Synchronized Transmissions",
            "tm": [],
            "engfam": [],
            "formnum": "97-13-02",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "971301",
            "filename": "971301_1.xml",
            "title": "Shift Knob Toggle Replacement",
            "tm": [],
            "engfam": [],
            "formnum": "97-13-01",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "961301",
            "filename": "961301_1.xml",
            "title": "Bearing Design Change for Spicer 7-Speed Synchronized Transmission",
            "tm": [],
            "engfam": [],
            "formnum": "96-13-01",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "951305",
            "filename": "951305_1.xml",
            "title": "Shuttle Shifting",
            "tm": [
                "1000",
                "4000"
            ],
            "engfam": [],
            "formnum": "95-13-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "951304",
            "filename": "951304_1.xml",
            "title": "Spicer and Navistar 9 and 10 Speed Transmission Overdrive Shift Fork Bracket Pin Manufacturing Change",
            "tm": [],
            "engfam": [],
            "formnum": "95-13-04",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "951302",
            "filename": "951302_1.xml",
            "title": "Spicer Range Shift Fork and Piston Rod Assembly Improvement",
            "tm": [],
            "engfam": [],
            "formnum": "95-13-02",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "951301",
            "filename": "951301_1.xml",
            "title": "Spicer Production and Service Transmission Input Shaft 10 Tooth Spline Manufacturing Design Change",
            "tm": [],
            "engfam": [],
            "formnum": "95-13-01",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "931308",
            "filename": "931308_1.xml",
            "title": "Allison Automatic Transmission Operation With Viscous Fan Drive",
            "tm": [],
            "engfam": [],
            "formnum": "93-13-08",
            "startdate": "",
            "enddate": "",
            "vendor": "ALLISON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "931307",
            "filename": "931307_1.xml",
            "title": "International 9-Speed Mainshaft Service",
            "tm": [],
            "engfam": [],
            "formnum": "93-13-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "931306",
            "filename": "931306_1.xml",
            "title": "2nd and 3rd Shift Fork and Synchronizer Improvements on Spicer 4054A, 4054D, ES42-5A and ES42-5D Transmissions",
            "tm": [],
            "engfam": [],
            "formnum": "93-13-06",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "921304",
            "filename": "921304_1.xml",
            "title": "New Dipstick For Allison Automatic Transmissions",
            "tm": [
                "1000",
                "2000",
                "3000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "92-13-04",
            "startdate": "",
            "enddate": "",
            "vendor": "ALLISON",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s13",
            "root": "921302",
            "filename": "921302_1.xml",
            "title": "No TSI was released using this number",
            "tm": [],
            "engfam": [],
            "formnum": "92-13-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "071401",
            "filename": "071401_1.xml",
            "title": "New Rear Axle Shaft Flange Mounting Hardware for 1000, BE, CE, FE, RE Bus, 4000 HPV, 5000i, 7000 HPV, 8000 HPV and 9000i Models (Refer to Table 1 for Implementation Dates)",
            "tm": [
                "1000",
                "1652",
                "BE 200",
                "CE 200",
                "CE 300",
                "FE 300",
                "RE 200",
                "RE 300",
                "4100",
                "4200",
                "4300",
                "4400",
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500",
                "7600"
            ],
            "engfam": [],
            "formnum": "07-14-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "041407",
            "filename": "041407_1.xml",
            "title": "Service Parts for Dana D170 Tandem Axle",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500",
                "7600",
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "04-14-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14GJH",
                "14GJJ",
                "14GJK",
                "14GJL",
                "14GJM",
                "14GJN"
            ]
        },
        {
            "grp": "s14",
            "root": "041406",
            "filename": "041406_1.xml",
            "title": "New Service Parts Released for Dana Heavy Single Drive Axles S21-170, S23-170, S25-170, S23-190, S26-190, and S30-190",
            "tm": [
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "04-14-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14AHA",
                "14AHB",
                "14AHC",
                "14AHH",
                "14AHJ",
                "14AHK",
                "14AHL"
            ]
        },
        {
            "grp": "s14",
            "root": "041405",
            "filename": "041405_1.xml",
            "title": "ArvinMeritor has Changed the Forward Carrier to Housing Fastener System on all RT-46-164EH Tandem Axles",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7400",
                "7500"
            ],
            "engfam": [],
            "formnum": "04-14-05",
            "startdate": "",
            "enddate": "",
            "vendor": "ARVINMERITOR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "041404",
            "filename": "041404_1.xml",
            "title": "ArvinMeritor Rear Axle Pinion Seals",
            "tm": [],
            "engfam": [],
            "formnum": "04-14-04",
            "startdate": "",
            "enddate": "",
            "vendor": "ARVINMERITOR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "041403",
            "filename": "041403_1.xml",
            "title": "ArvinMeritor Carrier to Housing Fasteners with Pre-Applied Thread Locker",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-14-03",
            "startdate": "",
            "enddate": "",
            "vendor": "ARVINMERITOR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "041402",
            "filename": "041402_1.xml",
            "title": "Dana Spicer D404 Power Divider Part Number Changes for Service",
            "tm": [
                "4400",
                "7400",
                "7500",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-14-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "041401",
            "filename": "041401_1.xml",
            "title": "Tire Matching Guidelines and Calculations for Dana Spicer Tandem Axles in 5000i, 7000, 8000, 9000i International Models",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "7400",
                "7500",
                "8500",
                "8600",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-14-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14GEP, 14GER, 14GEZ, 14GGC, 14GGD, 14GGG, 14GGH, 14GGJ, 14GGP, 14GGR, 14GGS, 14GGU, 14GGV, 14GGW, 14GGX, 14GGY, 14GHD, 14GJD, 14GJE, 14309"
            ]
        },
        {
            "grp": "s14",
            "root": "031401",
            "filename": "031401_1.xml",
            "title": "Oil Change Intervals For Eaton Transmissions and Dana Spicer Drive Axles Using Roadranger E250 and E500 Extended Drain Lubricants",
            "tm": [],
            "engfam": [],
            "formnum": "03-14-01",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "EATON",
                "DANA SPICER"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "991403",
            "filename": "991403_1.xml",
            "title": "Installation Procedure for New Unitized Pinion Seal Used in Spicer N Model Single Rear Axles and Rear-Rear Tandem Axles",
            "tm": [],
            "engfam": [],
            "formnum": "99-14-03",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "991402",
            "filename": "991402_1.xml",
            "title": "Meritor Unitized Pinion Seal and Yoke Installation Instructions",
            "tm": [],
            "engfam": [],
            "formnum": "99-14-02",
            "startdate": "",
            "enddate": "",
            "vendor": "MERITOR",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "991401",
            "filename": "991401_1.xml",
            "title": "Spicer/Eaton 15040S (Fabco SDA1200) Rear Axle Code 02EYG Ring Gear Nut and Bolt Service Kit",
            "tm": [],
            "engfam": [],
            "formnum": "99-14-01",
            "startdate": "",
            "enddate": "",
            "vendor": [
                "SPICER",
                "EATON",
                "FABCO"
            ],
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "02EYG"
            ]
        },
        {
            "grp": "s14",
            "root": "981401",
            "filename": "981401_1.xml",
            "title": "Excessive End Play in Input Shaft on Spicer N and S Series Rear Axles",
            "tm": [
                "2000",
                "5000",
                "8000",
                "9000"
            ],
            "engfam": [],
            "formnum": "98-14-01",
            "startdate": "02/01/1997",
            "enddate": "06/01/1998",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14GDA",
                "14GDC",
                "14GDE"
            ]
        },
        {
            "grp": "s14",
            "root": "971401",
            "filename": "971401_1.xml",
            "title": "Power Divider Lock (PDL)",
            "tm": [],
            "engfam": [],
            "formnum": "97-14-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "961401RA",
            "filename": "961401ra_1.xml",
            "title": "Axilok Unitized Self-Locking Wheel Bearing Adjusting Nut",
            "tm": [],
            "engfam": [],
            "formnum": "96-14-01RA",
            "startdate": "",
            "enddate": "",
            "vendor": "AXILOK",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "941404",
            "filename": "941404_1.xml",
            "title": "Proper Identification and Gear Pattern for the New Spicer \"Continuous Index\" Cut Gear Sets Supplied for the W230-S (Code 14057) and W460-S (Code 14474) Rear Axles",
            "tm": [],
            "engfam": [],
            "formnum": "94-14-04",
            "startdate": "",
            "enddate": "",
            "vendor": "SPICER",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14057",
                "14474"
            ]
        },
        {
            "grp": "s14",
            "root": "941403",
            "filename": "941403_1.xml",
            "title": "Procedures for Welding a Transverse Torque Rod Bracket to a Rear Axle",
            "tm": [],
            "engfam": [],
            "formnum": "94-14-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "941401",
            "filename": "941401_1.xml",
            "title": "Power Divider Lock (PDL) Control Valve Indicator Light Operation",
            "tm": [],
            "engfam": [],
            "formnum": "94-14-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "931401",
            "filename": "931401_1.xml",
            "title": "Rear Axle Alignment",
            "tm": [],
            "engfam": [],
            "formnum": "93-14-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s14",
            "root": "921401",
            "filename": "921401_1.xml",
            "title": "Checking Power Divider Input Shaft End Play, Forward Rear Axle",
            "tm": [],
            "engfam": [],
            "formnum": "92-14-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "14GDA",
                "14GDC"
            ]
        },
        {
            "grp": "s15",
            "root": "051503",
            "filename": "051503_1.xml",
            "title": "Improved Fuel Balance Between Dual Fuel Tanks for 5000i Models Built at Garland Before June 13, 2004, 9000i Models Built at Chatham Before June 7, 2004 and 9000i Models Built at Escobedo Before July 5, 2004 with Cummins ISX Engines",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [
                "SX"
            ],
            "formnum": "05-15-03",
            "startdate": "",
            "enddate": "",
            "vendor": "CUMMINS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s15",
            "root": "051502",
            "filename": "051502_1.xml",
            "title": "New Design Crossmember for Fuel Tank and Air Tank Mounting in 9000i Models",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "05-15-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s15",
            "root": "051501",
            "filename": "051501_1.xml",
            "title": "Dual Fuel Tank Transfer Pump System With Two Wire Fuel Transfer Pump Troubleshooting",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "05-15-01",
            "startdate": "08/19/2002",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s15",
            "root": "041501",
            "filename": "041501_1.xml",
            "title": "Fuel Line Connectors",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "04-15-01",
            "startdate": "10/24/2000",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s15",
            "root": "021501",
            "filename": "021501_1.xml",
            "title": "Fuel Tanks and Fuels",
            "tm": [],
            "engfam": [],
            "formnum": "02-15-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s15",
            "root": "011501",
            "filename": "011501_1.xml",
            "title": "Improved Fuel Tank Bracket Liner for Round Fuel Tanks used on 2000, 5000, 5000i, 8000, 9000 and 9000i Models (refer to Table 1 for affected Models by Manufacturing Location, Specific Model and Build Date)",
            "tm": [
                "2000",
                "5000",
                "5000I",
                "8100",
                "8200",
                "8300",
                "9000",
                "9100",
                "9100I",
                "9200",
                "9200I",
                "9400",
                "9400I",
                "9800",
                "9900I"
            ],
            "engfam": [],
            "formnum": "01-15-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s15",
            "root": "001501R",
            "filename": "001501r_1.xml",
            "title": "Replacement of 75 Gallon Fuel Tank Hanger Brackets and Spacers on 4700, 4800, and 4900 Models Built Between January 5, 1995 and June 1, 2000 with International Codes 15DKM, 15DKX, 15SDE, 15SEA, 15SEE, 15SMC",
            "tm": [
                "4700",
                "4800",
                "4900"
            ],
            "engfam": [],
            "formnum": "00-15-01R",
            "startdate": "01/05/1995",
            "enddate": "06/01/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "15DKM",
                "15DKX",
                "15SDE",
                "15SEA",
                "15SEE",
                "15SMC"
            ]
        },
        {
            "grp": "s15",
            "root": "981501",
            "filename": "981501_1.xml",
            "title": "Fuel Tank Sender and Sender Cover Plate Gaskets",
            "tm": [
                "2000",
                "4000",
                "8000",
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700",
                "9800"
            ],
            "engfam": [],
            "formnum": "98-15-01",
            "startdate": "11/01/1995",
            "enddate": "06/04/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s15",
            "root": "911501",
            "filename": "911501_1.xml",
            "title": "Inaccurate Fuel Gauge Reading",
            "tm": [
                "9000",
                "9400"
            ],
            "engfam": [],
            "formnum": "91-15-01",
            "startdate": "",
            "enddate": "11/01/1990",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "081602",
            "filename": "081602_1.xml",
            "title": "Improved Calibration Procedure for Optional Instrument Cluster Compass",
            "tm": [
                "3200",
                "4100",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "DURASTAR",
                "LONESTAR",
                "PROSTAR",
                "TRANSTAR",
                "WORKSTAR",
                "BE BUS",
                "CE BUS",
                "HC BUS"
            ],
            "engfam": [],
            "formnum": "08-16-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16HBZ"
            ]
        },
        {
            "grp": "s16",
            "root": "081601",
            "filename": "081601_1.xml",
            "title": "Air Conditioning Diagnostic Flowchart",
            "tm": [],
            "engfam": [],
            "formnum": "08-16-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "071607",
            "filename": "071607_1.xml",
            "title": "Procedure for Cab Drilling",
            "tm": [],
            "engfam": [],
            "formnum": "07-16-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "071606",
            "filename": "071606_1.xml",
            "title": "HVAC Blend Air Door Adjustment in 5000i and 9000i Models",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "07-16-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "071605",
            "filename": "071605_1.xml",
            "title": "Intermittent HVAC Temperature Actuator Motor Operation",
            "tm": [
                "3200",
                "4100",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "07-16-05R",
            "startdate": "",
            "enddate": "06/20/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "071603",
            "filename": "071603_1.xml",
            "title": "Corroded Door Speakers on CF 500 and CF 600",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "07-16-03",
            "startdate": "",
            "enddate": "06/07/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "071602",
            "filename": "071602_1.xml",
            "title": "Corrected Calibration Procedure for Optional Instrument Cluster Compass",
            "tm": [
                "4100",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600",
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "07-16-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "071601",
            "filename": "071601_1.xml",
            "title": "Refrigerant Level in 2008 ProStar and HPV Models",
            "tm": [
                "PROSTAR",
                "3200",
                "4100",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "07-16-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "061610",
            "filename": "061610_1.xml",
            "title": "CF Driver's Seat Bottom Replacement",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "06-16-10",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "061609",
            "filename": "061609_1.xml",
            "title": "Improved Actuator for HPV Models with Motorized Mirrors",
            "tm": [
                "4100",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "06-16-09",
            "startdate": "",
            "enddate": "08/28/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16SDT",
                "16SDU",
                "16SGA",
                "16SJR"
            ]
        },
        {
            "grp": "s16",
            "root": "061608",
            "filename": "061608_1.xml",
            "title": "Bonded Windshield Glass Replacement Sealant Kit  2592784C91 Requires New Dispenser",
            "tm": [],
            "engfam": [],
            "formnum": "06-16-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "061607",
            "filename": "061607_1.xml",
            "title": "Criteria for Air Conditioning Accumulator and Receiver Dryer Replacement",
            "tm": [],
            "engfam": [],
            "formnum": "06-16-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "061606",
            "filename": "061606_1.xml",
            "title": "New Design Hood Guide and Guide Bracket to Reduce Hood Knock, Squeak, and Wear on International 5000i and 9000i Models Built Between April 1, 2003 and August 6, 2006",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "06-16-06",
            "startdate": "04/01/2003",
            "enddate": "08/06/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "061605",
            "filename": "061605_1.xml",
            "title": "Troubleshooting Air Conditioner (AC) Leaks at the Thermistor and New Interchangeable Thermistor Released for Production",
            "tm": [
                "3200",
                "4100",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "06-16-05",
            "startdate": "01/01/2001",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "061604",
            "filename": "061604_1.xml",
            "title": "ABS Pass Through 48 Way Connector may be Compromised by Water from the Cowl Tray Hose in Certain International 5000i and 9000i Models (see Build Date Table 1)",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "06-16-04",
            "startdate": "11/10/2002",
            "enddate": "02/14/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "061603",
            "filename": "061603_1.xml",
            "title": "The HVAC Water Drain Tube in Certain International 4000, 7000, 8000 HPV Models Built Between September 1, 2003 and August 15, 2005 May Not Function Correctly",
            "tm": [
                "4100",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "06-16-03",
            "startdate": "09/01/2003",
            "enddate": "08/15/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "061602R",
            "filename": "061602r_1.xml",
            "title": "Door Air Leaks in 4000, 7000, 8000 HPV Models",
            "tm": [
                "4100",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "06-16-02R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "061601",
            "filename": "061601_1.xml",
            "title": "Metal Repair Procedure for Corrosion",
            "tm": [],
            "engfam": [],
            "formnum": "06-16-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "051608",
            "filename": "051608_1.xml",
            "title": "Air Conditioning (AC) Hose Protection for 9900i Models with Caterpillar C-15 Engines Built Between November 1, 2002 and August 17, 2005",
            "tm": [],
            "engfam": [],
            "formnum": "05-16-08",
            "startdate": "11/01/2002",
            "enddate": "08/17/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "9900I"
            ]
        },
        {
            "grp": "s16",
            "root": "051607",
            "filename": "051607_1.xml",
            "title": "7000 HPV Models Used for Plowing Snow may Experience Snow Blocking the Cowl Tray Fresh Air Intake for the Heating, Ventilating, and Air Conditioning (HVAC) System",
            "tm": [
                "7300",
                "7400",
                "7500",
                "7600",
                "7700"
            ],
            "engfam": [],
            "formnum": "05-16-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "051606",
            "filename": "051606_1.xml",
            "title": "Water may Leak into the Cab at the External Mirror Lower Mounting Bracket on CF 500 and CF 600 Models Built Before June 27, 2005",
            "tm": [
                "CF 500",
                "CF 600"
            ],
            "engfam": [],
            "formnum": "05-16-06",
            "startdate": "",
            "enddate": "06/27/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "051605",
            "filename": "051605_1.xml",
            "title": "9000i Cab Air Suspension Shock Absorber Leakage Identification",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "05-16-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16WCJ",
                "16WGR"
            ]
        },
        {
            "grp": "s16",
            "root": "051604",
            "filename": "051604_1.xml",
            "title": "New Door Bumper for 4000, 7000, 8000 HPV Models built in Springfield and Garland Before April 25, 2005 and Escobedo Before May 2, 2005",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "05-16-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "051603",
            "filename": "051603_1.xml",
            "title": "Additional HVAC Filter, Code 16WLS, is Now Available as an Option for New HPV Models",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "7700"
            ],
            "engfam": [],
            "formnum": "05-16-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "051602",
            "filename": "051602_1.xml",
            "title": "Hoses for Add-On AC Evaporators",
            "tm": [
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "05-16-02R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "051601",
            "filename": "051601_1.xml",
            "title": "Door Latch Lubricant, with Corrosion Control, for 4700, 4800, and 4900 Models Operating in Cold Climates Where De-Icing Chemicals Are Used",
            "tm": [
                "4700",
                "4800",
                "4900"
            ],
            "engfam": [],
            "formnum": "05-16-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "041608",
            "filename": "041608_1.xml",
            "title": "New Design Luggage Door Latch for 9200i, 9400i, 9900i Sleeper Models and Earlier 9000 Sleeper Models",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-16-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "041606",
            "filename": "041606_1.xml",
            "title": "Cab Underbody Ride Plate Bolt Interference with Exhaust Pipe on the Passenger Side in 9000i Models Built Between December 1, 2000 and June 10, 2004",
            "tm": [
                "9000",
                "9200I",
                "9400I",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "04-16-06",
            "startdate": "12/01/2000",
            "enddate": "06/10/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "041605",
            "filename": "041605_1.xml",
            "title": "New Kit for 5000i and 9000i Models to Seal Cold Air Door Leaks",
            "tm": [
                "5000",
                "5500I",
                "5600I",
                "5900I",
                "9000",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "04-16-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "041604",
            "filename": "041604_1.xml",
            "title": "Improved Air Conditioner (AC) Condenser Tube Support for HPV Models",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "8500"
            ],
            "engfam": [],
            "formnum": "04-16-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "041603",
            "filename": "041603_1.xml",
            "title": "Design Changes to Side Mounted Mirrors for HPV Models",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "04-16-03",
            "startdate": "01/21/2004",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "041602",
            "filename": "041602_1.xml",
            "title": "Windshield Wiper System Motor and Linkage, Feature Code 016WGJ, used in QSP Models has been Updated",
            "tm": [
                "2000",
                "2500",
                "2574",
                "2600",
                "2674",
                "4700",
                "4800",
                "4900"
            ],
            "engfam": [],
            "formnum": "04-16-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16WGJ"
            ]
        },
        {
            "grp": "s16",
            "root": "041601",
            "filename": "041601_1.xml",
            "title": "Air Conditioning Accumulator Reinforcement Kit for 7000 Models Used in Severe Service Applications",
            "tm": [
                "7300",
                "7400",
                "7500",
                "7600"
            ],
            "engfam": [],
            "formnum": "04-16-01",
            "startdate": "08/01/2000",
            "enddate": "03/29/2004",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16WKB"
            ]
        },
        {
            "grp": "s16",
            "root": "031607",
            "filename": "031607_1.xml",
            "title": "Moisture Drain Tubes on the Engine Compartment Evaporator/Heater Duct in High Performance Vehicles",
            "tm": [
                "3200",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "03-16-07",
            "startdate": "03/05/2001",
            "enddate": "07/01/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "031606",
            "filename": "031606_1.xml",
            "title": "Sanden Air Conditioning Compressors used in 5000i and 9000i Models Built After November 1, 2002",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "03-16-06",
            "startdate": "11/01/2002",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "031604",
            "filename": "031604_1.xml",
            "title": "Seat Belt \"Reverse Lockup\"",
            "tm": [
                "2000",
                "2500",
                "2600",
                "3800",
                "4700",
                "4800",
                "4900",
                "5000",
                "8100",
                "9000"
            ],
            "engfam": [],
            "formnum": "03-16-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "031602",
            "filename": "031602_1.xml",
            "title": "Cab Air Suspension Ride Height Measurement and Adjustment",
            "tm": [
                "2000",
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8100",
                "8200",
                "8500",
                "8600",
                "9000"
            ],
            "engfam": [],
            "formnum": "03-16-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "031601",
            "filename": "031601_1.xml",
            "title": "Seat Back Wear",
            "tm": [
                "4200",
                "4300",
                "4400",
                "7300",
                "7400",
                "7500",
                "7600",
                "8500",
                "8600"
            ],
            "engfam": [],
            "formnum": "03-16-01",
            "startdate": "",
            "enddate": "02/03/2003",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "021606",
            "filename": "021606_1.xml",
            "title": "HVAC Air Intake Scoop Design Improvement",
            "tm": [
                "5000",
                "5600I"
            ],
            "engfam": [],
            "formnum": "02-16-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "021605",
            "filename": "021605_1.xml",
            "title": "Cab Door Opening, Cracking In Upper Rear Corner",
            "tm": [
                "4700",
                "4900",
                "8100"
            ],
            "engfam": [],
            "formnum": "02-16-05",
            "startdate": "12/01/1999",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "021604",
            "filename": "021604_1.xml",
            "title": "Improved Defroster Performance",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "02-16-04",
            "startdate": "06/01/1998",
            "enddate": "01/08/2002",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "021603",
            "filename": "021603_1.xml",
            "title": "Door Air Leaks",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "02-16-03",
            "startdate": "",
            "enddate": "12/11/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "021602",
            "filename": "021602_1.xml",
            "title": "Environmental Paint Contamination",
            "tm": [],
            "engfam": [],
            "formnum": "02-16-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "021601",
            "filename": "021601_1.xml",
            "title": "Revised Towel Bar Grab Handles",
            "tm": [
                "2000",
                "4700",
                "4800",
                "4900",
                "5000",
                "8000",
                "9000"
            ],
            "engfam": [],
            "formnum": "02-16-01",
            "startdate": "",
            "enddate": "10/10/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "011608",
            "filename": "011608_1.xml",
            "title": "Heater Shutoff Valve, Code 16554",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01-16-08",
            "startdate": "",
            "enddate": "09/27/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16554"
            ]
        },
        {
            "grp": "s16",
            "root": "011607",
            "filename": "011607_1.xml",
            "title": "HVAC Fresh Air Filter, Code 16WKY, used in 4200, 4300, 4400 Models",
            "tm": [
                "4200",
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01-16-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16WKY"
            ]
        },
        {
            "grp": "s16",
            "root": "011606",
            "filename": "011606_1.xml",
            "title": "Door Adjustment on 4300 and 4400 Models",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01-16-06",
            "startdate": "10/24/2000",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "011605",
            "filename": "011605_1.xml",
            "title": "4300, 4400 Model HVAC information",
            "tm": [
                "4300",
                "4400"
            ],
            "engfam": [],
            "formnum": "01-16-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "011604",
            "filename": "011604_1.xml",
            "title": "CB/Entertainment Radio Antenna Mount Replacement Kit for 5000i and 9000i Models Built Before June 6, 2000 in Escobedo, October 8, 2000 in Garland and October 16, 2000 in Chatham with Aero Mirrors Code 16WRV, 16WRW with 08RDG or 16WRV, 16WRW with 08RDH",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "01-16-04",
            "startdate": "",
            "enddate": "10/16/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "08RDG",
                "08RDH",
                "16WRV",
                "16WRW"
            ]
        },
        {
            "grp": "s16",
            "root": "011603",
            "filename": "011603_1.xml",
            "title": "Air Intake Scoop Design Improvement for All 5900i, 9900i and 9900ix Models with Dual External Air Cleaners and HVAC System",
            "tm": [
                "5000",
                "5900I",
                "9000",
                "9900I",
                "9900IX"
            ],
            "engfam": [],
            "formnum": "01-16-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "011602",
            "filename": "011602_1.xml",
            "title": "HVAC Blend Air Door and Blower Motor Voltage Measurements for Troubleshooting Air Flow Concerns in 5000i and 9000i Models",
            "tm": [
                "5000I",
                "9000I"
            ],
            "engfam": [],
            "formnum": "01-16-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "011601",
            "filename": "011601_1.xml",
            "title": "Bunk Thermostat Relocation in 9000 and 9000i Models with Optimized Idle, International Code 12VWS",
            "tm": [
                "9000",
                "9000I"
            ],
            "engfam": [],
            "formnum": "01-16-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "12VWS"
            ]
        },
        {
            "grp": "s16",
            "root": "001603",
            "filename": "001603_1.xml",
            "title": "Water Between the View Window Glass Panels of the Passenger Door",
            "tm": [
                "5000I",
                "9000",
                "9100I",
                "9200I",
                "9400I",
                "9900I"
            ],
            "engfam": [],
            "formnum": "00-16-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "001602",
            "filename": "001602_1.xml",
            "title": "Improved Air Conditioning System Expansion Valve and Control Circuit Revision for 2/4/8000 Models Built Between December 5, 1994 and September 8, 1999",
            "tm": [
                "2000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "00-16-02",
            "startdate": "12/05/1994",
            "enddate": "09/08/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "001601",
            "filename": "001601_1.xml",
            "title": "Day Cab Full Aero-Roof Fairing Installation - Pre-9000i Code 16WYN Only",
            "tm": [
                "9000",
                "9100",
                "9200",
                "9300",
                "9400",
                "9900"
            ],
            "engfam": [],
            "formnum": "00-16-01",
            "startdate": "01/01/1996",
            "enddate": "09/10/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16WYN"
            ]
        },
        {
            "grp": "s16",
            "root": "991603",
            "filename": "991603_1.xml",
            "title": "CabMate NPS90 Suspension Control Valve Linkage on 9000 Pro Sleeper Models Built Since May, 1997",
            "tm": [
                "9000"
            ],
            "engfam": [],
            "formnum": "99-16-03",
            "startdate": "05/01/1997",
            "enddate": "",
            "vendor": "LINK",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "991602",
            "filename": "991602_1.xml",
            "title": "Improved Air Conditioning System Expansion Valve and Control Circuit Revision for 9000 Pro Sleeper Models Built Between May 1, 1997 and January 5, 1999, and 9800 Models Built Between July 1, 1997 and February 20, 1999",
            "tm": [
                "9000",
                "9800"
            ],
            "engfam": [],
            "formnum": "99-16-02",
            "startdate": "05/01/1997",
            "enddate": "02/20/1999",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "991601",
            "filename": "991601_1.xml",
            "title": "Air Conditioning High Pressure Compressor to Condenser Hose Assemblies with Metric Pressure Switch Fittings",
            "tm": [
                "2000",
                "8000",
                "9000"
            ],
            "engfam": [],
            "formnum": "99-16-01",
            "startdate": "",
            "enddate": "03/24/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "981604",
            "filename": "981604_1.xml",
            "title": "Air/Hydraulic Cab Assist Pump in 9800 Models",
            "tm": [
                "9000",
                "9800"
            ],
            "engfam": [],
            "formnum": "98-16-04",
            "startdate": "03/03/1996",
            "enddate": "09/11/1998",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "981603",
            "filename": "981603_1.xml",
            "title": "Water Migration into Alternators in 3600 Model School Bus",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "98-16-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "981602",
            "filename": "981602_1.xml",
            "title": "Cabmate, Air Suspension, Transverse Locating Rod Bushings with Premature Wear in Pro Sleeper Models",
            "tm": [
                "9000"
            ],
            "engfam": [],
            "formnum": "98-16-02",
            "startdate": "05/01/1997",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "981601",
            "filename": "981601_1.xml",
            "title": "Retrofitting a Current Production International I6 Mechanical Engine Service Cab/Glider to Support a Non-Production Three Module Engine Control System",
            "tm": [
                "2000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "98-16-01",
            "startdate": "",
            "enddate": "11/03/1997",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "961604",
            "filename": "961604_1.xml",
            "title": "Air Conditioning Compressor Mounting Bracket Bolt Torque on Cummins M-11 Engines",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400",
                "2000",
                "8000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "96-16-04",
            "startdate": "01/16/1995",
            "enddate": "08/15/1996",
            "vendor": "CUMMINS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "961603",
            "filename": "961603_1.xml",
            "title": "Heavy Duty Wiper Motor and Linkage, Code SE0016WGJ",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "96-16-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "961602",
            "filename": "961602_1.xml",
            "title": "Directory of Akzo/Sikkens Paint Jobbers",
            "tm": [],
            "engfam": [],
            "formnum": "96-16-02",
            "startdate": "",
            "enddate": "",
            "vendor": "SIKKENS",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "961601",
            "filename": "961601_1.xml",
            "title": "Air Conditioning Compressor Clutch Coil Mounting Bolts",
            "tm": [],
            "engfam": [],
            "formnum": "96-16-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "951604",
            "filename": "951604_1.xml",
            "title": "Intermittent Air Conditioning Operation",
            "tm": [
                "2000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "95-16-04",
            "startdate": "12/05/1994",
            "enddate": "07/21/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "951603",
            "filename": "951603_1.xml",
            "title": "Heavy Duty Blower Motor",
            "tm": [
                "2000",
                "5000",
                "8000",
                "9000"
            ],
            "engfam": [],
            "formnum": "95-16-03",
            "startdate": "",
            "enddate": "08/01/1995",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "951602",
            "filename": "951602_1.xml",
            "title": "Heater and Air Conditioning System Changes",
            "tm": [
                "2000",
                "4000",
                "8000"
            ],
            "engfam": [],
            "formnum": "95-16-02",
            "startdate": "12/05/1994",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "951601",
            "filename": "951601_1.xml",
            "title": "Changes to Air Conditioning Systems Using HFC-134a Refrigerant",
            "tm": [
                "5000",
                "9000",
                "9200",
                "9300",
                "9400",
                "1000",
                "2000",
                "4000",
                "8000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "95-16-01",
            "startdate": "11/30/1992",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "941606RA",
            "filename": "941606ra_1.xml",
            "title": "Removal of Shipping Block From Navair Cab Air Suspension and Bag Height Settings",
            "tm": [
                "2000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "94-16-06RA",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "941605",
            "filename": "941605_1.xml",
            "title": "Instructions To Repair Paint On Prop Shafts and Other Unprimed Metal Parts",
            "tm": [],
            "engfam": [],
            "formnum": "94-16-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "941604",
            "filename": "941604_1.xml",
            "title": "Unsatisfactory Air Conditioning Cooling",
            "tm": [
                "2000",
                "8100",
                "8200",
                "8300",
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "94-16-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "941603R",
            "filename": "941603r_1.xml",
            "title": "Installation of High Roof and Low Roof 51 Inch and 72 Inch Roof Air Deflector Assemblies",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "94-16-03R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "941602R",
            "filename": "941602r_1.xml",
            "title": "Retrofitting (Converting) An R.I. Refrigerant Charged Air Conditioning System To An HFC-134A Refrigerant Charged Air Conditioning System",
            "tm": [],
            "engfam": [],
            "formnum": "94-16-02R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "941601",
            "filename": "941601_1.xml",
            "title": "Modification Of The Short Filler To Roof Fairing Extender and Sleeper Box Extender Installation",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "94-16-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "931612",
            "filename": "931612_1.xml",
            "title": "Remove Shipping Block From Cab Air Suspension",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "93-16-12",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "931611",
            "filename": "931611_1.xml",
            "title": "Instructions to Remove and Replace Electric Windshield Wiper Motor Assembly",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "93-16-11",
            "startdate": "06/30/1993",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "931610",
            "filename": "931610_1.xml",
            "title": "Instructions For Side Skirt Scuff Panel Replacement",
            "tm": [
                "9000",
                "9200",
                "9400"
            ],
            "engfam": [],
            "formnum": "93-16-10",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16XNA",
                "16XNB",
                "16XNC",
                "16XND",
                "16XNE",
                "16XNG",
                "16XNH",
                "16XNJ",
                "16XNK"
            ]
        },
        {
            "grp": "s16",
            "root": "931609",
            "filename": "931609_1.xml",
            "title": "Repair Water Leaks on Second Generation Bentz Sleeper Boxes",
            "tm": [
                "9000",
                "9200",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "93-16-09",
            "startdate": "01/04/1993",
            "enddate": "07/01/1993",
            "vendor": "BENTZ",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "931608",
            "filename": "931608_1.xml",
            "title": "Improvements To The Engine Cover Retaining Latches and Catches",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "93-16-08",
            "startdate": "03/19/1993",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "931607",
            "filename": "931607_1.xml",
            "title": "Air Deflector Assembly Mounting",
            "tm": [
                "9000",
                "9400"
            ],
            "engfam": [],
            "formnum": "93-16-07",
            "startdate": "",
            "enddate": "01/01/1993",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "931606",
            "filename": "931606_1.xml",
            "title": "Reposition Air Conditioning Hose From Compressor to Condenser",
            "tm": [
                "9000",
                "9400"
            ],
            "engfam": [],
            "formnum": "93-16-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "931605",
            "filename": "931605_1.xml",
            "title": "Shrader Valves and Standard SAE Metric Charging Ports on Air Conditioning Systems Charged With HFC-134a",
            "tm": [],
            "engfam": [],
            "formnum": "93-16-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "931604",
            "filename": "931604_1.xml",
            "title": "Air Conditioning Drip Tray",
            "tm": [
                "2000",
                "4000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "93-16-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "931603",
            "filename": "931603_1.xml",
            "title": "Cancellation of TSI-90-16-3",
            "tm": [
                "9000",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "93-16-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "931602",
            "filename": "931602_1.xml",
            "title": "Process To Remove Tiny Rust Spots From Painted Surfaces",
            "tm": [],
            "engfam": [],
            "formnum": "93-16-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "931601",
            "filename": "931601_1.xml",
            "title": "Process to Remove Medium to Heavy Oxidation From Cab and Hood Painted Surfaces",
            "tm": [],
            "engfam": [],
            "formnum": "93-16-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "921606",
            "filename": "921606_1.xml",
            "title": "Freon Compressor Drive Belt Replacement",
            "tm": [],
            "engfam": [],
            "formnum": "92-16-06",
            "startdate": "",
            "enddate": "",
            "vendor": "YORK",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "921605",
            "filename": "921605_1.xml",
            "title": "Installation, Roof Air Deflector",
            "tm": [
                "8000"
            ],
            "engfam": [],
            "formnum": "92-16-05",
            "startdate": "09/01/1991",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "921604",
            "filename": "921604_1.xml",
            "title": "Installation, Roof Air Deflector and Roof Air Deflector Extension",
            "tm": [
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "92-16-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "921603",
            "filename": "921603_1.xml",
            "title": "Improved Engine Access Door Latch",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "92-16-03",
            "startdate": "",
            "enddate": "04/04/1992",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "921602R",
            "filename": "921602r_1.xml",
            "title": "Freon Compressor Base Mount",
            "tm": [
                "2000",
                "5000",
                "8100",
                "8200",
                "8300",
                "9000"
            ],
            "engfam": [],
            "formnum": "92-16-02R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "921601",
            "filename": "921601_1.xml",
            "title": "Runoff of Freon Compressor Drive Belt",
            "tm": [
                "8100",
                "8200",
                "8300",
                "9000",
                "9400",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "92-16-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "911608",
            "filename": "911608_1.xml",
            "title": "Door Reinforcement Available To Correct Failed Doors",
            "tm": [
                "3000",
                "4000",
                "7000",
                "8100",
                "8200",
                "8300"
            ],
            "engfam": [],
            "formnum": "91-16-08",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "911607",
            "filename": "911607_1.xml",
            "title": "Luggage Door Cable",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "91-16-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "911606",
            "filename": "911606_1.xml",
            "title": "Procedure To Correct Difficult-To-Open Door Latches",
            "tm": [
                "9000",
                "9300",
                "9400",
                "5000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "91-16-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "911605",
            "filename": "911605_1.xml",
            "title": "Redesigned Windshield and Windshield Seal",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "91-16-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "911604",
            "filename": "911604_1.xml",
            "title": "Cab Extender on 96/9700 Vehicles With 100-inch Cabs (Code 16177 or 16178 Hi-Rise)",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "91-16-04",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "16177",
                "16178"
            ]
        },
        {
            "grp": "s16",
            "root": "911603",
            "filename": "911603_1.xml",
            "title": "Instructions For Painting Lower Skirting On Navistar Vehicles",
            "tm": [],
            "engfam": [],
            "formnum": "91-16-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "911602",
            "filename": "911602_1.xml",
            "title": "Replacement of Freon Hose From Compressor To Condenser",
            "tm": [
                "9000",
                "9300"
            ],
            "engfam": [],
            "formnum": "91-16-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "911601",
            "filename": "911601_1.xml",
            "title": "Replace Freon Compressor Adjusting Bracket",
            "tm": [
                "8000",
                "2000"
            ],
            "engfam": [],
            "formnum": "91-16-01",
            "startdate": "",
            "enddate": "01/28/1991",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "901608",
            "filename": "901608_1.xml",
            "title": "Modifying Upper Left and Right Dash Air Conditioning Duct Registers to Improve Air Flow",
            "tm": [
                "2000",
                "4000",
                "7000",
                "8000"
            ],
            "engfam": [],
            "formnum": "90-16-08",
            "startdate": "",
            "enddate": "10/01/1990",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "901607",
            "filename": "901607_1.xml",
            "title": "Installation, Roof Air Deflector and Roof Air Deflector Extension",
            "tm": [
                "9000",
                "9300",
                "9400"
            ],
            "engfam": [],
            "formnum": "90-16-07",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s16",
            "root": "901606",
            "filename": "901606_1.xml",
            "title": "Installation, Roof Air Deflector and Roof Air Deflector Extension",
            "tm": [
                "9000",
                "9600",
                "9700"
            ],
            "engfam": [],
            "formnum": "90-16-06",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s17",
            "root": "071702",
            "filename": "071702_1.xml",
            "title": "Conmet Wheel Bearing Preload (Torque)",
            "tm": [
                "9000",
                "9200I",
                "9900I",
                "PROSTAR"
            ],
            "engfam": [],
            "formnum": "07-17-02",
            "startdate": "07/23/2007",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s17",
            "root": "931701",
            "filename": "931701_1.xml",
            "title": "Hubcap for Oil Lubricated Wheel Bearing on Non-Driving Front Axles",
            "tm": [],
            "engfam": [],
            "formnum": "93-17-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s17",
            "root": "921701",
            "filename": "921701_1.xml",
            "title": "Wheels Bearing Adjustment Procedure",
            "tm": [],
            "engfam": [],
            "formnum": "92-17-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s17",
            "root": "911701",
            "filename": "911701_1.xml",
            "title": "Axle Flange Gasket Replacement",
            "tm": [],
            "engfam": [],
            "formnum": "91-17-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "074704",
            "filename": "074704_1.xml",
            "title": "Complaints of Handrail at Entrance Door And Stepwell Heater Cover Gets Hot To The Touch",
            "tm": [
                "BE 200",
                "CE 200",
                "CE 300"
            ],
            "engfam": [],
            "formnum": "07-47-04",
            "startdate": "03/01/2004",
            "enddate": "06/25/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "074703",
            "filename": "074703_1.xml",
            "title": "Excessive Heat in Driver's Compartment",
            "tm": [
                "FE BUS"
            ],
            "engfam": [],
            "formnum": "07-47-03R",
            "startdate": "01/01/2005",
            "enddate": "03/31/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "074702",
            "filename": "074702_1.xml",
            "title": "Battery Box May partially Separate From Floor Mounting Location On Some Models",
            "tm": [
                "BE 200",
                "CE 200",
                "CE 300",
                "FE 300",
                "RE 200",
                "RE 300"
            ],
            "engfam": [],
            "formnum": "07-47-02",
            "startdate": "03/09/1999",
            "enddate": "05/14/2007",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": [
                "47EAA",
                "47EAB",
                "47EAC"
            ]
        },
        {
            "grp": "s47",
            "root": "074701",
            "filename": "074701_1.xml",
            "title": "Reinforcement of the Battery Box",
            "tm": [
                "BE 200",
                "CE 200",
                "CE 300",
                "FE 300",
                "RE 200",
                "RE 300"
            ],
            "engfam": [],
            "formnum": "07-47-01R",
            "startdate": "03/09/1999",
            "enddate": "12/12/2006",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "064702",
            "filename": "064702_1.xml",
            "title": "Bus Emergency Exit Window Switch Activating False Alarm in IC Corporation CE, FE, and RE Models Built Between March 1, 2004 and July 11, 2005",
            "tm": [
                "CE 200",
                "CE 300",
                "FE 300",
                "RE 200",
                "RE 300"
            ],
            "engfam": [],
            "formnum": "06-47-02",
            "startdate": "03/01/2004",
            "enddate": "07/11/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "064701",
            "filename": "064701_1.xml",
            "title": "Improved Entrance Door/Opener Bracket and Fasteners",
            "tm": [
                "CE BUS",
                "FE BUS",
                "RE BUS"
            ],
            "engfam": [],
            "formnum": "06-47-01",
            "startdate": "06/25/2001",
            "enddate": "08/29/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "054704",
            "filename": "054704_1.xml",
            "title": "New Engine Access Door Light Switch is Available for RE Bus Models Built Between May 1, 1994 and August 8, 2005",
            "tm": [
                "RE 200",
                "RE 300"
            ],
            "engfam": [],
            "formnum": "05-47-04",
            "startdate": "05/01/1994",
            "enddate": "08/08/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "054703",
            "filename": "054703_1.xml",
            "title": "Certain RE 200 and RE 300 Bus Models Built Between March 1, 2004 and February 27, 2005 May Require an Additional Support Bracket for the Radiator Surge Tank",
            "tm": [
                "RE 200",
                "RE 300"
            ],
            "engfam": [],
            "formnum": "05-47-03",
            "startdate": "03/01/2004",
            "enddate": "02/27/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "054701",
            "filename": "054701_1.xml",
            "title": "RE 300 Bus Models Built Between March 1, 2004 and March 20, 2005 with International DT 466 2004 EGR Engines Require a Body Modification to Improve Engine Valve Cover Removal",
            "tm": [
                "RE 300",
                "RE BUS",
                "RE S BUS"
            ],
            "engfam": [
                "DT 466"
            ],
            "formnum": "05-47-01R",
            "startdate": "03/01/2004",
            "enddate": "03/20/2005",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "044701",
            "filename": "044701_1.xml",
            "title": "Bus Lower Rub Rail Corrosion Prevention",
            "tm": [
                "RE 200",
                "RE 300",
                "FE 300",
                "CE BUS",
                "3700",
                "3800"
            ],
            "engfam": [],
            "formnum": "04-47-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "034703RA",
            "filename": "034703ra_1.xml",
            "title": "Addition of Water Separator to Air Door to Prevent Freeze-Ups on 3000 FE, 3000 IC, 3000 RE Bus Models Built Before April 24, 2000",
            "tm": [
                "3000 FE",
                "3000 RE",
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "03-47-03RA",
            "startdate": "",
            "enddate": "04/24/2000",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "034702",
            "filename": "034702_1.xml",
            "title": "New Design Defrost Air Duct for 3000 IC Bus Model Built Before April 26, 2001 to Improve Air Flow To Driver's Side of Vehicle",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "03-47-02",
            "startdate": "",
            "enddate": "04/26/2001",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "034701R",
            "filename": "034701r_1.xml",
            "title": "Modification of Step Well Heater Hoses In 3000 IC Bus Model",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "03-47-01R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "024705",
            "filename": "024705_1.xml",
            "title": "Engine Compartment Modification to Increase Fuel Filter Canister Clearance",
            "tm": [
                "3000 RE"
            ],
            "engfam": [],
            "formnum": "02-47-05",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "024704R",
            "filename": "024704r_1.xml",
            "title": "Relocation of the Entrance Door Control Switch / Installation of Pivot Plate Thrust Bearings Slide Handle Retaining Screw Installation",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "02-47-04R",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "024703",
            "filename": "024703_1.xml",
            "title": "Replacement of Plywood Floor",
            "tm": [],
            "engfam": [],
            "formnum": "02-47-03",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "024702",
            "filename": "024702_1.xml",
            "title": "Left Dash Securement",
            "tm": [
                "3000 FE"
            ],
            "engfam": [],
            "formnum": "02-47-02",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "024701",
            "filename": "024701_1.xml",
            "title": "Replacement of Floor Mat",
            "tm": [
                "3000"
            ],
            "engfam": [],
            "formnum": "02-47-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        },
        {
            "grp": "s47",
            "root": "014701",
            "filename": "014701_1.xml",
            "title": "Adjustment Procedure for the Linear Stroke Door Opening Control used in the International IC Bus Model",
            "tm": [
                "IC BUS"
            ],
            "engfam": [],
            "formnum": "01-47-01",
            "startdate": "",
            "enddate": "",
            "vendor": "",
            "CIRCUIT": false,
            "TROUBLE": false,
            "uc": []
        }
    ]
}


const dataMap = {
    truck: {
        title: 'Master Service Manual (Truck Group)',
        folder: (fn) => `${fn.substr(0, 3)}/${fn}`
    },
    circuit: {
        title: 'Master Service Manual (Truck Group)',
        folder: (fn) => `${fn.substr(0, 3)}/${fn}`
    },
    trouble: {
        title: 'Master Service Manual (Truck Group)',
        folder: (fn) => `${fn.substr(0, 3)}/${fn}`
    },
    engine: {
        title: 'Master Service Manual (Engine Group)',
        folder: (fn) => `engine/${fn}`
    },
    recall: {
        title: 'Vehicle Recall Campaigns',
        folder: (fn) => `recalls/${fn}`
    },
    afc: {
        title: 'Authorized Field Change (AFC) Letters',
        folder: (fn) => `afcs/${fn}`
    },
    tsi: {
        title: 'Technical Service Information (TSI) Letters',
        folder: (fn) => `tsis/${fn}`
    },
    sfn: {
        title: 'Special Field Notification (SFN) Letters',
        folder: (fn) => `sfns/${fn}`
    },
    bcm: {
        title: 'Broadcast Messages',
        folder: (fn) => `bcms/${fn}`
    }
}


const searchFor = ({grp, tm, uc, vendor, engfam}) => {
    let msg = ["CF 500", "CF 600", "PROSTAR", "MXT"].includes(tm)
        ? "Note: For the model selected, only information specifically meant for that model is displayed."
        : "Note: Information that is general in nature and not specific to a particular model may be displayed"

    const groupMap = {
        's01': 'Frame',
        's02': 'Front Axle',
        's03': 'Springs',
        's04': 'Brakes',
        's05': 'Steering',
        's06': 'Prop. Shaft',
        's07': 'Exhaust',
        's08': 'Electrical',
        's09': 'Front End',
        's10': 'General',
        's11': 'Clutch',
        's12': 'Engine',
        's13': 'Transmission',
        's14': 'Rear Axle',
        's15': 'Fuel Tanks',
        's16': 'Cab',
        's17': 'Wheels',
        's47': 'Bus Body',
    }

    const resDiv = `
            <div class="d-flex flex-column align-items-center text-white bg-secondary p-2">
                <ul class="list-unstyled">
                    <li>
                        <b>YOU SEARCHED FOR:</b>
                    </li>
                    ${grp ? `<li>Major Group: ${groupMap[grp]}</li>` : ''}
                    ${tm ? `<li>Model: ${tm}</li>` : ''}
                    ${vendor ? `<li>Vendor: ${vendor}</li>` : ''}
                    ${uc ? `<li>Feature Code${uc}</li>` : ''}
                    ${engfam ? `<li>Engine: ${engfam}</li>` : ''}
                </ul>
                <p>${msg}</p>
            </div>
             `
    const children = [...view.childNodes]
    view.innerHTML = resDiv

    children.forEach(node => {
        view.appendChild(node)
    })

}


const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const createTable = ({headers, data, title, key}) => {
    const div = document.createElement('div');
    div.innerHTML += `<div class="text-center"><h6>${title}</h6></div>`
    div.setAttribute('class', 'master-serv-manual-table-div p-3')

    const table = document.createElement('table');
    table.setAttribute('class', 'table')
    const tr = document.createElement('tr');

    headers.map(str => {
        const th = document.createElement('th');
        th.textContent = capitalize(str);
        tr.appendChild(th);
    })

    table.appendChild(tr);

    data.map(row => {
        const tr = document.createElement('tr');
        ['filename', 'title'].map(header => {
            const td = document.createElement('td');

            if (key === 'engine' && header === 'filename' && row['formnum']) header = 'formnum';
            if (header === 'filename' && row[header]) {
                td.textContent = row[header].split('.')[0].split('_1')[0];
            } else {
                td.textContent = row[header];
            }

            tr.appendChild(td)
            tr.onclick = () => {
                const baseUrl = window.location.href.split('index')[0]
                const fileUrl = baseUrl + dataMap[key].folder(row.filename)
                window.open(fileUrl, '_black')
            }
        })
        table.appendChild(tr);
    })

    div.appendChild(table)
    return div
}

const filterAndCreateTables = (filterCondition) => {
    const filtered = {
        truck: [],
        engine: [],
        recall: [],
        afc: [],
        tsi: []
    }

    const div = document.createElement('div');
    Object.keys(data).map(key => {
        data[key].map(row => {
            if (filterCondition(row))
                filtered[key].push(row)
        })


        if (filtered[key].length) {
            div.appendChild(
                createTable({
                    headers: ['file', 'title'],
                    data: filtered[key],
                    title: dataMap[key].title,
                    key
                })
            )
        }

        view.innerHTML = '';
        view.appendChild(div);
    })
}

//Search 1 - GROUP/MODEL/VENDOR
document.getElementById('Search1').onclick = () => {
    const vendor = document.getElementById('vendor').value
    const tm = document.getElementById('tm').value
    const grp = document.getElementById('grp').value


    filterAndCreateTables((row) => {
        if (vendor === 'ALL' && tm !== 'ALL' && grp !== 'ALL') {
            let tmFound = false


            const tmInt = parseInt(tm)
            if (!tmInt || parseInt(tm) >= 3000)
                tmFound = row.tm.includes(tm)
            else
                //For truck model filtering. Compare the first digits only. 1000 === 1534  = true because 1 === 1
                for (let t of row.tm) {
                    if (t.charAt(0) === tm.charAt(0)) {
                        tmFound = true;
                        break;
                    }
                }

            return (tmFound && row.grp === grp) || (!row.tm.length && row.grp === grp)
        } else if (tm === 'ALL' && vendor !== 'ALL' && grp !== 'ALL')
            return row.vendor === vendor && row.grp === grp
        else if (grp === 'ALL' && vendor !== 'ALL' && tm !== 'ALL')
            return (row.vendor === vendor && row.tm.includes(tm)) || (row.vendor === vendor && !row.tm.length)
        else if (grp !== 'ALL' && vendor === 'ALL' && tm === 'ALL')
            return row.grp === grp
        else if (grp === 'ALL' && vendor !== 'ALL' && tm === 'ALL')
            return row.vendor === vendor
        else if (grp === 'ALL' && vendor === 'ALL' && tm !== 'ALL')
            return row.tm.includes(tm)
        else
            return true
    })

    searchFor({vendor, tm, grp})
}

//Search 2 - ENGINE
document.getElementById('Search2').onclick = () => {
    const engfam = document.getElementById('engfam').value

    filterAndCreateTables(row =>
        row.engfam && row.engfam.includes(engfam) ||
        (engfam === 'ALL' && row.grp === 's12'))

    searchFor({engfam})
}

//Search 3 - ENGINE
document.getElementById('Search3').onclick = () => {
    const uc = document.getElementById('uc').value

    filterAndCreateTables(row =>
        row.uc && row.uc.includes(uc.substring(2)) ||
        (uc === 'ALL' && row.uc.length))

    searchFor({uc})
}

