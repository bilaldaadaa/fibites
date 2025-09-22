      // تأثيرات    
        document.addEventListener('DOMContentLoaded', function() {
            const circles = document.querySelectorAll('.circle');
            circles.forEach((circle, index) => {
                circle.style.opacity = '0';
                circle.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    circle.style.transition = `all 0.5s ease-out ${index * 0.2}s`;
                    circle.style.opacity = '1';
                    circle.style.transform = 'scale(1)';
                }, 100);
            });
            
            const loginContainer = document.querySelector('.login-container');
            loginContainer.style.transform = 'translateY(20px)';
            loginContainer.style.opacity = '0';
            
            setTimeout(() => {
                loginContainer.style.transition = 'all 0.5s ease-out';
                loginContainer.style.transform = 'translateY(0)';
                loginContainer.style.opacity = '1';
            }, 300);
        });