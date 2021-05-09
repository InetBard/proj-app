db.createUser({
    user: "root",
    pwd: "Aa111111",
    roles: [
        {
            role: "readWrite",
            db: "mainmng"
        }
    ]
});