var nav = `  <!-- Header Section -->
    <header>
        <!-- Your previously created header code -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div class="container-fluid">
                <!-- Left Side: Logo -->
                <a class="navbar-brand" href="./Index.html">
                    <img src="./Assets/Images/logo2.jpg" alt="logo" class="logo1" width="100">
                </a>

                <!-- Toggle Button for Mobile -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#auctionNavbar" aria-controls="auctionNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Middle: Menu Bar with Drop-down Categories -->
                <div class="collapse navbar-collapse" id="auctionNavbar">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        
                        <!-- Additional Menu Items -->
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact-us.html">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about-us.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="disclaimer.html">Disclaimer</a>
                        </li>

                        <!-- Categories Dropdown -->
                        <li class="nav-item dropdown ms-lg-auto ms-0">
                            <a class="nav-link dropdown-toggle" href="#" id="categoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="categoriesDropdown">
                                <li><a class="dropdown-item" href="./Antique-Painting.html">Antique Paintings</a></li>
                                <li><a class="dropdown-item" href="./Aqeel File/index.html">Unique Number Plates</a></li>
                                <li class="dropdown-submenu dropend">
                                    <a class="dropdown-item dropdown-toggle" href="./Warda File/index.html">Furniture</a>
                                    <ul class="dropdown-menu dropend">
                                        <li><a class="dropdown-item" href="./Warda File/index.html">Chairs</a></li>
                                        <li><a class="dropdown-item" href="./Warda File/index.html">Tables</a></li>
                                        <li><a class="dropdown-item" href="./Warda File/index.html">Sofa</a></li>
                                        <li><a class="dropdown-item" href="./Warda File/index.html">Bed</a></li>
                                        <li><a class="dropdown-item" href="./Warda File/index.html">Dining Tables</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <a class="dropdown-item dropdown-toggle" href="./Ayesha File/index.html">Watches</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="./Ayesha File/index.html">Smart Watches</a></li>
                                        <li><a class="dropdown-item" href="./Ayesha File/index.html">Dress Watches</a></li>
                                        <li><a class="dropdown-item" href="./Ayesha File/index.html">Stand Clocks</a></li>
                                        <li><a class="dropdown-item" href="./Ayesha File/index.html">Wall Clocks</a></li>
                                        
</li>
                                    </ul>
                                </li>                         
                            </ul>
                        </li>
                        
                    </ul>
                    <div class="d-flex">
                        <a href="Reg-form.html" class="btn btn-outline-primary me-2">Login</a>
                        <a href="Reg-form.html" class="btn btn-primary">Sign Up</a>
                    </div>
                </div>

                <!-- Right Side: Login and Sign-Up Buttons -->
                
            </div>
        </nav>
    </header>`


var footer = `    <!-- Footer Section -->
    <footer class="bg-dark text-white pt-5 pb-4">
        <div class="container text-md-left">
            <div class="row text-md-left">
                <!-- First Section: Logo and Description -->
                <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Auction Table</h5>
                    <p>
                        Auction Table is your premier destination for online auctions. Bid on a wide variety of items, from art and electronics to vehicles and real estate. Join our community today!
                    </p>
                </div>

                <!-- Second Section: Quick Links -->
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="Index.html" class="text-white text-decoration-none">Home</a></li>
                        <li class="mb-2"><a href="contact-us.html" class="text-white text-decoration-none">Contact Us</a><li>
                        <li class="mb-2"><a href="about-us.html" class="text-white text-decoration-none">About Us</a></li>
                        <li class="mb-2"><a href="disclaimer.html" class="text-white text-decoration-none">Disclaimer</a><li>
                        <li class="mb-2"><a href="unique-painting.html" class="text-white text-decoration-none">Categories</a><li>
                    </ul>
                </div>

                <!-- Third Section: Social Links -->
                <div class="col-md-5 col-lg-5 col-xl-5 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Follow Us</h5>
                    <a href="https://www.facebook.com/" class="text-white me-4" target="_blank">
                        <i class="bi bi-facebook" style="font-size: 1.5rem;"></i>
                    </a>
                    <a href="https://x.com/?lang=en" class="text-white me-4" target="_blank">
                        <i class="bi bi-twitter" style="font-size: 1.5rem;"></i>
                    </a>
                    <a href="https://www.instagram.com/" class="text-white me-4" target="_blank">
                        <i class="bi bi-instagram" style="font-size: 1.5rem;"></i>
                    </a>
                    <a href="https://pk.linkedin.com/" class="text-white me-4" target="_blank">
                        <i class="bi bi-linkedin" style="font-size: 1.5rem;"></i>
                    </a>
                    <a href="https://www.youtube.com/" class="text-white" target="_blank">
                        <i class="bi bi-youtube" style="font-size: 1.5rem;"></i>
                    </a>
                </div>
            </div>

            <hr class="mb-4">

            <!-- Copyright -->
            <div class="row align-items-center">
                <div class="col-md-7 col-lg-8">
                    <p>
                        © 2024 Auction Table. All rights reserved.
                    </p>
                </div>
                <!-- Optional: Additional Footer Content -->
                <div class="col-md-5 col-lg-4">
                    <div class="text-md-end">
                        <a href="privacy-policy.html" class="text-white text-decoration-none me-3">Privacy Policy</a>
                        <a href="terms-&-condition.html" class="text-white text-decoration-none">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
`