var upcoming_articles = [
    {
        text: "ACCOMPANIST",
        title: "Lunchtime Concert",
        abstract: "12:30pm, April 26th 2024<br>St. Chad's Church, Birmingham B4 6EU"
    },
    {
        text: "REPETITEUR",
        title: "<em>NEW YEAR</em>- Michael Tippett",
        abstract: "April-July, 2024<br>Birmingham Opera Company"
    },
    {
        text: "ACCOMPANIST",
        title: "Voice and Piano Concert with Ana Salaridze",
        abstract: "14:00pm, June 12nd 2024<br>Hagley Road Retirement Village, Birmingham B17 8BH"
    },
    {
        text: "REPETITEUR",
        title: "Royal Birmingham Conservatoire Summer Opera<br><em>HANSEL&GRETEL</em>- Engelbert Humperdinck",
        abstract: "Director <strong>Matthew Eberhardt</strong><br>Conductor <strong>Paul Wingfield</strong>" +
            "May-June 2024<br>Royal Birmingham Conservatoire, Birmingham B4 7XR"
    },
    {
        text: "CHMABER PIANIST",
        title: "Charity Concert with Chian-Chian Hsu",
        abstract: "Programme: Francois Francoeur <em>Cello Sonata in E Major</em><br>15pm, June 15th 2024<br>Gilden's Art Gallery, 74 Heath St, London NW3 1DN"
    },
    {
        text: "CHMABER PIANIST",
        title: "Concert with Chian-Chian Hsu",
        abstract: "Programme: John Ireland- <em>Sonata for Cello and Piano</em><br>" +
            "           Francois Francoeur-<em>Cello Sonata in E Major</em><br>" +
            "13:10pm, July 10th 2024<br>Handsworth St Mary, Birmingham B20 2RW"
    },
    {
        text: "ACCOMPANIST",
        title: "Voice and Piano Concert with Ana Salaridze",
        abstract: "13:00pm, August 7th 2024<br>Church of the Holy Trinity, Stratford-Upon-Avon, CV37 6BG"
    },
    {
        text: "ACCOMPANIST",
        title: "Voice and Piano Concert with Matthew Pandya",
        abstract: "13:00pm, September 4th 2024<br>Church of the Holy Trinity, Stratford-Upon-Avon, CV37 6BG"
    },
]
var recent_articles = [
    {
        text: "ACCOMPANIST",
        title: "Putting it Together, the Sondheim Review (Music& Lyrics by Stephen Sondheim)",
        abstract: "19:00, March 22nd 2024<br>Seven Artspace, Chapel Allerton, Leeds, LS7 3PD"
    },
    {
        text: "ACCOMPANIST",
        title: "Putting it Together, the Sondheim Review (Music& Lyrics by Stephen Sondheim)",
        abstract: "19:00, March 19th 2024<br>The Recital Hall, Royal Birmingham Conservatoire, Birmingham B4 7XR"
    },
    {
        text: "REPETITEUR",
        title: "Royal Birmingham Conservatoire Spring Opera<br>" +
            "<em>Cinderella</em>— Jules Massenet ",
        abstract: "Director <strong>Matthew Eberhardt</strong><br>Conductor <strong>Paul Wingfield</strong><br>February-March 2024<br>Royal Birmingham Conservatoire, Birmingham B4 7XR"
    },
    {
        text: "ACCOMPANIST",
        title: "Singing Songs from the Shows",
        abstract: "19:30pm, December 1st 2023<br>Shenstone Community Library, Shenstone, Lichfield WS14 0NF"
    },
    {
        text: "REPETITEUR",
        title: "Royal Birmingham Conservatoire Opera Scenes",
        abstract: "Musical Director <strong>Berrak Dyer</strong><br>Director <strong>Rebecca Meltzer</strong><br>November 2023<br>The Lab, Royal Birmingham Conservatoire, Birmingham B4 7XR"
    },
    {
        text: "CHMABER PIANIST",
        title: "The Walbrook Music Trust Concert with Chian-Chian Hsu",
        abstract: "Programme: Antonio Vivaldi- <em>Cello Sonata no.4 in B-flat Major, RV 45</em><br>" +
                  "           Robert Schumann- <em>Fantasiestücke, Op.73</em>" +
                  "           Benjamin Britten- <em>Sonata for Cello and Piano in C Major, op.65</em><br>13:00pm October 17th 2023" +
            "St Stephen Walbrook, 39 Walbrook, London EC4N 8BN"
    }
]

