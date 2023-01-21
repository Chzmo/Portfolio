import jwtDecode from "jwt-decode";

export const fetchUser = localStorage.getItem('user') !== null ? jwtDecode(localStorage.getItem('user')) : localStorage.clear();

export const faqData = [
    { 
        title: 'What is your process for design?', 
        content: (
            <>
                <p>
                    My process is simple and effective. It starts with an intro/discovery call 
                    with the client and then I create some low fidelity mockups for the design with the help of the client. 
                    Then, I do some research about the competitors and gather some ideas about the style for the website.
                </p> 

                <p>
                    Once everything is in place then I start working on the design. The first thing that I do while starting
                    the design is to create a styleguide so all the designs that I will create stay in the same pattern and 
                    follow the symmetry.
                </p> 
                
                <p>
                    Once styleguide is created then I start working on the actual design and create the first draft and submit 
                    it to the client for approval. If everything looks good to the client, then I start working on the remaining 
                    pages using the styleguide I had created and once all the pages are completed, I submit them to the client 
                    for review.
                </p>
            </>
        ) 
    },

    { 
        title: 'Which design tools do you use?', 
        content: (
            <>
                <p>
                    I use figma for designing and share the view access with clients so they can view the real time progress
                    and leave feedback easily. I can also use Adobe XD or Photoshop when needed.
                </p> 
            </>
        ) 
    },

    { 
        title: 'What are communication methods?',
        content: (
            <>
                <p>Email, Zoom, Whatsapp, and Telegram</p>
            </>
        ) 
    },

    { 
        title: 'How can I find you on other social media platforms?', 
        content: (
            <>
                <p>I would love to connect with you on all common social media platforms 
                    and while we are waiting for the meeting to start, I think its a good 
                    time to connect with me on following social media platforms:
                </p>
                
                <ul>
                    <li>Twitter: https://twitter.com</li>
                    <li>Linkedin: https://www.linkedin.com/in/</li>
                    <li>Facebook: https://instagram.com</li>
                </ul>
            </>
        ) 
    },

    { 
        title: 'Can you sign a Non Disclosure Agreement ?', 
        content: (
            <>
                <p>
                    Yes. If you want me to sign the NDA 
                    before this call, you can use the information below to create NDA
                </p>
                
                <ul>
                    <li>Full Name: Chisomo Zaliro Moyo</li>
                    <li>Website: chzmo.com</li>
                    <li>Country of Residence: Malawi, Mzuzu</li>
                    <li>If you need any more information, you can send me an email chzmodev@gmail.com</li>
                </ul>
            </>
        ) 
    },

];
