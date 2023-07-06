const userschema = require('../Schemas/user')

const signup = (req, res) => {
    res.render('signup');
}

const signupverify = async (req, res) => {
    console.log(req.body)
    const data = userschema({
        name: req.body.name,
        mail: req.body.email,
        password: req.body.password
    }
    )
    await data.save()
        .then(() => {
            console.log("Data saved");
        })
        .catch((error) => {
            console.log("Error:", error);
        });

    res.render('login');

}

module.exports = { signup, signupverify };