 const signInButton = document.querySelector('.js-sign-in');
 const signUpButton = document.querySelector('.js-sign-up');
 const container = document.querySelector('.container')

 function changePage(button){
    if(button === 'Up'){
        container.innerHTML = `<div class="top">SIGN UP</div>
        <form action="" method="post" class="login-form">
            <input type="email" class="email-adress" placeholder="email-adress" required>
            <input type="email" class="email-adress" placeholder="username" required>
            <input type="password" class="password" placeholder="password" required>
            <input type="password" class="password" placeholder="confirm password" required>
            <input type="submit" value="submit" class="submit-btn">
        </form>
        <div class="change">Already have an account? <button class="js-sign-in" onclick="changePage('In');">Sign in</button></div>`
        container.classList.add('margin')
        document.title = 'Sign up | Quaffi logistics';
    }else if(button === 'In'){
        container.innerHTML = `<div class="top">SIGN IN</div>
        <form action="" method="post" class="login-form">
            <input type="email" class="email-adress" placeholder="email-adress" required>
            <input type="password" class="password" placeholder="password" required>
            <input type="submit" value="submit" class="submit-btn">
        </form>
        <div class="change">Don't have an account yet? <button class="js-sign-up" onclick="changePage('Up');">Sign up</button></div>`
        container.classList.remove('margin')
        document.title = 'Sign in | Quaffi logistics';
    }
 }