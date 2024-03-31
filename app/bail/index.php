<!DOCTYPE html>
<html lang="fr">

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"  crossorigin="anonymous">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"  crossorigin="anonymous">
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"  crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib/dist/pdf-lib.min.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" crossorigin="anonymous"></script>
  <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.0/html2pdf.bundle.min.js"></script>

  <link href="./app/bail/css/style.css" rel="stylesheet" />

  <title>Page divisée en deux</title>

</head>

<body>

  <ul class="menu">
    <li class="active menu rounded-div" data-div="div1"><i class="fas fa-bars"></i> Choix du modèle</li>
    <li class="menu rounded-div" data-div="div2"><i class="fas fa-building"></i> Bien</li>
    <li class="menu rounded-div" data-div="div3"><i class="fas fa-users"></i> Personnes</li>
    <li class="menu rounded-div" data-div="div4"><i class="fas fa-arrow-right"></i> Loyer & Charges</li>
    <li class="menu rounded-div" data-div="div5"><i class="fas fa-gavel"></i> Clauses</li>
    <li class="menu rounded-div" data-div="div6"><i class="fas fa-paperclip"></i> Annexes</li>
    <li class="menu rounded-div" data-div="div7"><i class="fas fa-file-export"></i> Téléchargement</li>
  </ul>

  <div class="container">

    <div class="left-column">

      <!-- Choix du modèle-->
      <div id="div1">

        <!-- type de location-->
        <div id="type_locationDiv1">
          <h1>Type de location</h1>

          <div class="button-container">

            <div class="button rounded-div" onclick="changeBackgroundColor(this, 'Location vide', 'type_location')">
              <label>Location vide</label>
            </div>

            <div class="button rounded-div" onclick="changeBackgroundColor(this, 'Location meublée', 'type_location')">
              <label>Location meublée</label>
            </div>

          </div>
        </div>

        <!-- type de beaux-->
        <div id="type_beauxDiv1">

          <br>
          <h1>Type de Beaux <span style="font-size:12px;"></span></h1>

          <div class="button-container">

            <div class="button rounded-div" onclick="changeBackgroundColor(this, 'Locataire seul', 'type_beaux')">
              <label>Locataire seul</label>
            </div>

            <div class="button rounded-div" onclick="changeBackgroundColor(this, 'Couple ou colocation', 'type_beaux')">
              <label>Couple ou colocation</label>
            </div>

            <div class="button rounded-div"
              onclick="changeBackgroundColor(this, 'Location à la chambre', 'type_beaux')">
              <label>Location à la chambre</label>
            </div>

          </div>

        </div>

        <!-- type de proprieter-->
        <div id="type_proprieterDiv1">

          <br>
          <h1>Type de propriétaire</h1>

          <div class="button-container">

            <div class="button rounded-div"
              onclick="changeBackgroundColor(this, 'Personne physique', 'type_proprietaire')">
              <label>Personne physique</label>
            </div>

            <div class="button rounded-div" onclick="changeBackgroundColor(this, 'SCI familiale', 'type_proprietaire')">
              <label>SCI familiale</label>
            </div>

            <div class="button rounded-div"
              onclick="changeBackgroundColor(this, 'Autre personne morale', 'type_proprietaire')">
              <label>Autre personne morale</label>
            </div>

          </div>
        </div>

      </div>

      <!-- Bien-->
      <div id="div2" style="display: none; " >

        <!-- descriptif du bien -->
        <div id='description_bienDiv2'>
          <h1>Descriptif du bien</h1>

          <div class="input-container">
            <label for="nb_piece">Nombre de pièces</label>
            <input type="text" id="nb_piece" name="nb_piece">
          </div>

          <div class="input-container">
            <label for="surface">Surface habitable</label>
            <input type="text" id="surface" name="surface">
          </div>

          <br>
          <div class="col-9.5 espace">
            <label for="adresse_bien">Adresse du logement</label>
            <input type="text" class="form-control" placeholder="Adresse" id='adresse_bien'>
          </div>
        </div>

        <div id="habitationDiv2">

          <br>
          <h1>Type d'habitation</h1>

          <div class="button-container">

            <div class="button rounded-div" onclick="changeBackgroundColor(this, 'individuel', 'type_habitation')">
              <label>Individuel</label>
            </div>

            <div class="button rounded-div" onclick="changeBackgroundColor(this, 'commun', 'type_habitation')">
              <label>Commun</label>
            </div>

          </div>
        </div>

        <div id="regimeJuridiqueDiv2">

          <br>
          <h1>Régime juridique de l’immeuble</h1>

          <div class="button-container">

            <div class="button rounded-div" onclick="changeBackgroundColor(this, 'individuel', 'type_regime')">
              <label>Indivision</label>
            </div>

            <div class="button rounded-div" onclick="changeBackgroundColor(this, 'copropriété', 'type_regime')">
              <label>Copropriété</label>
            </div>

          </div>
        </div>

        <div id="constructionDiv2">

          <br>
          <h1>Période de construction</h1>

          <div class="input-container">
            <label for="periode_construction">Année de construction</label>
            <input type="text" id="periode_construction" name="periode_construction">
          </div>
        </div>

        <div id="PartieDiv2">

          <br>
          <h1>Autres parties du logement</h1>

          <div id="ConstitutionTextareaLogement" class="mb-3">
            <label for="PartieLogement">Partie</label>
            <textarea class="form-control" id="PartieLogement"
              oninput="convertToList('PartieLogement','resultLogementList')"></textarea>
          </div>
        </div>

        <div id="EquipementPrivatifDiv2">

          <br>
          <h1>Locaux et équipements accessoires de l’immeuble privatif</h1>

          <div id="EquipementPrivatifTextarea" class="mb-3">
            <label for="PartieLogement">Equipements privatif</label>
            <textarea class="form-control" id="EquipementPrivatif"
              oninput="convertToList('EquipementPrivatif','resultLogementAccessoirePrivatif')"></textarea>
          </div>
        </div>

        <div id="EquipementCommunDiv2">

          <br>
          <h1>Locaux et équipements accessoires de l’immeuble commun</h1>

          <div id="EquipementCommunTextarea" class="mb-3">
            <label for="PartieLogement">Equipements commun</label>
            <textarea class="form-control" id="EquipementCommun"
              oninput="convertToList('EquipementCommun','resultLogementAccessoireCommun')"></textarea>
          </div>
        </div>

        <div id="Technologieiv2">

          <br>
          <h1>Équipement d’accès aux technologies</h1>

          <div id="EquipementPrivatifTextareaTechnologies" class="mb-3">
            <label for="PartieLogement">Technologies</label>
            <textarea class="form-control" id="technologie"
              oninput="convertToList('technologie','resultLogementCommunication')"></textarea>
          </div>
        </div>

        <div id="ConstitutionDiv2">

          <br>
          <h1>Éléments d’équipements du logement</h1>

          <div id="ConstitutionTextarea" class="mb-3">
            <label for="ConstitutionLogement">Equipement</label>
            <textarea class="form-control" id="ConstitutionLogement"
              oninput="convertToList('ConstitutionLogement','resultList')"></textarea>
          </div>
        </div>




        <div id="electDiv2">


          <h1>Type d'énergie pour le chauffage</h1>

          <div class="button-container">
            <div class="button rounded-div"
              onclick="changeBackgroundColor(this, 'electrique', 'type_energie_chauffage')">
              <label>electrique</label>
            </div>

            <div class="button rounded-div" onclick="changeBackgroundColor(this, 'gaz', 'type_energie_chauffage')">
              <label>gaz</label>
            </div>

          </div>

          <br>
          <h1>Modalité de production de chauffage</h1>

          <div class="button-container">

            <div class="button rounded-div"
              onclick="changeBackgroundColor(this, 'individuel', 'consomation_electrique')">
              <label>Individuel</label>
            </div>

            <div class="button rounded-div" onclick="changeBackgroundColor(this, 'commun', 'consomation_electrique')">
              <label>Commun</label>
            </div>

          </div>


        </div>


        <div id="eauDiv2">

          <h1>Type d'énergie pour l'eau chaude</h1>

          <div class="button-container">
            <div class="button rounded-div" onclick="changeBackgroundColor(this, 'electrique', 'type_energie_eau')">
              <label>electrique</label>
            </div>

            <div class="button rounded-div" onclick="changeBackgroundColor(this, 'gaz', 'type_energie_eau')">
              <label>gaz</label>
            </div>

          </div>

          <br>
          <h1>Modalité de production de l'eau chaude</h1>

          <div class="button-container">

            <div class="button rounded-div" onclick="changeBackgroundColor(this, 'individuel', 'consomation_eau')">
              <label>Individuel</label>
            </div>

            <div class="button rounded-div" onclick="changeBackgroundColor(this, 'commun', 'consomation_eau')">
              <label>Commun</label>
            </div>

          </div>
        </div>

      </div>

      <!-- Personnes -->

      <div id="div3" style="display: none;">

        <!-- proprietaire -->
        <div id="proprietaireDiv3">

        </div>

        <!-- locataire -->
        <div id="locatairesDiv3">

          <br>
          <h1>Locataires</h1>

          <div class="input-container">
            <label for="nom_locataire0">Nom</label>
            <input type="text" id="nom_locataire0" name="nom_locataire0">
          </div>

          <div class="input-container">
            <label for="prenom_locataire0">Prénom</label>
            <input type="text" id="prenom_locataire0" name="prenom_locataire0">
          </div>

          <div id="locataires"></div>


          <div id="btn-locataire">
            <button type="button" class="btn-pro btn-link pl-0 pt-0" id="ajouterLocataire">
              <i class="fas fa-plus" aria-hidden="true"></i>
              Ajouter un locataire
            </button>
          </div>
        </div>

      </div>


      <!-- Loyer & charges-->

      <div id="div4" style="display: none;">

        <!-- loyer -->
        <div id="loyerDiv4">
          <h1>Loyer</h1>

          <div class="input-container">
            <label for="loyerMensuel">Loyer mensuel hors charges</label>
            <input type="text" id="loyerMensuel" name="loyerMensuel">
          </div>

          <div class="input-container">
            <label for="depotGarantie">Dépôt de garantie</label>
            <input type="text" id="depotGarantie" name="depotGarantie">
          </div>

          <br>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridplafond" onchange="afficherPlafond()">
            <label class="form-check-label" for="gridplafond">
              Propriétaire représenté par un mandataire pour la signature
            </label>
          </div>

          <div id="plafond" style="display:none;">

            <div class="input-container">
              <label for="loyerMensuelRef">Loyer mensuel de référence</label>
              <input type="text" id="loyerMensuelRef" name="loyerMensuelRef">
            </div>

            <div class="input-container">
              <label for="loyerMensuelRefMaj">Loyer mensuel de référence majoré</label>
              <input type="text" id="loyerMensuelRefMaj" name="loyerMensuelRefMaj">
            </div>

            <div id="mandataireTextarea" class="mb-3">
              <label for="complementLoyer">Complément de loyer</label>
              <textarea class="form-control" id="complementLoyer"
                oninput="convertToList('complementLoyer','resultComplementLoyer')"></textarea>
            </div>

          </div>

          <!-- charges -->
          <div id="chargesDiv4">

            <br>
            <h1>Charges</h1>

            <div class="input-container">
              <label for="selectCharges">Type de charges</label>
              <select class="form-select" id="selectCharges">
                <option selected>---</option>
                <option value="provisions">Provisions sur charges</option>
                <option value="sans-provisions">Paiement périodique sans provisions</option>
                <option value="pas-charges">Absence de charges</option>
              </select>
            </div>

            <div class="input-container">
              <label for="montant_charge_mensuel">Montant mensuel des charges</label>
              <input type="text" id="montant_charge_mensuel" name="montant_charge_mensuel">
            </div>
          </div>

          <!-- indexation -->
          <div id="indexationDiv4">

            <br>
            <h1>Indexation du loyer</h1>

            <div class="input-container">
              <label for="trimRefIRL">Trimestre de référence pour l'IRL</label>
              <select class="form-select" id="trimRefIRL">
                <option value='' selected>--</option>
              </select>
            </div>

            <div class="input-container">
              <label for="dateRevisionLoyer">Date de révision du loyer</label>
              <select class="form-select" id="dateRevisionLoyer">
                <option value="anniversaire" selected>Date d'anniversaire du bail</option>
                <option value="suivant">1er du mois suivant l'anniversaire</option>
                <option value="janvier">1er janvier</option>
              </select>
            </div>

            <br><br>


            <div id="locataireChamps"></div>

          </div>

          <div id="AssuranceDiv4">

            <h1>Assurance habitation<span style="font-size:12px;"></span></h1>

            <div class="button-container">
              <div class="button rounded-div" onclick="changeBackgroundColor(this, 'locataire', 'type_assurance')">
                <label>Payer par le locataire</label>
              </div>

              <div class="button rounded-div" onclick="changeBackgroundColor(this, 'bailleur', 'type_assurance')">
                <label>Payer par le bailleur</label>
              </div>
            </div>

          </div>

          <div id="AbonnementsPrivatifsDiv4">

            <br>
            <h1>Abonnements Privatifs</h1>

            <div id="abonnementsTextarea" class="mb-3">
              <label for="abonnementsTextarea">Complément de loyer</label>
              <textarea class="form-control" id="abonnements"
                oninput="convertToList('abonnements','resultabonnementsTextarea')"></textarea>
            </div>





          </div>

          <!-- echeances -->
          <div id="echeancesDiv4">

            <br>
            <h1>Échéances</h1>

            <div class="input-container">
              <label for="dateEntree">Date d'entrée</label>
              <input type="date" id="dateEntree" name="dateEntree">
            </div>

            <div class="input-container">
              <label for="dureeContrat">Durée du contrat</label>
              <input type="text" id="dureeContrat" name="dureeContrat">
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="contrat"
                onchange="afficherTextarea('contrat','contratBlock')">
              <label class="form-check-label" for="contrat">Contrat inférieur à la durée légale</label>
            </div>

            <br>
            <div id="contratBlock" style="display:none;">
              <label for="textarearaisonJustifiant">Raison justifiant la réduction de la durée du bail</label>
              <textarea class="form-control" id="textarearaisonJustifiant"></textarea>
            </div>

            <br>
            <div class="input-container">
              <label for="PaiementLoyer">Le loyer est payé</label>
              <select class="form-select" id="PaiementLoyer">
                <option value="" selected>---</option>
              </select>
            </div>

            <br><br>
            <div class="button-container">

              <div class="button rounded-div"
                onclick="changeBackgroundColor(this, 'en avance pour le mois à venir', 'type_paiement')">
                <label>en avance pour le mois à venir</label>
              </div>

              <div class="button rounded-div"
                onclick="changeBackgroundColor(this, 'une fois le mois écoulé', 'type_paiement')">
                <label>une fois le mois écoulé</label>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Clauses -->
      <div id="div5" style="display: none;">


        <div id="clausesDiv5">
          <h1>Clauses génériques</h1>

          <div style="display: flex;">
            <!-- Premier tableau -->

            <table style="flex: 1;" id="clause">
              <tbody>

                <tr>
                  <td>Clause résolutoire</td>
                  <td>Animaux domestiques</td>
                </tr>

                <tr>
                  <td>Clause de solidarité</td>
                  <td>Assurance habitation du locataire </td>
                </tr>

                <tr>
                  <td>Visites pour relouer</td>
                  <td>Entretien annuels des appareils</td>
                </tr>

                <tr>
                  <td>Mode de paiement du loyer</td>
                  <td>Dégradations du locataire</td>
                </tr>

                <tr>
                  <td>Mise à disposition des meubles</td>
                  <td>Renonciation à la régularisation</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>




        <div id="myclauseDiv5">
          <br>
          <h1 id="myclause"></h1>

          <div class="form-group">
            <textarea class="form-control" id="myTextareaClause" rows="5"></textarea>
          </div>
        </div>
      </div>

      <div id="div6" style="display: none;">

        <h1>Annexes</h1>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="etat_des_lieux">
          <label class="form-check-label" for="etat_des_lieux">
            État des lieux
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="notice_information">
          <label class="form-check-label" for="notice_information">
            Notice d'information
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="inventaire_meubles">
          <label class="form-check-label" for="inventaire_meubles">
            Inventaire des meubles
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="charge">
          <label class="form-check-label" for="charge">
            Liste des charges récupérables
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="reparation_locative">
          <label class="form-check-label" for="reparation_locative">
            Liste des réparations locatives
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="calcul_degradation">
          <label class="form-check-label" for="calcul_degradation">
            Grille de vétusté pour calcul des dégradations
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="parking_independant">
          <label class="form-check-label" for="parking_independant">
            Modèle de bail pour un parking indépendant
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="acte_caution">
          <label class="form-check-label" for="acte_caution">
            Modèle acte de cautionnement
          </label>
        </div>

      

        <h1>Annexes à ajouter par le propriétaire</h1>

        <div id="file_prop"></div>

        <div id="chose_file" style="border: dashed black;">
          <h2>Ajouter un nouvel annexe</h2>

          <br>
          <div id="typeFile">
            <h3>Choisir un fichier (.pdf ou .jpg)</h3>
            <div class="custom-file col-sm-8 col-lg-6">
              <input type="file" id="file" lang="fr" class="custom-file-input" onchange="updateLabel()"
                accept=".pdf, .jpg">
              <label for="file" class="custom-file-label">Parcourir</label>
            </div>
          </div>

          <br>
          
          <div id="typeFileContain">
            <h3>Ce fichier contient </h3>
            <select id="fileType">
              <option value="diag_electrique">Diagnostique éléctrique</option>
              <option value="diag_gaz">Diagnostique gaz</option>
              <option value="diag_amiante">Diagnostique amiante</option>
              <option value="extrait_copro">Extrait du règlement de copropriété</option>
            </select>
          </div>

          <br>
          <div id="addFile">
            <h3>3. J'ajoute le fichier</h3>
            <button id="addMyFile" onclick="addFile()">Ajouter mon fichier</button>
          </div>
        </div>




      </div>

      <div id="div7" style="display: none;">

        <div>
          <div class="card px-4">
            <p class="h8 py-3">Détail du Paiement</p>
            <div class="row gx-3">
              <div class="col-12">
                <div class="d-flex flex-column">
                  <p class="text mb-1">Nom du titulaire</p>
                  <input class="form-control mb-3" type="text" placeholder="Name" value="Barry Allen">
                </div>
              </div>
              <div class="col-12">
                <div class="d-flex flex-column">
                  <p class="text mb-1">Numéro de carte</p>
                  <input class="form-control mb-3" type="text" placeholder="1234 5678 435678">
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex flex-column">
                  <p class="text mb-1">Date d'expiration</p>
                  <input class="form-control mb-3" type="text" placeholder="MM/YYYY">
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex flex-column">
                  <p class="text mb-1">CVV/CVC</p>
                  <input class="form-control mb-3 pt-2 " type="password" placeholder="***">
                </div>
              </div>
              <div class="col-12">
                <div class="btn btn-primary mb-3">
                  <span class="ps-3" style="color:white;">payer 5 euros</span>
                  <span class="fas fa-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button id="createBail">Download</button>
      </div>

      <div id="pre-suit">
        <button id='next-button' class="next-button" onclick="highlightNextMenuItem()">Suivant</button>
      </div>

    </div>



    <!-- Colonne du texte -->
    <div id="texte_section" class="right-column" style=" margin-top:5%;">


      <div id="allJs" style="page-break-before: always;">


        <div id="div1_text">


          <h1 style="text-align:center;">CONTRAT DE LOCATION OU DE COLOCATION LOGEMENT NU EN RÉSIDENCE PRINCIPALE</h1>

          <p>Conforme au contrat type défini à l’annexe 1 du décret n° 2015-587 du 29 mai
            2015.</p>

          <p>Soumis au titre Ier de la loi du 6 juillet 1989 tendant à améliorer les
            rapports locatifs et portant modification de la loi n° 86-1290 du 23 décembre 1986.</p>

          <p>Le présent contrat type de location contient uniquement les clauses essentielles du contrat dont la
            législation et la
            réglementation en vigueur au jour de sa publication imposent la mention par les parties dans le contrat. Il
            appartient cependant aux parties de
            s’assurer des dispositions applicables au jour de la conclusion du contrat.</p>

          <p>Le présent contrat type de location contient uniquement les clauses essentielles du contrat dont la
            législation et la
            réglementation en vigueur au jour de sa publication imposent la mention par les parties dans le contrat. Il
            appartient cependant aux parties de
            s’assurer des dispositions applicables au jour de la conclusion du contrat.</p>

          <h2 style="text-align:center;">I. DÉSIGNATION DES PARTIES</h2>

          <p>Le présent contrat est conclu entre les soussignés :</p>
          <p>Le bailleur</p>
          <div id="div3_AjoutProprio"></div>
          <p>Domiciliés : <span id="span_adresse_domiciliation"></span></p>
          <div id="representationMandataire"></div>
          <p>ci-après "le bailleur",</p>

          <p>Le(s) locataire(s)</p>
          <div id="div3_AjoutLocataire"></div>
          <p>ci-après "le(s) locataire(s)",</p>



          <p>Il a été convenu ce qui suit :</p>

        </div>





        <div id="div2_text">

          <h2 style="text-align:center;">II. Objet du contrat</h2>
          <br>

          <p>Le présent contrat a pour objet la location d’un logement ainsi déterminé :</p>

          <br>
          <h2 class="title">A. Consistance du logement<h2>

              <aside id="pConsistanceLogement">
                <p>Adresse du logement : <span id="adresse_logement"></span> </p>
                <p>Type d’habitat : <span id="span_type_habitation"></span></p>
                <p>Régime juridique de l’immeuble : <span id="span_type_juridique"></span></p>
                <p>Période de construction : <span id="span_periode_construction"></span></p>
                <p>Surface habitable : <span id="surface_habitable"></span>m²</p>
                <p>Nombre de pièces principales : <span id="nombre_place"></span></p>
                <p>Autres parties du logement : </p>
                <ul id="resultLogementList"></ul>
                <p>Éléments d’équipements du logement : </p>
                <ul id="resultList"></ul>
                <p>Modalité de production de chauffage : <span id="span_production_chauffage"></span></p>
                <p>Type d'énergie pour le chauffage : <span id="span_type_chauffage"></span></p>
                <p>Modalité de production d’eau chaude sanitaire : <span id="span_eau_sanitaire"></span></p>
                <p>Type d'énergie pour l'eau chaude : <span id="span_type_eau"></span></p>
              </aside>

              <h2 class="title">B.  Destination des locaux</h2>

              <p>Les locaux sont loués pour un usage exclusif d’habitation à titre de résidence principale</p>


              <h2 class="title">C.  Locaux et équipements accessoires de l’immeuble à usage privatif du locataire</h2>

              <ul id="resultLogementAccessoirePrivatif"></ul>

              <h2 class="title">D.  Locaux, parties, équipements et accessoires de l’immeuble à usage commun</h2>

              <ul id="resultLogementAccessoireCommun"></ul>

              <h2 class="title">E.  Équipement d’accès aux technologies de l’information et de la communication</h2>

              <ul id="resultLogementCommunication"></ul>







        </div>




        <div id="div3_text">




        </div>



        <div id="div4_text" class="section">

          <h2 style="text-align:center;">III. Date de prise d’effet et durée du contrat</h2>

          <p>La durée du contrat et sa date de prise d’effet sont ainsi définies :</p>

          <h2 class="title">A.  Date de prise d’effet du contrat</h2>

          <p>Date de prise d’effet du contrat : <span id="span_effet_contrat"></span></p>

          <h2 class="title">B.  Durée du contrat</h2>

          <p>Durée du contrat : <span id="span_duree_contrat">3 ans</span>
          <p>

          <div id="pRaisonJustifiant"></div>

          <p>En l’absence de proposition de renouvellement du contrat, celui-ci est, à son terme, reconduit tacitement
            pour 3 ou 6 ans et dans les mêmes conditions. Le locataire peut mettre fin au bail à tout moment, après
            avoir donné congé.
            Le bailleur, quant à lui, peut mettre fin au bail à son échéance et après avoir donné congé, soit pour
            reprendre le logement en vue de l’occuper
            lui-même ou une personne de sa famille, soit pour le vendre, soit pour un motif sérieux et légitime.</p>

          <h2 style="text-align:center;">IV. Conditions financières</h2>

          <p>Les parties conviennent des conditions financières suivantes :</p>

          <h2 class="title">A.  Loyer</h2>

          <p>1° Fixation du loyer initial</p>
          <p>a) Montant du loyer mensuel : <span id="span_montant_loyer"></span></p>
          <p>b) Modalités particulières de fixation initiale du loyer applicables dans certaines zones tendues :</p>
          <p>Le loyer du logement objet du présent contrat est soumis au décret fixant annuellement le montant maximum
            d’évolution
            des loyers à la relocation : <span id="span_zone_tendu"></span></p>

          <div id="plafonDiv4">


          </div>
          <p>Le loyer du logement objet du présent contrat est soumis au loyer de référence majoré fixé par arrêté
            préfectoral :
            <span id="span_arreter_prefectoral">NON</span>
          </p>

          <div id="dateDepart"></div>

          <p>2° Modalités de révision</p>
          <p>a) Date de révision : <span id="span_date_revision">date d'anniversaire du bail</span></p>
          <p>b) Date ou trimestre de référence de l’IRL : <span id="span_ref_irl"></span></p>
          <p>Le loyer sera révisé chaque année à la date indiquée précédemment, en comparant la variation annuelle du
            dernier indice
            IRL connu, ou de tout autre indice l’ayant remplacé.</p>




          <h2 class="title">B.  Charges récupérables</h2>

          <div id="chargeRecuperables">

            <p>Modalité de règlement des charges récupérables : <span id="span_provision">provisions sur charges</span></p>
            <p>Montant de la provision sur charges : <span id="span_montant_charge_mensuel"></span></p>
            <p>Cette provision pour charges pourra être réévaluée à chaque régularisation, à la hausse ou à la baisse,
              en fonction des charges réelles.</p>

          </div>


          <h2>C.  Souscription par le bailleur d’une assurance multi-risque habitation pour le compte du locataire ou
            des colocataires</h2>
          <p><span id="span_assurance">Payer par le locataire</span></p>



          <h2>D.  Souscription par le bailleur des abonnements privatifs</h2>


          <ul id="resultabonnementsTextarea"></ul>

          <h2>E.  Modalités de paiement</h2>

          <p>Périodicité du paiement : <span id="span_periodicite">mensuel</span></p>
          <p>Paiement : <span id="span_temps_paiement"></span></p>
          <p>Date ou période de paiement : <span id="span_date_paiement"></span></p>
          <p>Lieu de paiement : paiement reçu par le propriétaire</p>

          <table>
            <tbody>
              <tr class="c36">
                <td colspan="2" rowspan="1" class="c32">
                  <p class="c9">
                    <span class="c22 c8">Récapitulatif des sommes dues chaque mois par le locataire à partir de la
                      première échéance complète</span>
                  </p>
                </td>
              </tr>

              <tr class="c19">
                <td colspan="1" rowspan="1" class="c3">
                  <p class="c9"><span class="c2">Loyer mensuel
                    </span></p>
                </td>

                <td colspan="1" rowspan="1" class="c3">
                  <p class="c9"><span id="span_montant_loyerArray"> €</span></p>
                </td>

              </tr>

              <tr class="c19">
                <td colspan="1" rowspan="1" class="c3">
                  <p class="c9"><span class="c2">Provision/forfait de charges</span></p>
                </td>
                <td colspan="1" rowspan="1" class="c3">
                  <p class="c9"><span id="span_montant_charge_mensuel_array"> €</span></p>
                </td>
              </tr> <!----> <!---->

              <tr class="c19">
                <td colspan="1" rowspan="1" class="c3">
                  <p class="c9"><span class="c22 c8">Total</span></p>
                </td>

                <td colspan="1" rowspan="1" class="c3">
                  <p class="c9"><span id="span_total_loyer"> €</span></p>
                </td>
              </tr>
            </tbody>

          </table>

          <h2 style="text-align:center;">V. Travaux</h2>

          <h3>A.  Travaux bailleur entre deux locataires</h3>

          <p>Montant et nature des travaux d’amélioration ou de mise en conformité avec les caractéristiques de décence
            effectués
            depuis la fin du dernier contrat de location ou depuis le dernier renouvellement :</p>

          <h3>B.  Travaux bailleur en cours de bail</h3>

          <p>Majoration du loyer en cours de bail consécutive à des travaux d’amélioration entrepris par le bailleur :
          </p>

          <h3>C.  Travaux locataire en cours de bail</h3>

          <p>Diminution de loyer en cours de bail consécutive à des travaux entrepris par le locataire :</p>

          <h2 style="text-align:center;">VI. Garanties</h2>

          <p>Montant du dépôt de garantie de l’exécution des obligations du locataire : <span id="span_garantie"></span>
          </p>
          <p>En cas de co-titularité du bail, le dépôt de garantie ne sera restitué en intégralité que lors de la
            résiliation du
            contrat, une fois les locaux libérés.</p>
          <p>Il est enfin rappelé que le dépôt de garantie ne pourra pas être utilisé par le locataire en déduction du
            dernier
            loyer.</p>

        </div>



        <div id="div5_text" class="section">

          <h3 style="text-align:center;">VII. Clause de solidarité</h3>

          <p id="pSolodarite"></p>

          <h3 style="text-align:center;">VIII. Clause résolutoire</h3>

          <p>Modalités de résiliation de plein droit du contrat :</p>
          <p id="pClauseResilitation">
          <p>

          <br>
          <h3 style="text-align:center;">IX.    Honoraires</h3>

        </div>
        <div id="div6_text">

          <h2 style="text-align:center;">X. Autres conditions particulières</h2>

          <h3>Cautionnement : </h3>

          <h3>Droit de visite du bailleur</h3>

          <p id="pDroitVisite"></p>

          <h3>Modalités de paiement</h3>

          <p id="pModalitePaiement"></p>

          <h3>Mise à disposition des meubles</h3>

          <p id="pDispositionMeubles"></p>

          <h3>Renonciation à la régularisation au départ du locataire</h3>

          <p id="pRenonciationRegularisation"></p>

          <h3>Entretien des appareils de chauffage</h3>

          <p id="pEntretienAppareils"></p>

          <h3>Dégradations du locataire et grille de vétusté</h3>

          <p id="pDegradationLocataire"></p>

          <h3>Détention d’animaux</h3>

          <p id="pDetentionAnimaux"></p>

          <h3>Assurance habitation du locataire</h3>

          <p id="pAssuranceHabitation"></p>

        </div>
        <div id="div7_text">

          <h2 style="text-align:center;">XI. Annexes</h2>

          <p>Sont annexées et jointes au contrat de location les pièces suivantes :</p>

          <p id="annexe_acte_cautionnement"></p>
          <p id="annexe_etat_lieux"></p>
          <p id="annexe_notice_information"></p>
          <p id="annexe_inventaire_meubles"></p>
          <p id="annexe_charges_recuperable"></p>
          <p id="annexe_reparation_locative"></p>
          <p id="annexe_grille_vetuster"></p>
          <p id="annexe_parking"></p>

          <div id="autreAnnexe"></div>


          <p>Le <span id="span_date">____________</span> à <span id="span_city">____________</span></p>

          <div id="signatureDiv7">

          

          </div>

          


        </div>
      </div>

    </div>
  </div>
</body>

</html>

<script src="./app/bail/js/navigateur.js"></script>
<script src="./app/bail/js/insee.js"></script>
<script src="./app/bail/js/menu.js"></script>


<script src="./app/bail/js/div2.js"></script>
<script src="./app/bail/js/div3.js"></script>
<script src="./app/bail/js/div4.js"></script>
<script src="./app/bail/js/div5.js"></script>
<script src="./app/bail/js/div6.js"></script>
<script src="./app/bail/js/div1.js"></script>
<script src="./app/bail/js/annexe.js"></script>

