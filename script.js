document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ========================================== */
        /* CONFIGURATION D'UNE FENÊTRE               */
        /* ========================================== */

        function configurerFenetre(
            boutonId,
            fenetreId,
            fermerId
        ) {

            const bouton =
                document.getElementById(boutonId);

            const fenetre =
                document.getElementById(fenetreId);

            const fermer =
                document.getElementById(fermerId);


            if (
                !bouton ||
                !fenetre ||
                !fermer
            ) {
                return;
            }


            /* Ouvrir */

            bouton.addEventListener(
                "click",
                () => {

                    fenetre.showModal();

                }
            );


            /* Fermer avec la croix */

            fermer.addEventListener(
                "click",
                () => {

                    fenetre.close();

                }
            );


            /* Fermer en cliquant à l'extérieur */

            fenetre.addEventListener(
                "click",
                (event) => {

                    if (
                        event.target === fenetre
                    ) {

                        fenetre.close();

                    }

                }
            );

        }



        /* ========================================== */
        /* INSTAGRAM                                  */
        /* ========================================== */

        configurerFenetre(
            "ouvrir-instagram",
            "fenetre-instagram",
            "fermer-instagram"
        );



        /* ========================================== */
        /* TIKTOK                                     */
        /* ========================================== */

        configurerFenetre(
            "ouvrir-tiktok",
            "fenetre-tiktok",
            "fermer-tiktok"
        );


    }
);