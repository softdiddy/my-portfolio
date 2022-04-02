<template>
    <div class="container">
        <div class="row">
            <div class="col-3 profile">
                <div class="profile-pic">
                      <img src="../assets/profile-pic.png" width="100%" class="profile" />
                     <div class="row profile-text mt-2">
                          <h3>Mohammed Lawal</h3>
                          <h4>Abubakar</h4>

                          <p class="mt-3">Full-stack Engineer</p>

                          <ul class="list-group">
                            <li class="list-group-item"><b-icon-envelope></b-icon-envelope> Softdiddymail.com</li>
                            <li class="list-group-item">Minna, Niger State, Nigeria</li>
                            <li class="list-group-item">https://www.softdiddy.com</li>
                            <li class="list-group-item">Porta ac consectetur ac</li>
                        </ul>

                        <button class="email-me">Email me now</button>
                     </div>
                </div>
            </div>
            <div class="col-9 profile-containt">
                <div class="summary-me border">
                    <ul>
                        <li> Hi, I’m Mohammed Lawal Abubakar (@softdiddy)</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .summary-me{
        width: 100%;
        height: 200px;
        border-color: #FFF;
        margin-top: 20px;
        padding: 20px;
        color: #FFF;
    }

    .profile{
        border-radius: 100px;
        margin-top: 20px;
    }

    .profile-text{
        color: #FFF;
    }

    .email-me{
        background-color: #fff;
        border-radius: 10px;
        color: #0D1117;
        border: 0px;
        margin-top: 20px;
    }
    
</style>