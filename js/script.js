// Capturar o id da URL (supondo que você já está fazendo isso)
var id = location.href.split("=").pop();

        const data = [
            {
                "nome": "Álvaro Santos",
                "cargo": "Analista de Sistemas",
                "telefone":"tel:+5532999954563",
                "email":"mailto:alvaro.santos@copymaq.com.br",
                "whatsapp":"https://wa.me/5532999954563",
                "linkedin":"https://www.linkedin.com/in/seu-perfil"
            },
            {
                "nome": "Diego Castro",
                "cargo": "CIO",
                "telefone":"tel:+5532998036787",
                "email":"mailto:diego.castro@copymaq.com.br",
                "whatsapp":"https://wa.me/5532998036787",
                "linkedin":"https://www.linkedin.com/in/seu-perfil"
            }
        ];

        const nome = data[id].nome;
        const cargo = data[id].cargo;
        const telefone = data[id].telefone;
        const email = data[id].email;
        const whatsapp = data[id].whatsapp;
        const linkedin = data[id].linkedin;

        // Atualizar os elementos HTML com os dados carregados
        const nameElement = document.getElementById('nome');
        nameElement.textContent = nome;

        const positionElement = document.getElementById('position');
        positionElement.textContent = cargo;

        const compartilharElement = document.getElementById('compartilhar');
        compartilharElement.href = "https://api.whatsapp.com/send?text=dsalvaro.github.io/cartao_contatos/?id="+id;

        const positionProfilePic = document.getElementById('profile-pic');
        positionProfilePic.src = `./imgs/persons/${id}.png`;

        const linkTelefone = document.getElementById('link-telefone');
        linkTelefone.href = telefone;

        const linkEmail = document.getElementById('link-email');
        linkEmail.href = email;

        const linkWhatsapp = document.getElementById('link-whatsapp');
        linkWhatsapp.href = whatsapp;

        const linkLinkedin = document.getElementById('link-linkedin');
        linkLinkedin.href = linkedin;


