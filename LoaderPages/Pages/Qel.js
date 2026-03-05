export const QELSPLASH=()=>{

    const style = document.createElement("style");
        
    document.head.appendChild(style);

    style.innerHTML = `
            .box{
                position:fixed;
                overflow:hidden;
                width:100%;
                left:0;
                height:100%;
                margin:0;
                padding:0;
                top:0;
                text-align:center;
                color:teal;
                box-shadow:0 0 25px rgba(0,255,179,0.3);
                font-family:Arial, sans-serif;
            }
            .spinner{
                width:50px;
                height:50px;
                margin:0 auto 20px;
                border:5px solid rgba(0,255,179,0.2);
                border-top:5px solid #00ffb3;
                border-radius:50%;
                animation:spin .5s linear infinite;
            }
            @keyframes spin{
                100%{transform:rotate(360deg);}
            }
            .progress{
                height:6px;
                width:80%;
                margin-left:10%;
                background:rgba(0,255,179,0.2);
                border-radius:10px;
                margin-top:20px;
                overflow:hidden;
            }
            .bar{
                height:100%;
                width:0%;
                background:#00ffb3;
                transition:width .4s;
            }
            .small{
                font-size:13px;
                opacity:.7;
                margin-top:10px;
            }
            .Name{
                margin-top:25%;
            }
        `;

    const Body = document.querySelector("body");
        
    Body.innerHTML = `
            <div class="box">
                <h2 class="Name">CONFIGURING</h2>
                <br><br>
                <div class="spinner"></div>
                <br><br>
                <div id="msg">Connecting to secure server...</div>
                <br><br>
                <div class="progress">
                    <div class="bar" id="bar"></div>
                </div>
                <br><br>
                <div class="small">Please Wait, Configuration In Progress</div>
                <br><br><br><br>
                <p class="small">Version One</p>
            </div>
        `;

        const messages = [
            "Establishing encrypted connection...",
            "Fetching live data from server...",
            "Verifying system integrity...",
            "Installing...",
            "System Ready ✔"
        ];

        let i = 0, progress = 0;
        const msg = document.getElementById("msg");
        const bar = document.getElementById("bar");

        function load() {
            msg.textContent = messages[i++];
            progress += 100 / messages.length;
            bar.style.width = progress + "%";

            if (i < messages.length) {
                setTimeout(load, 2000);
            }
        }
        setTimeout(load, 1000);

        window.addEventListener('storage', function(event) {
            if (event.key === 'PROJECT' && event.newValue !== null) {
                location.reload();
            }
        });

        (function() {
            const originalSetItem = localStorage.setItem;
            localStorage.setItem = function(key, value) {
                originalSetItem.apply(this, arguments);
                if (key === 'PROJECT' && value !== null) {
                    location.reload();
                }
            };
        })();

};