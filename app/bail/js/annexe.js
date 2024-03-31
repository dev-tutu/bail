

async function doc_download() {
  
  const documentMapping = {
    etat_des_lieux: { filename: 'etat-des-lieux-meuble.pdf', label: 'etat-des-lieux-meuble' },
    informations: { filename: 'notice_bail_pdf.pdf', label: 'notice_bail_pdf' },
    inventaire: { filename: 'Inventaire des meubles.pdf', label: 'inventaire_des_meubles' },
    charge: { filename: 'charges_recuperables_pdf.pdf', label: 'charges_recuperables' },
    reparation: { filename: 'reparation_locative_pdf.pdf', label: 'reparation_locative_pdf' },
    vetuster: { filename: 'bareme-de-remise-en-etat-et-grille-de-vetuste-1.pdf', label: 'bareme-de-remise-en-etat-et-grille-de-vetuste' },
    parking: { filename: 'contrat-bail-garage.pdf', label: 'contrat-bail-garage' },
    acte_caution: { filename: 'acte_cautionnement.pdf', label: 'acte_cautionnement' }
};



const mergedPdfDoc = await PDFLib.PDFDocument.create();

for (const document in choixDesDocuments) {
    if (choixDesDocuments[document]) {
        const { filename } = documentMapping[document];
        const response = await fetch(`./documents/location/${filename}`);
        const arrayBuffer = await response.arrayBuffer();
        const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);

        const copiedPages = await mergedPdfDoc.copyPages(pdfDoc, pdfDoc.getPageIndices());
        copiedPages.forEach((page) => {
            mergedPdfDoc.addPage(page);
        });
    }
}

const mergedPdfBytes = await mergedPdfDoc.save();

// Crée un objet Blob et un lien pour télécharger le document fusionné
const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
const link = document.createElement('a');
link.href = window.URL.createObjectURL(blob);
link.download = 'mon_dossier.pdf';
link.click();
}

  
  

        // Sélectionnez le bouton par son ID
        const createBailButton = document.getElementById('createBail');
  
        // Ajoutez un gestionnaire d'événements au bouton
        createBailButton.addEventListener('click', function() {
        
          const element = document.getElementById('allJs');

          // Options pour la conversion en PDF
          const options = {
              margin: 10,
              filename: 'mon_fichier.pdf',
              image: { type: 'jpeg', quality: 1},
              html2canvas: { scale: 2 },
              jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
          };

          html2pdf()
              .from(element)
              .set(options)
              .save();
          



          
          
        
        const checkboxes = document.querySelectorAll('.form-check-input');
          
        // Créez un objet pour stocker les valeurs
        const checkboxValues = {};
          
        // Parcourez les cases à cocher et stockez leurs valeurs
        checkboxes.forEach(checkbox => {
        const id = checkbox.id;
        const isChecked = checkbox.checked;
        checkboxValues[id] = isChecked;
        });
          
        
          
        doc_download();
        
        
        const fileInfos = document.querySelectorAll(".file-info");
        
          fileInfos.forEach(function (fileInfo) {
            const downloadLink = fileInfo.querySelector("a");
            if (downloadLink) {
              downloadLink.click();
            }
          })
          
          
        });



        