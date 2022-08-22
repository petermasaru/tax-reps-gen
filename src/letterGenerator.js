import react, { useState } from 'react'
import html2pdf from 'html2pdf.js'
import { sideLetterReps } from './CFCRep'

export function LetterGenerator() {

    const rep1 = sideLetterReps.rep1
    const rep2 = sideLetterReps.rep2
    const rep3 = sideLetterReps.rep3
    const rep4 = sideLetterReps.rep4
    const rep5 = sideLetterReps.rep5
    const rep6 = sideLetterReps.rep6
    const rep7 = sideLetterReps.rep7
    const rep8 = sideLetterReps.rep8
    const rep9 = sideLetterReps.rep9
    const rep10 = sideLetterReps.rep10
    const rep11 = sideLetterReps.rep11
    const rep12 = sideLetterReps.rep12
    const rep13 = sideLetterReps.rep13


    let [companyName, updateCompanyName] = useState('')
    let [fundName, updateFundName] = useState('')

    let [corpType, updateCorpType] = useState('')
    let [corpGeo, updateCorpGeo] = useState('')

    let [flowThrough, updateVarA] = useState(false)
    let [foreignStatus, updateVarB] = useState(false)
    let [investmentType, updateType] = useState()
    let [activityType, updateActType] = useState()

    function inputCompanyName(name) {
        updateCompanyName(name)
    }

    function companyNameHandler(e) {
        inputCompanyName(e.target.value)
    }

    function inputFundName(name) {
        updateFundName(name)
    }

    function fundNameHandler(e) {
        inputFundName(e.target.value)
    }

    function inputCorpType(type) {
        updateCorpType(type)
    }

    function corpTypeHandler(e) {
        inputCorpType(e.target.value)
    }

    function inputCorpGeo(type) {
        updateCorpGeo(type)
    }

    function corpGeoHandler(e) {
        inputCorpGeo(e.target.value)
    }

    function toggleVarA() {
        if (flowThrough === false) {
            updateVarA(true)
        } else {
            updateVarA(false)
        }
    }

    function toggleVarB() {
        if (foreignStatus === false) {
            updateVarB(true)
        } else {
            updateVarB(false)
        }
    }

    function updateInvType(type) {
        updateType(type)
    }

    function invTypeHandler(e) {
        updateInvType(e.target.value)
        console.log(investmentType)
    }

    function toggleActType(type) {
        updateActType(type)
    }

    function actTypeHandler(e) {
        toggleActType(e.target.value)
        console.log(activityType)
    }

    const saveToStorage = () => {
        localStorage.setItem(companyName, Date)
    }

    function returnLetter() {

        // Domestic Passthrough Letters

        if (flowThrough && !foreignStatus && investmentType === 'Equity' && activityType === 'Holding Company') {
            return (
                <ol>
                    <li><b>Holding Company Representations. </b>{rep12}</li><br></br>
                    <li><b>Tax Allocation Representation. </b>{rep6}</li><br></br>
                </ol>
            )
        }

        else if (flowThrough && !foreignStatus && investmentType === 'Convertible' && activityType === 'Holding Company') {
            return (
                <div>
                    <ol>
                        <li><b>Holding Company Representations. </b>{rep12}</li><br></br>            <li>{rep6}</li><br></br>
                        <p>IF UNABLE TO SIGN FOR THE ABOVE, PLEASE DELETE BEFORE EXECUTING</p>
                        <li><b>Agreement to Convert into C-Corporation. </b>{rep10}</li><br></br>
                        <li><b>Notice of Conversion. </b>{rep11}</li><br></br>
                    </ol>
                </div>
            )
        }

        else if (flowThrough && !foreignStatus && investmentType === 'Equity' && activityType === 'Operating Company') {
            return (
                <ol>
                    <li><b>Distributions for Tax Allocations. </b>{rep8}</li><br></br>
                    <li><b>Investor Tax Blocker Structure. </b>{rep9}</li><br></br>
                </ol>
            )
        }

        else if (flowThrough && !foreignStatus && investmentType === 'Convertible' && activityType === 'Operating Company') {
            return (
                <ol>
                    <li><b>Agreement to Convert into C-Corporation. </b>{rep10}</li><br></br>
                    <li><b>Notice of Conversion. </b>{rep11}</li><br></br>
                </ol>
            )
        }

        // Foreign Passthrough

        else if (!flowThrough && foreignStatus && investmentType === 'Convertible') {
            return (
                <ol>
                    <li><b>Agreement to make standard reps. </b>{rep13}</li><br></br>
                    <li><b>CFC Representations. </b>{rep1}</li><br></br>
                    <li><b>PFIC Representation. </b>{rep2}</li><br></br>
                    <li><b>Entity Classification Representation. </b>{rep3}</li><br></br>
                    <li><b>General. </b>{rep7}</li><br></br>
                </ol>
            )
        }

        else if (!flowThrough && foreignStatus && investmentType === 'Equity') {
            return (
                <ol>
                    <li><b>CFC Representations. </b>{rep1}</li><br></br>
                    <li><b>PFIC Representation. </b>{rep2}</li><br></br>
                    <li><b>Entity Classification Representation. </b>{rep3}</li><br></br>
                    <li><b>General. </b>{rep7}</li><br></br>
                </ol>
            )
        }

        else if (flowThrough && foreignStatus && investmentType === 'Convertible') {
            return (
                <ol>
                    <li><b>Holding Company Representations. </b>{rep12}</li><br></br>
                    <li><b>CFC Representations. </b>{rep1}</li><br></br>
                    <li><b>PFIC Representation. </b>{rep2}</li><br></br>
                    <li><b>Entity Classification Representation. </b>{rep4}</li><br></br>
                    <li><b>Foreign Partnership Representation. </b>{rep5}</li><br></br>
                    <li><b>Tax Allocation Representation. </b>{rep6}</li><br></br>
                    <li><b>General. </b>{rep7}</li><br></br>
                </ol>
            )
        }

        else if (flowThrough && foreignStatus && investmentType === 'Equity') {
            return (
                <ol>
                    <li><b>CFC Representations. </b>{rep1}</li><br></br>
                    <li><b>PFIC Representation. </b>{rep2}</li><br></br>
                    <li><b>Entity Classification Representation. </b>{rep4}</li><br></br>
                    <li><b>Foreign Partnership Representation. </b>{rep5}</li><br></br>
                    <li><b>Tax Allocation Representation. </b>{rep6}</li><br></br>
                    <li><b>General. </b>{rep7}</li><br></br>
                    <p>IF UNABLE TO SIGN FOR THE ABOVE, PLEASE DELETE BEFORE EXECUTING</p>
                    <li><b>Distributions for Tax Allocations. </b>{rep8}</li><br></br>
                    <li><b>Investor Tax Blocker Structure. </b>{rep9}</li><br></br>
                </ol>
            )
        }

        else {
            return "You don't need a side letter here"
        }
    }

    function Export2Doc() {

        var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
        var postHtml = "</body></html>";

        var html = preHtml + document.getElementById('PreviewLetter').innerHTML + postHtml;

        var blob = new Blob(['\ufeff', html], {
            type: 'application/msword'
        });

        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);


        let filename = `${companyName} - ` + 'Tax Reps Side Letter' + '.doc'


        var downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {

            downloadLink.href = url;
            downloadLink.download = filename;
            downloadLink.click();
        }

        document.body.removeChild(downloadLink);

        saveToStorage()
    }

    return (
        <div className="LetterGenerator">
            <label for='fundNameInput'>What is the fund's legal name?</label><br></br>
            <input className='inputBox' type='text' onChange={fundNameHandler} id='companyNameInput'></input>
            <br></br>
            <br></br>

            <label for='companyNameInput'>What is the company's legal name?</label><br></br>
            <input className='inputBox' type='text' onChange={companyNameHandler} id='companyNameInput'></input>
            <br></br>
            <br></br>

            <label for='flowThrough'>Is the company structured as a flowthrough (e.g. an LLC)?</label>
            <input type='checkbox' onChange={toggleVarA} id='flowThrough'></input>
            <br></br>
            <br></br>

            <label for='foreignStatus'>Is the company incorporated outside of the US?</label>
            <input type='checkbox' onChange={toggleVarB} id='foreignStatus'></input>
            <br></br>
            <br></br>

            <label for='corpTypeInput'>What kind of company is this?</label><br></br>
            <input className='inputBox' type='text' onChange={corpTypeHandler} id='companyNameInput'></input>
            <br></br>
            <br></br>

            <label for='corpGeoInput'>Where is the Company incorporated?</label><br></br>
            <input className='inputBox' type='text' onChange={corpGeoHandler} id='corpGeoInput'></input>
            <br></br>
            <br></br>

            <label for="invType">What type of investment is this?</label><br></br>
            <select name="investment_type" id="invType" onChange={invTypeHandler}>
                <option value="">--Please choose an option--</option>
                <option value="Equity" >Equity</option>
                <option value="Convertible">Convertible</option>
            </select>
            <br></br>
            <br></br>

            <label for="actType">Is the company a Holdco or OpCo?</label><br></br>
            <select name="activity_type" id="actType" onChange={actTypeHandler}>
                <option value="">--Please choose an option--</option>
                <option value="Holding Company" >Holding Company</option>
                <option value="Operating Company">Operating Company</option>
            </select>
            <br></br>
            <br></br>

            <button style={{
                backgroundColor: 'rgb(64, 57, 168)',
                border: 'none',
                width: '15rem',
                fontFamily: 'HelveticaNeue-bold',
                color: 'white',
                padding: '5px',
                borderRadius: '5px',
                cursor: 'pointer'
            }} onClick={Export2Doc}>Download Word Doc</button><br></br>


            <div id='PreviewLetter' style={{ display: 'none', color: 'rgb(242, 244, 247)' }}>
                <p><b>{fundName}</b></p>
                <p>PO Box 3217, <br></br>Seattle, WA 98114
                </p>
                <p>Dear {fundName},</p>
                <p>

                    This letter will confirm our agreement that pursuant to and effective as of your purchase of securities issued by {companyName}, a {corpType} organized under the laws of {corpGeo} (the “Company”), {fundName}, a Delaware Limited Partnership (the “Investor”), shall be entitled to the following contractual rights:

                </p>
                <p>{returnLetter()}</p><br></br>

                <h3>{companyName}</h3>
                <p>By: _____________________</p>
                <p>Name:</p>
                <p>Title:</p>
                <p>Date:</p>
            </div>
        </div >
    );
};

export default LetterGenerator;