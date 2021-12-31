<?xml version='1.0'?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/TR/WD-xsl">

    <!-- Navistar ISIS-2 Stylesheet -->
    <!-- Version 0.01 2/1/00 -->
    <!-- Copyright 2003 International Truck and Engine Corporation -->

    <!-- change November, 2000 to add support for <sub> and <sup> -->
    <!-- change January, 2001 to fix hotlnk to only use # if the xrefid is valued -->
    <!-- change January, 2001 to remove the support for the con_toc which would add link to TOC -->
    <!-- change February, 2001 to add support for <partsinfo> -->
    <!-- change March, 2001 to have exhotlnk open a new window -->
    <!-- change April, 2001 to fix numbering and initializing of step1 and step2 -->
    <!-- change May, 2001 to fix spacing of steps -->
    <!-- change May, 2001 to add logo to SFN header -->
    <!-- change July, 2001 for optional auto numbers on callouts -->
    <!-- change October, 2001 to remove generated text from recall because user had been hardcoding it in SGML -->
    <!-- change January, 2002 to revise how much space a graphic and figure take up -->
    <!-- change March, 2002 to add an stitle element for the search routine to find. This style sheet hides it from the browser. -->
    <!-- change April, 2002 to add SSM. -->
    <!-- change April, 2002 to get randlist to work in entry -->
    <!-- change May, 2002 to get para to work in entry -->
    <!-- change May, 2002 to display the foreword -->
    <!-- change Jan, 2003 to revise the copyright to 2003 -->
    <!-- change Feb, 2003 to remove exclamation graphic from Caution (only want for Warning) -->
    <!-- change Feb, 2003 subjectfile has been added to svcsection but we don't want it displayed so put in change -->
    <!-- change March, 2003 to add verbatim and line -->
    <!-- change April, 2003 to add circle R to logo on SFN header change was actually made to graphic, not here -->
    <!-- change March, 2004 to revise the copyright to 2004 -->
    <!-- change July, 2004 to include new <regulation> tag -->
    <!-- change Jan 24, 2005 to include ID for para and svcproc -->
    <!-- change Feb, 2005 to revise the copyright to 2005 -->
    <!-- change Feb 11, 2005 to fix include ID for para and svcproc so that it only does it if ID exists -->
    <!-- change Jan, 2006 to revise the copyright to 2006 -->
    <!-- change April, 2006 to test a meta tag that can be used to include information for the search but not display it -->
    <!-- change July, 2006 to revise the site of the acgm.cab file. include the /service (added a service directory in case user not coming thru TAM) -->
    <!-- change Mar, 2007 to revise the copyright to 2007 -->
    <!-- change July, 2008 to revise the copyright to 2008 and change company from International Truck and Engine to Navistar, Inc. -->

    <xsl:script><![CDATA[
		var singleq
		singleq = "\'"
		var counter = 0
		var alphact = 0
		var letterct = ""
		var callout1Counter = 0
		var callout1Alphact = 0
		var callout2Counter = 0
		var callout2Alphact = 0
		
		function resetCallout1()	{
			callout1Counter = 0;
			callout1Alphact = 0;
		}
		
		function countCallout1() {
		   callout1Counter = callout1Counter + 1;
		   return callout1Counter;
		}
		
		function countCallout1alpha()  {
		   callout1Counter = callout1Counter + 1;
			letterct = formatIndex(callout1Counter, "a");
			return letterct;
		}
				
		function resetCallout2()	{
			callout2Counter = 0;
			callout2Alphact = 0;
		}
		
		function countCallout2() {
		   callout2Counter = callout2Counter + 1;
		   return callout2Counter;
		}
		
		function countCallout2alpha()  {
		   callout2Counter = callout2Counter + 1;
			letterct = formatIndex(callout2Counter, "a");
			return letterct;
		}	
		
		function count() {
		   counter = counter + 1;
		   return counter;
		}
		function reset() {
		   counter = 0;
		}
		function alphaCount()  {
			alphact = alphact + 1;
			letterct = formatIndex(alphact, "a");
			return letterct;
			}
		function alphaReset()  {
			alphact = 0;
			letterct = "";
			}
	]]></xsl:script>
    <!-- This script sets up variables and functions that will be used to support this stylesheet. -->
    <!-- The singleq variable is used in when passing parameter values that need an additional level -->
    <!--  of quoting that is evaluated at run-time.  Use with eval tags. -->
    <!-- The count and alpha count functions are used to support the numbering and lettering of steps. -->

    <!-- ******************** GENERAL STYLES ********************* -->

    <xsl:template>
        <xsl:apply-templates/>
    </xsl:template>
    <!-- This is the basic "apply the templates" template -->

    <xsl:template match="//isis">

        <xsl:element name="HTML">
            <xsl:attribute name="lang">
                <xsl:value-of select="@lang"/>
            </xsl:attribute>

            <!-- March 12, 2002 - add title -->
            <!--	<HEAD><TITLE><xsl:value-of select="//sgmlhead/stitle"/></TITLE> -->
            <HEAD>
                <TITLE>
                    <xsl:value-of select="//stitle"/>
                </TITLE>
                <LINK rel="STYLESHEET" type="text/css" href="../style.css"/>
            </HEAD>
            <BODY STYLE="font-size:10pt;margin-left:15px;font-family:arial;">
                <BR/>
                <xsl:apply-templates/>
                <BR/>
                <BR/>
                <P ALIGN="CENTER" STYLE="font-size:8pt;font-family:arial;">&#169; 2008 Navistar, Inc.</P>
                <BR/>
            </BODY>

        </xsl:element>
    </xsl:template>

    <!-- This is the top-level rule for ISIS-II XML. -->
    <!-- I think that this standard wrapper tag should begin and end all of your XML files -->
    <!--  so that general styles can be applied to all the documents. -->
    <!-- This template also adds a footer with the copyright statement. -->

    <xsl:template match="text()">
        <xsl:value-of/>
    </xsl:template>
    <!-- Emit the actual text between the tags. -->

    <!-- Jan 24, 2005 -->

    <xsl:template match="para">

        <xsl:choose>

            <xsl:when test="@id[.>' ']">
                <xsl:element name="DIV">
                    <xsl:attribute name="ID">
                        <xsl:value-of select="@id"/>
                    </xsl:attribute>
                </xsl:element>
            </xsl:when>

        </xsl:choose>

        <!-- end Jan 24, 2005 -->

        <P>
            <xsl:apply-templates/>
        </P>
    </xsl:template>
    <!-- Std. paragraph template. -->

    <xsl:template match="hotlnk">

        <!-- new January 23, 2001
        -->
        <xsl:choose>
            <xsl:when test="con_toc">
            </xsl:when>
            <xsl:otherwise>

                <xsl:element name="A">
                    <!-- new January 23, 2001
                    -->

                    <!-- only use the # if the xrefid is valued  January 5, 2001 -->

                    <xsl:choose>
                        <xsl:when test="@xrefid[.>' ']">
                            <xsl:attribute name="HREF"><xsl:value-of select="@document"/>#
                                <xsl:value-of select="@xrefid"/>
                            </xsl:attribute>
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:attribute name="HREF">
                                <xsl:value-of select="@document"/>
                            </xsl:attribute>
                        </xsl:otherwise>
                    </xsl:choose>

                    <!-- Phil added the following one line -->
                    <xsl:attribute name="target">
                        <xsl:value-of select="@target"/>
                    </xsl:attribute>
                    <xsl:apply-templates/>
                </xsl:element>

                <!-- new January 23, 2001
                -->
            </xsl:otherwise>
        </xsl:choose>
        <!-- new January 23, 2001
        -->

    </xsl:template>
    <!-- Assume that xrefid attr value will contain # character and/or URL if needed. -->
    <!-- Phil added the following code for exhotlnk -->

    <xsl:template match="exhotlnk">

        <xsl:element name="A">

            <xsl:choose>
                <xsl:when test="@xrefid[.>' ']">
                    <xsl:attribute name="HREF"><xsl:value-of select="@document"/>#
                        <xsl:value-of select="@xrefid"/>
                    </xsl:attribute>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:attribute name="HREF">
                        <xsl:value-of select="@document"/>
                    </xsl:attribute>
                </xsl:otherwise>
            </xsl:choose>
            <!-- <xsl:attribute name="target">_top</xsl:attribute> -->
            <!-- change March 15, 2001 to open in different window -->
            <xsl:attribute name="target">exhotlnk</xsl:attribute>

            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="figure">
        <P/>
        <!-- taking out center January 31, 2002
              <xsl:element name="CENTER">
        -->
        <xsl:element name="DIV">
            <xsl:attribute name="ID">
                <xsl:value-of select="@id"/>
            </xsl:attribute>
            <xsl:attribute name="STYLE">text-align:center;z-index:0;border:1px solid gray;</xsl:attribute>

            <xsl:choose>
                <xsl:when test="@figsize[.='col-wide']">
                    <xsl:attribute name="STYLE">width:520px;text-align:center;z-index:0;border:1px solid gray;
                    </xsl:attribute>
                </xsl:when>
                <!--  January 31, 2002
                      <xsl:when test="@figsize[.='pg-wide']">
                      <xsl:attribute name="STYLE">width:520px;text-align:center;z-index:0;border:1px solid gray;</xsl:attribute>
                         </xsl:when>
                      <xsl:when test="@figsize[.='full-pg']">
                         <xsl:attribute name="STYLE">width:520px;text-align:center;z-index:0;border:1px solid gray;</xsl:attribute>
                      </xsl:when>
                -->
                <xsl:otherwise>
                    <!--  January 31, 2002 -->
                    <xsl:attribute name="STYLE">width:650px;text-align:center;z-index:0;border:1px solid gray;
                    </xsl:attribute>
                </xsl:otherwise>
            </xsl:choose>

            <!-- the following was changed by Phil to use <IMG> when the graphic is jpeg -->

            <xsl:choose>
                <xsl:when test="graphic/@type[.='jpeg']">
                    <xsl:element name="IMG">
                        <xsl:attribute name="SRC">
                            <xsl:value-of select="graphic/@filename"/>
                        </xsl:attribute>
                    </xsl:element>
                </xsl:when>

                <xsl:when test="graphic/@type[.='gif']">
                    <xsl:element name="IMG">
                        <xsl:attribute name="SRC">
                            <xsl:value-of select="graphic/@filename"/>
                        </xsl:attribute>
                    </xsl:element>
                </xsl:when>
                <xsl:otherwise>
                    <!-- <xsl:if test="graphic/@type[.$ne$'jpeg']"> -->

                    <!-- end of phil change - look for end if below also -->
                    <!-- new Phil change for buttons -->
                    <!-- some graphics do not have id attribute. Try using it with figure id -->

                    <xsl:element name="OBJECT">
                        <xsl:attribute name="ID">CGM
                            <xsl:value-of select="@id"/>
                            <xsl:value-of select="graphic/@id"/>
                        </xsl:attribute>

                        <xsl:choose>
                            <!-- the following added december 13, 2000 -->
                            <!-- the following for width commented out May 22, 2002 because too many small sizes appeared -->
                            <!--  <xsl:when test="graphic/@scalefitwidth[.>' ']">
                                  <xsl:attribute name="WIDTH"><xsl:value-of select="graphic/@scalefitwidth"/></xsl:attribute>
                             </xsl:when> -->
                            <!-- <xsl:when test="graphic/@scalefitheight[.>' ']">
                             </xsl:when> -->
                            <xsl:when test="@figsize[.='col-wide']">
                                <xsl:attribute name="WIDTH">514px</xsl:attribute>
                            </xsl:when>
                            <xsl:when test="@figsize[.='pg-wide']">
                                <xsl:attribute name="WIDTH">650px</xsl:attribute>
                            </xsl:when>
                            <xsl:when test="@figsize[.='full-pg']">
                                <xsl:attribute name="WIDTH">650px</xsl:attribute>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:attribute name="WIDTH">514px</xsl:attribute>
                            </xsl:otherwise>
                        </xsl:choose>

                        <xsl:choose>
                            <xsl:when test="graphic/@scalefitheight[.>' ']">
                                <xsl:attribute name="HEIGHT">
                                    <xsl:value-of select="graphic/@scalefitheight"/>
                                </xsl:attribute>
                            </xsl:when>
                            <!-- <xsl:when test="graphic/@scalefitwidth[.>' ']">
                            </xsl:when> -->
                            <xsl:when test="@figsize[.='col-wide']">
                                <xsl:attribute name="HEIGHT">500px</xsl:attribute>
                            </xsl:when>
                            <xsl:when test="@figsize[.='pg-wide']">
                                <xsl:attribute name="HEIGHT">500px</xsl:attribute>
                            </xsl:when>
                            <xsl:when test="@figsize[.='full-pg']">
                                <xsl:attribute name="HEIGHT">800px</xsl:attribute>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:attribute name="HEIGHT">500px</xsl:attribute>
                            </xsl:otherwise>
                        </xsl:choose>

                        <xsl:attribute name="CLASSID">clsid:F5D98C43-DB16-11CF-8ECA-0000C0FD59C7</xsl:attribute>
                        <!-- <xsl:attribute name="CODEBASE">http://www.intercap.com/acgm/code/Acgm.cab</xsl:attribute> -->
                        <!--  <xsl:attribute name="CODEBASE">http://wwwapp.ntc.navistar.com/Pharos/Acgm.cab#Version=7,0,4,0</xsl:attribute> -->
                        <xsl:attribute name="CODEBASE">/service/downloads/Acgm.cab#Version=7,0,5,0</xsl:attribute>
                        <xsl:element name="PARAM">
                            <xsl:attribute name="NAME">FileName</xsl:attribute>
                            <xsl:attribute name="VALUE">./<xsl:value-of select="graphic/@filename"/>#zoom -fit
                            </xsl:attribute>
                            <!-- <xsl:attribute name="VALUE"><xsl:value-of select="graphic/@filename"/></xsl:attribute> -->
                        </xsl:element>
                    </xsl:element>
                    <P size="-2">(Right click on graphic to bring up an option list)</P>
                    <!-- Phil -->
                    <!--  </xsl:if> -->
                    <!-- Phil -->
                </xsl:otherwise>
            </xsl:choose>

            <SPAN>&#32;</SPAN>
            <xsl:apply-templates/>
        </xsl:element>

        <P/>
        <BR/>
        <!--	</xsl:element>
        -->
    </xsl:template>

    <!-- This template sets the CGM display size based on the "figsize" attr. value. -->

    <xsl:template match="caption">
        <P STYLE="padding-left:10px;padding-right:10px;text-align:center;margin-top:3px;">
            <FONT SIZE="+1" STYLE="color:black;font-weight:normal;">
                <xsl:apply-templates/>
            </FONT>
        </P>
    </xsl:template>
    <!-- Add "Figure <xsl:eval>count()</xsl:eval>." for figure auto numbering. -->

    <xsl:template match="calloutgroup">
        <xsl:eval>resetCallout1()</xsl:eval>
        <xsl:eval>resetCallout2()</xsl:eval>
        <xsl:apply-templates/>
        <BR/>
    </xsl:template>

    <xsl:template match="callout1">
        <xsl:eval>resetCallout2()</xsl:eval>
        <P STYLE="margin-left:10px;margin-top:3px;margin-bottom:0px;text-align:left;font-size:8pt;">
            <xsl:apply-templates/>
        </P>
    </xsl:template>

    <xsl:template match="callout1[@type = 'arabic']">
        <xsl:eval>resetCallout2()</xsl:eval>
        <P STYLE="margin-left:10px;margin-top:3px;margin-bottom:0px;text-align:left;font-size:8pt;">
            <xsl:eval>countCallout1()</xsl:eval>.
            <xsl:apply-templates/>
        </P>
    </xsl:template>

    <xsl:template match="callout1[@type = 'alpha']">
        <xsl:eval>resetCallout2()</xsl:eval>
        <P STYLE="margin-left:10px;margin-top:3px;margin-bottom:0px;text-align:left;font-size:8pt;">
            <xsl:eval>countCallout1alpha()</xsl:eval>.
            <xsl:apply-templates/>
        </P>
    </xsl:template>

    <xsl:template match="callout2">
        <BR/>
        <FONT STYLE="position:relative;left:11px;margin-top:0px;margin-bottom:0px;">
            <xsl:apply-templates/>
        </FONT>
    </xsl:template>
    <!-- I am assuming that this is an indented sub-component callout -->

    <xsl:template match="callout2[@type = 'arabic']">
        <BR/>
        <FONT STYLE="position:relative;left:11px;margin-top:0px;margin-bottom:0px;"><xsl:eval>countCallout2()</xsl:eval>
            .
            <xsl:apply-templates/>
        </FONT>
    </xsl:template>

    <xsl:template match="callout2[@type = 'alpha']">
        <BR/>
        <FONT STYLE="position:relative;left:11px;margin-top:0px;margin-bottom:0px;"><xsl:eval>
            countCallout2alpha()</xsl:eval>.
            <xsl:apply-templates/>
        </FONT>
    </xsl:template>

    <xsl:template match="emph">
        <B>
            <xsl:apply-templates/>
        </B>
    </xsl:template>

    <xsl:template match="emph[@type = 'italic']">
        <I>
            <xsl:apply-templates/>
        </I>
    </xsl:template>

    <xsl:template match="emph[@type = 'italundersc']">
        <I>
            <U>
                <xsl:apply-templates/>
            </U>
        </I>
    </xsl:template>

    <xsl:template match="emph[@type = 'boldundersc']">
        <B>
            <U>
                <xsl:apply-templates/>
            </U>
        </B>
    </xsl:template>

    <xsl:template match="emph[@type = 'boldital']">
        <B>
            <I>
                <xsl:apply-templates/>
            </I>
        </B>
    </xsl:template>

    <xsl:template match="emph[@type = 'underscr']">
        <U>
            <xsl:apply-templates/>
        </U>
    </xsl:template>

    <xsl:template match="emph[@type = 'boldundersc']">
        <B>
            <U>
                <xsl:apply-templates/>
            </U>
        </B>
    </xsl:template>

    <!-- ******************** LIST STYLES ******************** -->

    <xsl:template match="seqlist">
        <P/>
        <xsl:element name="OL">
            <xsl:attribute name="STYLE">margin-left:25;font-size:10pt;</xsl:attribute>

            <xsl:choose>
                <xsl:when test="@style[.='arabic']">
                    <xsl:attribute name="TYPE">1</xsl:attribute>
                </xsl:when>
                <xsl:when test="@style[.='alphalc']">
                    <xsl:attribute name="TYPE">a</xsl:attribute>
                </xsl:when>
                <xsl:when test="@style[.='alphauc']">
                    <xsl:attribute name="TYPE">A</xsl:attribute>
                </xsl:when>
                <xsl:when test="@style[.='romanlc']">
                    <xsl:attribute name="TYPE">i</xsl:attribute>
                </xsl:when>
                <xsl:when test="@style[.='romanuc']">
                    <xsl:attribute name="TYPE">I</xsl:attribute>
                </xsl:when>

                <xsl:otherwise>
                    <xsl:attribute name="TYPE">A</xsl:attribute>
                </xsl:otherwise>
            </xsl:choose>

            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>

    <!-- changed April 19, 2001	<OL STYLE="margin-left:25;font-size:10pt;">
        <xsl:apply-templates/></OL>
        </xsl:template>
    -->

    <!-- took para out of the following May 3, 2002 -->

    <xsl:template match="seqlist/item">
        <LI STYLE="margin-bottom:6;">
            <xsl:apply-templates/>
        </LI>
    </xsl:template>
    <!-- Sequential lists are numbered (arabic) regardless of the style attr in the XML. -->
    <!-- I am assuming that this is OK for electronic presentation. -->

    <xsl:template match="deflist">
        <P/>
        <DL>
            <xsl:apply-templates/>
        </DL>
    </xsl:template>

    <xsl:template match="deflist/term">
        <DT>
            <xsl:apply-templates/>
        </DT>
    </xsl:template>

    <xsl:template match="deflist/def">
        <DD>
            <xsl:apply-templates/>
        </DD>
    </xsl:template>

    <!-- ******************** TITLE/HEADING STYLES ******************* -->
    <!-- Case matches the source XML file. -->
    <!--
    <xsl:template match="title">
        <P><B><xsl:apply-templates/></B></P><BR/>
        </xsl:template>
        -->
    <!-- This template covers titles not handled by another title pattern. -->

    <xsl:template match="description">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;DESCRIPTION
                </FONT>
                <BR/>
            </P>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>
    <!-- The Extra font tag pairs force an M-space of colored background before and after. -->

    <!-- Phil removed the M-space for print reasons -->

    <xsl:template match="explodev">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            -->
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;EXPLODED
                    VIEWS
                </FONT>
                <BR/>
            </P>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>

    <!-- added partsinfo feb 5, 2001 -->
    <xsl:template match="partsinfo">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
           -->
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;PARTS
                    INFORMATION
                </FONT>
                <BR/>
            </P>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>

    <!-- The Extra font tag pairs force an M-space of colored background before and after. -->

    <xsl:template match="sstools">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;SPECIAL
                    TOOLS
                </FONT>
                <BR/>
            </P>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>
    <!-- The Extra font tag pairs force an M-space of colored background before and after. -->

    <xsl:template match="torque">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!--<xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            -->
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;TORQUE</FONT>
                <BR/>
            </P>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>
    <!-- The Extra font tag pairs force an M-space of colored background before and after. -->

    <xsl:template match="foreword">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;Foreword
                </FONT>
                <BR/>
            </P>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="svcdiag">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;Service
                    Diagnosis
                </FONT>
                <BR/>
            </P>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="safety">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;Safety</FONT>
                <BR/>
            </P>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>

    <!-- put a svcsubsectitle on svcproc page -->

    <xsl:template match="svcsubsectitle">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            -->
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:10pt;color:black;background-color:#EEEEEE;">&#160;<xsl:apply-templates/>
                </FONT>
                <BR/>
            </P>
        </xsl:element>
    </xsl:template>

    <xsl:template match="title">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;<xsl:apply-templates/>
                </FONT>
                <BR/>
            </P>
        </xsl:element>
        <BR/>

    </xsl:template>
    <!-- Basic title for those that do not have a unique template. -->

    <xsl:template match="svcproc/title | geninfo/title | svcsubsec/title | svcsection/title">

        <!--<xsl:template match="svcproc/title | geninfo/title"> -->
        <!-- Phil added svcsubsec and svcsection to the above -->

        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;<xsl:apply-templates/>
                </FONT>
                <BR/>
            </P>
        </xsl:element>
        <BR/>
    </xsl:template>
    <!-- The Extra font tag pairs force an M-space of colored background before and after. -->

    <xsl:template match="svcsubproc/title">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P STYLE="font-size:12pt;font-weight:bold;">
                <xsl:apply-templates/>
            </P>
        </xsl:element>
    </xsl:template>

    <xsl:template match="para/title">
        <B>
            <xsl:apply-templates/>
        </B>
        <BR/>
    </xsl:template>

    <!-- *************** NOTE/IMPORTANT/WARN/CAUTION STYLES *************** -->

    <xsl:template match="note">
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P>
                <B>NOTE:
                    <xsl:apply-templates/>
                </B>
            </P>
        </xsl:element>
        <P/>
    </xsl:template>

    <xsl:template match="important">
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P>
                <B>IMPORTANT:
                    <xsl:apply-templates/>
                </B>
            </P>
        </xsl:element>
        <P/>
    </xsl:template>

    <xsl:template match="note/para | important/para | caution/para | warning/para | regulation/para">
        <FONT STYLE="font-weight:bold;">
            <xsl:apply-templates/>
        </FONT>
        <BR/>
        <BR/>
    </xsl:template>

    <xsl:template match="caution">

        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P STYLE="border:thin solid;background-color:orange;margin-right:50%;font-size:12pt;font-weight:bold;">
                <!--	<FONT STYLE="font-size:36pt;color:orange;">I<IMG SRC="exclaim.gif"/></FONT><FONT STYLE="color:orange">M</FONT> CAUTION: </P> -->
                CAUTION:
            </P>
            <P STYLE="margin-left:35px;margin-right:35px;">
                <xsl:apply-templates/>
            </P>
        </xsl:element>
        <P STYLE="margin-left:35px;margin-right:35px;margin-bottom:50px;"></P>
    </xsl:template>
    <!-- Might be better with smaller icon; forced prespace with large size "I" preceeding icon. -->
    <!-- Phil removed the hardcode I and M, it made print look funny -->

    <xsl:template match="warning">
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!--  <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P STYLE="border:thin solid black;background-color:red;margin-right:50%;font-size:12pt;font-weight:bold;color:black;">
                <!--	<FONT STYLE="font-size:36pt;color:red;">I<IMG SRC="exclaim.gif"/></FONT><FONT STYLE="color:red">M</FONT> WARNING: </P> -->
                <IMG SRC="../images/exclaim.gif"/>
                WARNING:
            </P>
            <P STYLE="margin-left:35px;margin-right:35px;">
                <xsl:apply-templates/>
            </P>
        </xsl:element>
        <P STYLE="margin-left:35px;margin-right:35px;margin-bottom:50px;"></P>
    </xsl:template>
    <!-- Might be better with smaller icon; forced prespace with large size "I" preceeding icon. -->

    <xsl:template match="regulation">

        <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
        <P STYLE="border:thin solid black;margin-right:50%;font-size:12pt;font-weight:bold;color:black;">
            <IMG SRC="../images/court.gif"/>
            GOVERNMENT REGULATION:
            <xsl:apply-templates/>
        </P>

        <P STYLE="margin-left:35px;margin-right:35px;margin-bottom:50px;"></P>
    </xsl:template>

    <!-- ******************** TABLE STYLES ******************** -->

    <xsl:template match="table">
        <xsl:element name="BR"> <!-- want break before table -->
        </xsl:element>
        <xsl:element name="TABLE">

            <xsl:attribute name="ID">
                <xsl:value-of select="@id"/>
            </xsl:attribute>

            <!--	<xsl:attribute name="STYLE">width:85%;border-width:1px;font-size:8pt;border:solid gray;</xsl:attribute>
            -->
            <xsl:attribute name="ALIGN">CENTER</xsl:attribute>

            <xsl:choose>
                <xsl:when test="@tblwidth[.='half-page']">
                    <xsl:attribute name="STYLE">width:65%;border-width:1px;font-size:8pt;border:solid gray;
                    </xsl:attribute>
                </xsl:when>
                <xsl:when test="@tblwidth[.='full-page']">
                    <xsl:attribute name="STYLE">width:95%;border-width:1px;font-size:8pt;border:solid gray;
                    </xsl:attribute>
                </xsl:when>
                <xsl:when test="@tblwidth[.='three-qtr-page']">
                    <xsl:attribute name="STYLE">width:75%;border-width:1px;font-size:8pt;border:solid gray;
                    </xsl:attribute>
                </xsl:when>
                <xsl:when test="@tblwidth[.='three-col']">
                    <xsl:attribute name="STYLE">width:60%;border-width:1px;font-size:8pt;border:solid gray;
                    </xsl:attribute>
                </xsl:when>
                <xsl:when test="@tblwidth[.='four-col']">
                    <xsl:attribute name="STYLE">width:70%;border-width:1px;font-size:8pt;border:solid gray;
                    </xsl:attribute>
                </xsl:when>

                <xsl:when test=".//con_toc">
                    <xsl:attribute name="STYLE">width:20%;border-width:1px;font-size:8pt;border:solid gray;
                    </xsl:attribute>
                </xsl:when>

                <!-- January 23, 2001  removes con_toc and makes the con_next and con_previous the same size

                 January 23, 2001
                -->

                <xsl:otherwise><!-- this should match the half-page -->
                    <xsl:attribute name="STYLE">width:65%;border-width:1px;font-size:8pt;border:solid gray;
                    </xsl:attribute>
                </xsl:otherwise>
            </xsl:choose>

            <xsl:attribute name="FRAME">ALL</xsl:attribute>
            <xsl:attribute name="RULES">ALL</xsl:attribute>
            <xsl:attribute name="CELLPADDING">6</xsl:attribute>
            <xsl:attribute name="COLS">
                <xsl:value-of select="tgroup/@cols"/>
            </xsl:attribute>
            <xsl:apply-templates/>
        </xsl:element>
        <P STYLE="margin-left:35px;margin-right:35px;margin-bottom:50px;"></P> <!-- want space after table for when table and then para are in step1 -->
    </xsl:template>

    <!-- don't do the following if the title is within a entry -->
    <!--	<xsl:template match="table//title"> -->
    <xsl:template match="table/title">
        <CAPTION>
            <B>
                <FONT SIZE="+1">
                    <xsl:apply-templates/>
                </FONT>
            </B>
        </CAPTION>
    </xsl:template>

    <xsl:template match="thead">
        <THEAD STYLE="background-color:#C0C0C0;">
            <xsl:apply-templates/>
        </THEAD>
    </xsl:template>

    <xsl:template match="tbody">
        <TBODY STYLE="background-color:#F0F0F0;">
            <xsl:apply-templates/>
        </TBODY>
    </xsl:template>

    <xsl:template match="row">
        <TR>
            <xsl:apply-templates/>
        </TR>
    </xsl:template>

    <!-- graphic within a entry -->

    <xsl:template match="entry//graphic">

        <xsl:if test="@type[.='jpeg']">
            <xsl:element name="IMG">
                <xsl:attribute name="SRC">
                    <xsl:value-of select="@filename"/>
                </xsl:attribute>
            </xsl:element>
        </xsl:if>
        <xsl:if test="@type[.$ne$'jpeg']">

            <xsl:element name="OBJECT">
                <xsl:attribute name="ID">CGM
                    <xsl:value-of select="@id"/>
                </xsl:attribute>

                <xsl:attribute name="WIDTH">100px</xsl:attribute>
                <xsl:attribute name="HEIGHT">100px</xsl:attribute>

                <xsl:attribute name="CLASSID">clsid:F5D98C43-DB16-11CF-8ECA-0000C0FD59C7</xsl:attribute>
                <xsl:attribute name="CODEBASE">/service/downloads/Acgm.cab#Version=7,0,5,0</xsl:attribute>
                <xsl:element name="PARAM">
                    <xsl:attribute name="NAME">FileName</xsl:attribute>
                    <xsl:attribute name="VALUE">./<xsl:value-of select="@filename"/>#zoom -fit
                    </xsl:attribute>
                </xsl:element>
            </xsl:element>
        </xsl:if>
        <xsl:apply-templates/>
    </xsl:template>

    <!-- end of graphic within a entry -->

    <xsl:template match="entry//para">
        <p>
            <xsl:apply-templates/>
        </p>
    </xsl:template>

    <!-- ********************* TABLE CELL/SPAN SECTION ************ -->
    <!-- To enable spans a "colspan" attr with the number of spanned columns must be included in the XML. -->
    <!-- This attr can be added by the authors, manually as a post-process, or with a special program. -->
    <!-- The span will start in the entry cell and count cols right.  Any empty entries to the right of the span -->
    <!--   must be completed with some text such as "na".  The numeric entity for a space can not be used for this purpose. -->

    <xsl:template match="tbody/row/entry">

        <!-- new January 23, 2001  removes con_toc and makes the con_next and con_previous the same size
        -->
        <xsl:choose>
            <xsl:when test="para/hotlnk/con_toc">
            </xsl:when>
            <xsl:when test="para/hotlnk/con_next">
                <xsl:element name="TD">
                    <xsl:attribute name="WIDTH">50</xsl:attribute>
                    <xsl:attribute name="ALIGN">CENTER</xsl:attribute>
                    <xsl:apply-templates/>
                </xsl:element>
            </xsl:when>
            <xsl:when test="para/hotlnk/con_previous">
                <xsl:element name="TD">
                    <xsl:attribute name="WIDTH">50</xsl:attribute>
                    <xsl:attribute name="ALIGN">CENTER</xsl:attribute>
                    <xsl:apply-templates/>
                </xsl:element>
            </xsl:when>
            <xsl:otherwise>

                <!-- new January 23, 2001
                -->
                <xsl:element name="TD">
                    <xsl:attribute name="ALIGN">
                        <xsl:value-of select="@align"/>
                    </xsl:attribute>
                    <xsl:attribute name="VALIGN">
                        <xsl:value-of select="@valign"/>
                    </xsl:attribute>
                    <xsl:apply-templates/>
                </xsl:element>

                <!-- new January 23, 2001
                -->
            </xsl:otherwise>
        </xsl:choose>

        <!-- new January 23, 2001
        -->
    </xsl:template>

    <xsl:template match="thead/row/entry">
        <xsl:element name="TH">
            <xsl:attribute name="ALIGN">
                <xsl:value-of select="@align"/>
            </xsl:attribute>
            <xsl:attribute name="VALIGN">
                <xsl:value-of select="@valign"/>
            </xsl:attribute>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="tbody/row/entry[@spanname]">
        <xsl:element name="TD">
            <xsl:attribute name="COLSPAN">
                <xsl:value-of select="@colspan"/>
            </xsl:attribute>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="thead/row/entry[@spanname]">
        <xsl:element name="TH">
            <xsl:attribute name="COLSPAN">
                <xsl:value-of select="@colspan"/>
            </xsl:attribute>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="randlist">
        <P/>
        <UL STYLE="margin-left:25;font-size:10pt;align:left">
            <xsl:apply-templates/>
        </UL>
    </xsl:template>

    <xsl:template match="randlist/item/para">
        <LI STYLE="margin-bottom:6;">
            <xsl:apply-templates/>
        </LI>
    </xsl:template>

    <!-- new (November 30, 2000) to account for some seldom used elements -->
    <xsl:template match="subscript">
        <xsl:element name="SUB">
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="supscript">
        <xsl:element name="SUP">
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>


    <!-- ******************** SERVICE SECTION STYLES ******************** -->

    <xsl:template match="svcsection">
        <xsl:element name="DIV">
            <xsl:attribute name="ID">
                <xsl:value-of select="@id"/>
            </xsl:attribute>
            <!-- remove Nov 22, 2000  <xsl:element name ="H2"><xsl:value-of select="@formnum"/>
              </xsl:element>	-->
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="apply">
        <!-- Phil added apply -->
        <P STYLE="background-color:#EEEEEE;text-align:left">
            <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;APPLIES TO
                <!-- <P STYLE="background-color:#EEEEEE;width:520px;text-align:left"><FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;APPLIES TO -->

                <!-- END NEW STUFF -->

            </FONT>
            <BR/>
            <xsl:apply-templates/>
        </P>
    </xsl:template>

    <xsl:template match="configure">
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!--   <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->

            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>

    <!-- May 22, 2002 -->
    <xsl:template match="manapply"><!-- dont want to display this since it is often only for internal use -->
    </xsl:template>

    <xsl:template match="custgroup">
        <BR/>Customer:
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="vendorgroup">
        <BR/>Vendor:
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="truckmodelgroup">
        <BR/>Model:
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="engfamgroup">
        <BR/>Engine Family:
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="ucodegroup">
        <BR/>Feature Code:
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="vendcodegroup">
        <BR/>Vendor Code:
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="cust">
        &#160;&#160;
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="vendor">
        &#160;&#160;
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="truckmodel">
        &#160;&#160;
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="engfam">
        &#160;&#160;
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="ucode">
        &#160;&#160;
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="vendcode">
        &#160;&#160;
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="startdate">
        &#160;Start Date:
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="enddate">
        &#160;End Date:
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="snrange">
        &#160;Serial Number Range:
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="horsepower">
        &#160;Horsepower:
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="tsinumber">
        <P align="right">
            <B>TSI Number:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="tsidate">
        <P align="right">
            <B>TSI Date:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="sfnnumber">
        <P align="right">
            <B>SFN Number:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="sfndate">
        <P align="right">
            <B>SFN Date:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="bcmnumber">
        <P align="right">
            <B>BCM Number:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="bcmdate">
        <P align="right">
            <B>BCM Date:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="ssmnumber">
        <P align="right">
            <B>SSM Number:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="ssmdate">
        <P align="right">
            <B>SSM Date:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="recallnumber">
        <H1 align="center">
            <FONT color="red">VEHICLE RECALL</FONT>
        </H1>
        <P align="right">
            <B>Recall Number:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="recalldate">
        <P align="right">
            <B>Recall Date:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="afcnum">
        <P align="right">
            <B>AFC Number:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="afcdate">
        <P align="right">
            <B>AFC Date:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="subjectfile">
        <P align="right">
            <B>Subject File:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="svcsection/subjectfile">
    </xsl:template>

    <xsl:template match="subject">
        <!-- next two lines are test to put box around subject -->
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!--  <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;text-align:left">
                    &#160;SUBJECT
                </FONT>
                <BR/>
                <P/>
                <!-- <P><FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;width:520px;text-align:left">&#160;SUBJECT </FONT><BR/> -->
                <!--
                <xsl:value-of/>
                -->
                <xsl:apply-templates/>
            </P>
        </xsl:element>
    </xsl:template>

    <xsl:template match="market">
        <P align="right">
            <B>Market:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="model">
        <P>Model:
            <xsl:apply-templates/>
        </P><!-- this is from wts -->
    </xsl:template>

    <xsl:template match="modelyr">
        <P>Model Year:
            <xsl:apply-templates/>
        </P>
    </xsl:template>

    <xsl:template match="engine">
        <P>Engine:
            <xsl:apply-templates/>
        </P>
    </xsl:template>

    <xsl:template match="tran">
        <P>Transmission:
            <xsl:apply-templates/>
        </P>
    </xsl:template>

    <xsl:template match="con_toc">
        Top of TOC
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="con_next">
        Next
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="con_previous">
        Previous
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="wtsdescrip">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">
                    <xsl:apply-templates/>
                </FONT>
                <BR/>
            </P>
        </xsl:element>
    </xsl:template>

    <!-- only want to do the following if attributes are present -->
    <xsl:template match="wtsproc">
        <xsl:if test="@wtscode[.>'']">
            <xsl:element name="H2">Operation<xsl:value-of select="@wtscode"/>,
                Group:
                <xsl:value-of select="@group"/>
            </xsl:element>
        </xsl:if>
        <xsl:apply-templates/>
    </xsl:template>

    <!--
    <xsl:template match="wtsproc">
      <xsl:element name ="H2">Operation: <xsl:value-of select="@wtscode"/>,
     Group: <xsl:value-of select="@group"/>
      </xsl:element>
     <xsl:apply-templates/>
     </xsl:template>
    -->
    <!-- new, May 7, 2001 -->
    <!--	<xsl:template match="sfn/sgmlhead"> -->
    <!-- new, Sept 17, 2002 -->
    <xsl:template match="sfn">

        <img src="../sfnfigures/Logo1clr.gif"/>
        <xsl:apply-templates/>
    </xsl:template>

    <!-- new, March 12, 2002 -->
    <!-- removed the title. It is only for search results -->
    <!--	<xsl:template match="sgmlhead/stitle"> -->
    <xsl:template match="stitle">
    </xsl:template>
    <!-- new, March 12, 2002 -->

    <xsl:template match="responex">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;ADMINISTRATIVE/DISTRIBUTOR
                    RESPONSIBILITY (EXPORT)
                </FONT>
                <BR/>
            </P>
        </xsl:element>
        <!-- the following was removed Oct 17, 2001 because it was hard coded in all recalls
        <P>Proceed immediately to make necessary corrections to units in inventory.
        <B>All inventory vehicles subject to this recall campaign must be corrected prior to sale, transfer or delivery.</B>
         If vehicles have been sold or transferred and you are in receipt of Customer Notification Letters and Authorization for Recall Service cards for those vehicles, transfer location or customer<B> must</B> be notified from your distributor location</P>
        <P>Export locations are to submit warranty claims in the usual manner making reference to this Safety Recall number.</P>
        -->
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="responuscan">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;ADMINISTRATIVE/DISTRIBUTOR
                    RESPONSIBILITY (U.S. &amp; POSSESSIONS)
                </FONT>
                <BR/>
            </P>
        </xsl:element>
        <!-- the following was removed Oct 17, 2001 because it was hard coded in all recalls
        <P>Proceed immediately to make necessary corrections to units in inventory.
        <B> All inventory vehicles subject to this recall campaign must be corrected prior to sale, transfer or delivery. </B>
         If vehicles have been sold or transferred and you are in receipt of Customer Notification Letters and Authorization for Recall Service cards for those vehicles, transfer location or customer <B>must</B> be notified from your distributor location</P>
        <P>The National Traffic and Motor Vehicle Safety Act, as amended, provides that each vehicle which is subject to a safety recall campaign must be adequately <B>repaired</B> within a reasonable time after the owner has tendered it for repair.
         A failure to adequately repair within <B>60 days </B>after a tender of a vehicle is prima facie evidence of failure to repair within a reasonable time.
         If the condition is not adequately repaired within 60 days, the owner may be entitled to <B>replacement </B>with an identical or reasonable equivalent vehicle at no charge,
         or to a <B>refund </B>of the purchase price less a reasonable allowance for depreciation.</P>
        <P>In order to avoid having to replace an owner vehicle or refund the purchase price, every effort must be made to promptly schedule an appointment with each owner to repair his vehicle as soon as possible.</P>
        -->
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="defect">
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;DEFECT
                    DESCRIPTION
                </FONT>
                <BR/>
            </P>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="label">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;CAMPAIGN
                    IDENTIFICATION LABEL
                </FONT>
                <BR/>
            </P>
        </xsl:element>
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="claims">
        <P STYLE="background-color:#EEEEEE;">
            <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;WARRANTY CLAIMS
            </FONT>
            <BR/>
        </P>
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="dist">
        <P>Distribution: All Dealers
            <xsl:apply-templates/>
        </P>
    </xsl:template>

    <xsl:template match="ownernote">
        <P/>
        <xsl:element name="DIV">
            <xsl:attribute name="STYLE">text-align:left;z-index:0;border:1px solid gray;</xsl:attribute>
            <!-- <xsl:attribute name="STYLE">width:520px;text-align:left;z-index:0;border:1px solid gray;</xsl:attribute> -->
            <P STYLE="background-color:#EEEEEE;">
                <FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">&#160;OWNER
                    NOTIFICATION
                </FONT>
                <BR/>
            </P>
        </xsl:element>
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="repro">
        <P>Reproduction: Not Required
            <xsl:apply-templates/>
        </P>
    </xsl:template>

    <xsl:template match="handling">
        <P>Handling:
            <xsl:apply-templates/>
        </P>
    </xsl:template>

    <xsl:template match="replace/tsinumber">
        <P align="right">
            <B>Replace:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="replace/ssmnumber">
        <P align="right">
            <B>Replace:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="replace/sfnnumber">
        <P align="right">
            <B>Replace:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="replace/bcmnumber">
        <P align="right">
            <B>Replace:
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <xsl:template match="revision">
        <P align="right">
            <B>
                <xsl:apply-templates/>
            </B>
        </P>
    </xsl:template>

    <!-- This can also be adapted to cover engine applicability. -->

    <xsl:template match="svcsubproc">
        <!-- April 19, 2001 -->
        <xsl:eval>reset()</xsl:eval>
        <xsl:eval>alphaReset()</xsl:eval>

        <xsl:element name="DIV">
            <xsl:attribute name="ID">
                <xsl:value-of select="@id"/>
            </xsl:attribute>
            <xsl:attribute name="STYLE">margin-left:35px;</xsl:attribute>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>
    <!-- Creates an additional 35px indent (added to <isis> 15px left margin) -->


    <!-- ******************** STEP AND LEV STYLES ******************** -->

    <!-- the following was changed (May 4, 2001) to make the steps line up better.
      This requires my program to add attribute count="1" to the first element following (within) a step element,
      so that I know where to put the auto number without having a paragraph break between it and the next paragraph.
      Can't use position() because MS IE 5.5 doesn't support it. -->

    <xsl:template match="step1/para">
        <!-- change to only check for para, since the others have other xsl logic that I don't want to interfere with -->
        <!-- 	<xsl:template match="step1/step2 | step1/para | step1/specpara | step1/table | step1/figure | step1/verbatim | step1/seqlist | step1/randlist | step1/deflist"> -->
        <xsl:choose>
            <xsl:when test="@count[.='1']">
                <p><xsl:eval>count()</xsl:eval>.
                    <xsl:apply-templates/>
                </p>
            </xsl:when>
            <xsl:otherwise>
                <p STYLE="margin-left:19px;">
                    <xsl:apply-templates/>
                </p>
            </xsl:otherwise>
        </xsl:choose>

        <!-- need to include separate code for step2, para, specpara, table, figure, verbatim, seqlist, randlist, deflist -->

    </xsl:template>

    <xsl:template match="step1">
        <xsl:eval>alphaReset()</xsl:eval>
        <xsl:apply-templates/>
    </xsl:template>

    <!--
        <xsl:template match="step1/para">
        <DIV STYLE="margin-bottom:-5px;">
        <P STYLE="position:relative;top:-35px;margin-left:21px;">
        <xsl:apply-templates/></P>
        </DIV>
        </xsl:template>

        <xsl:template match="step1">
        <xsl:eval>count()</xsl:eval>.
        <xsl:eval>alphaReset()</xsl:eval>
        <xsl:apply-templates/>
        </xsl:template>

    -->

    <!-- Because the step numbers are positioned using a left margin, ten and above will align -->
    <!-- 	left, thus moving 1 character space closer to the text.  -->

    <xsl:template match="step2/para">
        <!-- change to only check for para, since the others have other xsl logic that I don't want to interfere with -->
        <!-- <xsl:template match="step2/para | step2/specpara | step2/table | step2/figure | step2/verbatim | step2/seqlist | step2/randlist | step2/deflist"> -->
        <xsl:choose>
            <xsl:when test="@count[.='1']">
                <p STYLE="margin-left:19px;"><xsl:eval>alphaCount()</xsl:eval>.
                    <xsl:apply-templates/>
                </p>
            </xsl:when>
            <xsl:otherwise>
                <p STYLE="margin-left:38px;">
                    <xsl:apply-templates/>
                </p>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    <!--
        <xsl:template match="step2/para">
        <DIV STYLE="margin-bottom:-35px;margin-left:21px;">
        <P STYLE="position:relative;top:-35px;margin-left:20px;">
        <xsl:apply-templates/></P>
        </DIV>
        </xsl:template>

        <xsl:template match="step2">
        <xsl:eval>alphaCount()</xsl:eval>.
        <xsl:apply-templates/>
        </xsl:template>
    -->

    <xsl:template match="lev1/para">
        <DIV>
            <P>
                <xsl:apply-templates/>
            </P>
        </DIV>
    </xsl:template>

    <xsl:template match="lev2/para">
        <DIV>
            <P STYLE="margin-left:21px;">
                <xsl:apply-templates/>
            </P>
        </DIV>
    </xsl:template>


    <xsl:template match="abstract">
    </xsl:template>

    <!-- ******************** VERBATIM STYLES ******************** -->

    <!-- the next two are new as of March 4, 2003 -->

    <xsl:template match="verbatim">
        <P>
            <xsl:apply-templates/>
        </P>
    </xsl:template>

    <xsl:template match="line">
        <xsl:apply-templates/>
        <BR/>
    </xsl:template>

    <xsl:template match="address">
        <P>
            <xsl:apply-templates/>
        </P>
    </xsl:template>

    <xsl:template match="coname | street | state | zip">
        <xsl:apply-templates/>
        <BR/>
    </xsl:template>

    <xsl:template match="city">
        <xsl:apply-templates/>,
    </xsl:template>

    <!-- display notice if there are a lot of graphics so user knows to wait -->
    <!-- only want to do the following if graphiccount attribute is greater than 10 -->
    <xsl:template match="svcproc">

        <!-- Jan 24, 2005 -->

        <xsl:element name="DIV">
            <xsl:choose>

                <xsl:when test="@id[.>' ']">
                    <xsl:attribute name="ID">
                        <xsl:value-of select="@id"/>
                    </xsl:attribute>
                </xsl:when>

            </xsl:choose>

            <!-- end Jan 24, 2005 -->

        </xsl:element>

        <xsl:eval>reset()</xsl:eval>
        <xsl:eval>alphaReset()</xsl:eval>
        <xsl:choose>
            <xsl:when test="@graphiccount[.$lt$ 10]">
            </xsl:when>
            <xsl:otherwise>
                <xsl:if test="@graphiccount[.>'']">
                    <P>
                        <B>NOTE: There are a lot of graphics in this procedure. Please wait for them to load.
                            <xsl:value-of select="@graphiccount"/>
                            graphics.
                        </B>
                    </P>
                    <!-- <P STYLE="background-color:#EEEEEE;"><FONT STYLE="font-weight:bold;font-size:12pt;color:black;background-color:#EEEEEE;">There are a lot of graphics in this procedure. Please wait for them to load. <xsl:value-of select="@graphiccount"/> graphics.</FONT><BR/></P> -->
                </xsl:if>
            </xsl:otherwise>
        </xsl:choose>
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="meta">

    </xsl:template>


    <!-- Copyright 2005 International Truck and Engine Corporation-->
</xsl:stylesheet>