function play() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
        <header id="masthead" class="s-header">
            <div class="s-header__branding">
                <p class="site-title">
                    <a href="index.html" rel="home">Yeeching Lau.</a>
                </p>
            </div>

            <div class="row s-header__navigation">
                <nav class="s-header__nav-wrap">

                    <h3 class="s-header__nav-heading">Navigate to</h3>

                    <ul class="s-header__nav">
                    <li class="current-menu-item"><a href="index.html" title="">HOME</a></li>
                    <li><a href="about.html" title="">BIOGRAPHY</a></li>
                    <li class="has-children">
                        <a href="#0" title="" class="">DIARY</a>
                        <ul class="sub-menu">
                            <li><a href="upcoming.html">Upcoming</a></li>
                            <li><a href="recent.html">Recent Engagements</a></li>
                        </ul>
                    </li>
                    <li class="has-children">
                        <a href="#0" title="" class="">GALLERY</a>
                        <ul class="sub-menu">
                            <li><a href="photos.html">Photos</a></li>
                            <li><a href="videos.html">Videos</a></li>
                        </ul>
                    </li>
                    <li class="has-children">
                        <a href="#0" title="" class="">REPERTOIRE</a>
                        <ul class="sub-menu">
                            <li><a href="rep_list.html">Repertoire List</a></li>
                            <li><a href="sample.html">Sample Programmes</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html" title="">CONTACT</a></li>

                </nav> <!-- end s-header__nav-wrap -->

            </div> <!-- end s-header__navigation -->

            <a class="s-header__menu-toggle" href="#0"><span>Menu</span></a>
            <a class="s-header__search-trigger" href="#">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z">
                    </path>
                </svg>
            </a>
        </header>
      `;
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
        <footer id="colophon" class="s-footer">

            <div class="row s-footer__main">

                <div class="column lg-4-5 md-6 tab-12 s-footer__about" style="margin-right: 0;">
                    <h4>Yeeching Lau</h4>

                    <div class="column lg-7 md-6 tab-12">
                        <ul class="s-footer__social">
                            <li>
                                <a href="https://www.instagram.com/yeechingo.o/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:">
                                        <path
                                            d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,4.623-4.624 C16.622,9.447,14.551,7.377,11.999,7.377L11.999,7.377z M11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003 c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004L11.999,15.004z">
                                        </path>
                                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                        <path
                                            d="M20.533,6.111c-0.469-1.209-1.424-2.165-2.633-2.632c-0.699-0.263-1.438-0.404-2.186-0.42 c-0.963-0.042-1.268-0.054-3.71-0.054s-2.755,0-3.71,0.054C7.548,3.074,6.809,3.215,6.11,3.479C4.9,3.946,3.945,4.902,3.477,6.111 c-0.263,0.7-0.404,1.438-0.419,2.186c-0.043,0.962-0.056,1.267-0.056,3.71c0,2.442,0,2.753,0.056,3.71 c0.015,0.748,0.156,1.486,0.419,2.187c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45 c0.963,0.042,1.268,0.055,3.71,0.055s2.755,0,3.71-0.055c0.747-0.015,1.486-0.157,2.186-0.419c1.209-0.469,2.164-1.424,2.633-2.633 c0.263-0.7,0.404-1.438,0.419-2.186c0.043-0.962,0.056-1.267,0.056-3.71s0-2.753-0.056-3.71C20.941,7.57,20.801,6.819,20.533,6.111z M19.315,15.643c-0.007,0.576-0.111,1.147-0.311,1.688c-0.305,0.787-0.926,1.409-1.712,1.711c-0.535,0.199-1.099,0.303-1.67,0.311 c-0.95,0.044-1.218,0.055-3.654,0.055c-2.438,0-2.687,0-3.655-0.055c-0.569-0.007-1.135-0.112-1.669-0.311 c-0.789-0.301-1.414-0.923-1.719-1.711c-0.196-0.534-0.302-1.099-0.311-1.669c-0.043-0.95-0.053-1.218-0.053-3.654 c0-2.437,0-2.686,0.053-3.655c0.007-0.576,0.111-1.146,0.311-1.687c0.305-0.789,0.93-1.41,1.719-1.712 c0.534-0.198,1.1-0.303,1.669-0.311c0.951-0.043,1.218-0.055,3.655-0.055c2.437,0,2.687,0,3.654,0.055 c0.571,0.007,1.135,0.112,1.67,0.311c0.786,0.303,1.407,0.925,1.712,1.712c0.196,0.534,0.302,1.099,0.311,1.669 c0.043,0.951,0.054,1.218,0.054,3.655c0,2.436,0,2.698-0.043,3.654H19.315z">
                                        </path>
                                    </svg>
                                    <span class="u-screen-reader-text">Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@YeechingLau">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                                        <path fill-rule="evenodd" d="M23,11.9972 C23,15.0688707 22.7080514,16.9571365 22.0247481,18.1281724 C21.3347709,19.3777602 20.5269977,19.7708297 18.8782989,19.8862992 C17.7148693,19.9542414 14.794638,20 12.0026667,20 C9.2044172,20 6.28275714,19.9542562 5.10860514,19.8855427 C3.47493151,19.7708031 2.66701263,19.37838 1.97791182,18.142374 C1.29279472,16.9480084 1,15.052042 1,12.0084 C1,8.94737365 1.29138368,7.06090428 1.97193166,5.86259947 C2.67010997,4.61046509 3.49111627,4.21325835 5.11100471,4.1184917 C6.23144506,4.04250638 8.99660854,4 12.0026667,4 C15.002263,4 17.766208,4.04252223 18.8782989,4.11790083 C20.5073007,4.21303163 21.3281267,4.60936303 22.020213,5.8580297 C22.7108012,7.06048454 23,8.93778123 23,11.9972 Z M20.283329,6.84963647 C19.9603324,6.26505017 19.7713697,6.17346202 18.752413,6.11391338 C17.6926261,6.04212137 14.954737,6 12.0026667,6 C9.04424331,6 6.3050775,6.04210674 5.2370951,6.1144916 C4.22844212,6.17352647 4.03674592,6.26627 3.71489655,6.84342165 C3.2475376,7.66638709 3,9.26898917 3,11.9972 C3,14.7270394 3.24886149,16.33852 3.71873501,17.1577995 C4.03565111,17.7261665 4.22600958,17.8186276 5.23703026,17.8897046 C6.34874254,17.9546989 9.24212825,18 12.0026667,18 C14.7569983,18 17.6489264,17.9546849 18.7500936,17.8904464 C19.7737637,17.8187098 19.961409,17.7274 20.2855157,17.1409953 C20.752236,16.3407623 21,14.7382734 21,12.0084 C21,9.25771396 20.7535449,7.66399511 20.283329,6.84963647 Z M10,9 L15,12 L10,15 L10,9 Z"/>
                                    </svg>
                                    <span class="u-screen-reader-text">Youtube</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> <!-- end s-footer__about -->

                <div class="column lg-5 md-6 tab-12">
                    <div class="row row-footer">
                        <div class="column lg-6">
                            <h4>DIARY</h4>
                            <ul class="link-list">
                                <li><a href="upcoming.html">Upcoming</a></li>
                                <li><a href="recent.html">Recent Engagements</a></li>
                            </ul>
                        </div>
                        <div class="column lg-6">
                            <h4>GALLERY</h4>
                            <ul class="link-list">
                                <li><a href="photos.html">Photos</a></li>
                                <li><a href="videos.html">Videos</a></li>
                            </ul>
                        </div>
                        <div class="column lg-6">
                            <h4>Site Links</h4>
                            <ul class="link-list">
                                <li><a href="index.html">HOME</a></li>
                                <li><a href="about.html">BIOGRAPHY</a></li>
                                <li><a href="contact.html">CONTACT</a></li>
                                <!-- <li><a href="#0">Terms & Policy</a></li> -->
                            </ul>
                        </div>
                    </div>
                </div>

            </div> <!-- end s-footer__main -->

            <div class="row s-footer__bottom">
                <div class="column lg-5 md-6 tab-12">
                    <div class="ss-copyright">
                        <span>© Copyright Yee Ching Lau</span>
                    </div>
                </div>

            </div> <!-- end s-footer__bottom -->

            <div class="ss-go-top">
                <a class="smoothscroll" title="Back to Top" href="#top">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M17.25 10.25L12 4.75L6.75 10.25" />
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M12 19.25V5.75" />
                    </svg>
                </a>
            </div> <!-- end ss-go-top -->

        </footer>   
      `;
    }
}

