// Observer for reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));
});

// Modal Data
const exhibitData = {
    values: {
        title: "Constitution Values",
        content: `
            <div style="font-weight: 300; line-height: 2.2;">
                <p><strong>Justice:</strong> Social, economic, and political fairness.</p>
                <p><strong>Liberty:</strong> Of thought, expression, belief, faith, and worship.</p>
                <p><strong>Equality:</strong> Of status and of opportunity.</p>
                <p><strong>Fraternity:</strong> Assuring the dignity of the individual and national unity.</p>
            </div>
        `
    },
    rights: {
        title: "Fundamental Rights",
        content: `
            <div style="font-weight: 300; line-height: 2.2;">
                <p>1. Right to Equality</p>
                <p>2. Right to Freedom</p>
                <p>3. Right against Exploitation</p>
                <p>4. Right to Freedom of Religion</p>
                <p>5. Cultural and Educational Rights</p>
                <p>6. Right to Constitutional Remedies</p>
            </div>
        `
    },
    duties: {
        title: "Fundamental Duties",
        content: `
            <div style="font-weight: 300; line-height: 2.2;">
                <p>• To respect the Constitution and the National Flag.</p>
                <p>• To protect the sovereignty and integrity of India.</p>
                <p>• To promote harmony and common brotherhood.</p>
                <p>• To safeguard public property and abjure violence.</p>
            </div>
        `
    }
};

function openModal(type) {
    const modal = document.getElementById('infoModal');
    const body = document.getElementById('modalBody');
    const data = exhibitData[type];
    
    body.innerHTML = `
        <span class="label">Reference</span>
        <h2 style="font-size: 2.5rem; margin-bottom: 30px; letter-spacing: -0.02em;">${data.title}</h2>
        <div>${data.content}</div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('infoModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target == modal) {
        closeModal();
    }
};

// Tribute Generator
function generateCard() {
    const name = document.getElementById('userName').value.trim();
    const message = document.getElementById('patrioticMessage').value;
    const preview = document.getElementById('cardPreview');
    
    if (!name) {
        alert("Please enter a name for the tribute.");
        return;
    }
    
    document.getElementById('displayName').innerText = name;
    document.getElementById('displayMessage').innerText = message;
    
    preview.classList.remove('hidden');
    preview.scrollIntoView({ behavior: 'smooth', block: 'center' });
}