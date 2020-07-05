const DispensedTable = document.querySelector('#Pharmacylistdata1');
const Pharmacydispensed = (data) => {


    let htmldispensed = '';
    data.forEach(doc => {

        const patient = doc.data();
        // var PatientN0 = patient.getString("PatientNumber")
        const pd = `
    
     
                        <tr>
                           
                            <td>
                             ${patient.Time}
                            </td>
                            <td>
                              ${patient.PatientName}
                            </td>
                           
                        </tr>
                        

    
    
    `;

        htmldispensed += pd

    });


    DispensedTable.innerHTML = htmldispensed;





};




