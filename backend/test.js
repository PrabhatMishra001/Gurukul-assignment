const fetch = require('node-fetch');

async function testSignup() {
    try {
        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'testuser',
                email: 'test@example.com',
                password: 'Test@123',
                dob: '1990-01-01',
                phone: '1234567890'
            })
        });

        const data = await response.json();
        console.log('Signup Response:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

testSignup();