class Article extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const text = this.attributes.text.value;
        const title = this.attributes.title.value;
        const abstract = this.attributes.abstract.value;

        this.innerHTML = `
        <article class="brick entry" data-animate-el>
            <div class="entry__thumb">
                <a href="single-standard.html" class="thumb-link">
                </a>
            </div>
        <div class="entry__text">
            <div class="entry__header">
                <div class="entry__meta">
                    <span class="cat-links">
                        ${text}
                    </span>
                </div>
                <h3 class="entry__title">${title}</h3>
            </div>
            <div class="entry__excerpt">
                <p>${abstract}</p>
            </div>
        </div>
        </article>
        `
    }
}

class UpcomingArticles extends HTMLElement {
    connectedCallback() {
        var template = ``
        for (let i = 0; i < upcoming_articles.length; i++) {
            template += `<my-article text="${upcoming_articles[i].text}" title="${upcoming_articles[i].title}" abstract="${upcoming_articles[i].abstract}"></my-article>`;
        }
        this.innerHTML = template;
    }
}
class UpcomingArticlesHome extends HTMLElement {
    connectedCallback() {
        var template = ``
        for (let i = 0; i < 2; i++) {
            template += `<my-article text="${upcoming_articles[i].text}" title="${upcoming_articles[i].title}" abstract="${upcoming_articles[i].abstract}"></my-article>`;
        }
        this.innerHTML = template;
    }
}
class RecentArticles extends HTMLElement {
    connectedCallback() {
        var template = ``
        for (let i = 0; i < recent_articles.length; i++) {
            template += `<my-article text="${recent_articles[i].text}" title="${recent_articles[i].title}" abstract="${recent_articles[i].abstract}"></my-article>`;
        }
        this.innerHTML = template;
    }
}

customElements.define('upcoming-articles', UpcomingArticles);
customElements.define('upcoming-articles-home', UpcomingArticlesHome);
customElements.define('recent-articles', RecentArticles);
customElements.define('main-footer', Footer);
customElements.define('main-header', Header);//, { extends: 'header' }
customElements.define('my-article', Article);