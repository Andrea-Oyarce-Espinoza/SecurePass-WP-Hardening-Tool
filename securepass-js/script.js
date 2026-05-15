// 1. Configuración de caracteres
const keys = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

// 2. Lógica para generar la contraseña
const generatePassword = (length) => {
    let password = "";
    const allChars = Object.values(keys).join('');
    
    // Aseguramos diversidad de caracteres iniciales
    password += keys.upper[Math.floor(Math.random() * keys.upper.length)];
    password += keys.number[Math.floor(Math.random() * keys.number.length)];
    password += keys.symbol[Math.floor(Math.random() * keys.symbol.length)];

    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Mezcla final para que sea aleatoria
    return password.split('').sort(() => 0.5 - Math.random()).join('');
};

// 3. Reglas fijas para WordPress
const generateHtaccessRules = () => {
    return `# Block access to wp-config.php
<Files wp-config.php>
    order allow,deny
    deny from all
</Files>

# Disable directory browsing
Options -Indexes

# Protect wp-content/uploads
<Directory "/var/www/wp-content/uploads">
    <Files "*.php">
        Order Deny,Allow
        Deny from All
    </Files>
</Directory>`;
};

// 4. Función moderna para COPIAR al portapapeles
const copyToClipboard = async (text, buttonElement) => {
    try {
        await navigator.clipboard.writeText(text);
        
        // Efecto visual de éxito
        const originalText = buttonElement.innerText;
        buttonElement.innerText = "¡Copiado! ✅";
        buttonElement.style.backgroundColor = "#10b981"; 

        setTimeout(() => {
            buttonElement.innerText = originalText;
            buttonElement.style.backgroundColor = ""; 
        }, 2000);

    } catch (err) {
        alert("Error al copiar");
    }
};

// 5. Conexión con los botones del HTML (Event Listeners)

// Botón: Generar Nueva Clave
document.getElementById('generate-btn').addEventListener('click', () => {
    const length = document.getElementById('length-slider').value;
    const pass = generatePassword(length);
    document.getElementById('password-display').value = pass;
});

// Botón: Copiar Clave
document.getElementById('copy-btn').addEventListener('click', (e) => {
    const pass = document.getElementById('password-display').value;
    if (pass) {
        copyToClipboard(pass, e.target);
    } else {
        alert("Primero genera una contraseña.");
    }
});

// Botón: Copiar .htaccess
document.getElementById('copy-htaccess').addEventListener('click', (e) => {
    const rules = document.getElementById('htaccess-display').innerText;
    copyToClipboard(rules, e.target);
});

// Slider: Actualizar el número de largo mientras se mueve
document.getElementById('length-slider').addEventListener('input', (e) => {
    document.getElementById('length-val').innerText = e.target.value;
});

// Al cargar la página: Mostrar las reglas iniciales
window.onload = () => {
    document.getElementById('htaccess-display').innerText = generateHtaccessRules();
};