<?php

    $menuBDD = $GLOBALS['database']->fetchAll("SELECT * FROM `menu_left` WHERE 1;");
    $active = array_fill(0, count($menuBDD), null);
    $name = "";

    foreach($menuBDD as $index => $page) {
        if(isset($_GET['page']) && $_GET['page'] == $page['txt'] ) {
            $active[$index] = "active";
            $name = ucfirst($page['txt']);
        }
    }



?>

<aside class='sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 ' id='sidenav-main'>
    <div class='sidenav-header'>
        <i class='fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none' aria-hidden='true' id='iconSidenav'></i>
       
        <a class='navbar-brand m-0' href='?'>
            <img src='./app/menu/logo-ct-dark.png' class='navbar-brand-img h-100' alt='main_logo'>
            <span class='ms-1 font-weight-bold'>RentalAssist</span>
        </a>
    </div>
    
    <hr class='horizontal dark mt-0'>
    
    <div class='' id='sidenav-collapse-main'>
        <ul class='navbar-nav'>


        <?php
        
           

            foreach($menuBDD as $index => $menu) {

                $titre = ucfirst($menu['txt']);
                $href = $menu['txt'];
                $logo = $menu['logo'];
                $color = $menu['color'];

                echo "
                    <li class='nav-item'>
                        <a class='nav-link $active[$index]' href='?page=$href'>
                            <div class='icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center'>
                                <i class='ni $logo $color text-sm opacity-10'></i>
                            </div>
                            <span class='nav-link-text ms-1'>$titre</span>
                        </a>
                    </li>
                ";
            }

        ?>

        </ul>
    </div>

    <div class='sidenav-footer mx-3 '>
        <a href='https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard' target='_blank' class='btn btn-dark btn-sm w-100 mb-3'>Documentation</a>
    </div>
</aside>