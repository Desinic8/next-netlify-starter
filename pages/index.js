import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Desinic8 - Providing Affordable Classroom Management Tools</title>
        <link rel="icon" href="/Favicon.png" />
      </Head>

      <main>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">

        <header className="header">
            <div class="header__container">
                
                <a href="#" className="header__logo">YOUR LOGO</a>
    
                <div className="header__search">
                    <input type="search" placeholder="Search" class="header__input">
                    <box-icon name="search"></box-icon>
                </div>
    
                <div className="header__toggle">
                    <box-icon name="menu"></box-icon>
                </div>
            </div>
        </header>

        <!--========== NAV ==========-->
        <div className="nav" id="navbar">
            <nav className="nav__container">
                <div>
                    <a href="#" className="nav__link nav__logo">
                        <i class='bx bxs-disc nav__icon' ></i>
                        <span className="nav__logo-name">Bedimcode</span>
                    </a>
    
                    <div className="nav__list">
                        <div className="nav__items">
                            <h3 className="nav__subtitle">Profile</h3>
    
                            <a href="#" className="nav__link active">
                                <i class='bx bx-home nav__icon' ></i>
                                <span className="nav__name">Home</span>
                            </a>
                            
                            <div className="nav__dropdown">
                                <a href="#" className="nav__link">
                                    <i class='bx bx-user nav__icon' ></i>
                                    <span className="nav__name">Profile</span>
                                    <i class='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                </a>

                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                        <a href="#" className="nav__dropdown-item">Passwords</a>
                                        <a href="#" className="nav__dropdown-item">Mail</a>
                                        <a href="#" className="nav__dropdown-item">Accounts</a>
                                    </div>
                                </div>
                            </div>

                            <a href="#" className="nav__link">
                                <i class='bx bx-message-rounded nav__icon' ></i>
                                <span className="nav__name">Messages</span>
                            </a>
                        </div>
    
                        <div className="nav__items">
                            <h3 className="nav__subtitle">Menu</h3>
    
                            <div className="nav__dropdown">
                                <a href="#" className="nav__link">
                                    <i class='bx bx-bell nav__icon' ></i>
                                    <span className="nav__name">Notifications</span>
                                    <i class='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                </a>

                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                        <a href="#" className="nav__dropdown-item">Blocked</a>
                                        <a href="#" className="nav__dropdown-item">Silenced</a>
                                        <a href="#" className="nav__dropdown-item">Publish</a>
                                        <a href="#" className="nav__dropdown-item">Program</a>
                                    </div>
                                </div>

                            </div>

                            <a href="#" className="nav__link">
                                <i class='bx bx-compass nav__icon' ></i>
                                <span className="nav__name">Explore</span>
                            </a>
                            <a href="#" className="nav__link">
                                <i class='bx bx-bookmark nav__icon' ></i>
                                <span className="nav__name">Saved</span>
                            </a>
                        </div>
                    </div>
                </div>

                <a href="#" className="nav__link nav__logout">
                    <i class='bx bx-log-out nav__icon' ></i>
                    <span className="nav__name">Log Out</span>
                </a>
            </nav>
        </div>
        <main>
            <section>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vel illum fuga unde cum, voluptates magni molestias eveniet culpa autem ut, totam veniam, suscipit tempore ullam pariatur est at asperiores?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vel illum fuga unde cum, voluptates magni molestias eveniet culpa autem ut, totam veniam, suscipit tempore ullam pariatur est at asperiores?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vel illum fuga unde cum, voluptates magni molestias eveniet culpa autem ut, totam veniam, suscipit tempore ullam pariatur est at asperiores?</p>
            </section>
        </main>
      </main>

      <Footer />
    </div>
  )
}
