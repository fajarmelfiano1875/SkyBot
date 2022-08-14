const roles = {
    /*
    'Role Name': <Minimal Level To Obtain this Role>
    */
    'Bronze V': 0,
    'Bronze IV': 5,
    'Bronze III': 10,
    'Bronze II': 15,
    'Bronze I': 20,
    'Elite V': 25,
    'Elite IV': 30,
    'Elite III': 35,
    'Elite II': 40,
    'Elite I': 45,
    'Master V': 50,
    'Master IV': 55,
    'Master III': 60,
    'Master II': 65,
    'Master I': 70,
    'Grand Master V': 75,
    'Grand Master IV': 80,
    'Grand Master III': 85,
    'Grand Master II': 90,
    'Grand Master I': 95,
    'Epic V': 100,
    'Epic IV': 105,
    'Epic III': 110,
    'Epic II': 115,
    'Epic I': 120,
    'Legend V': 125,
    'Legend IV': 130,
    'Legend III': 135,
    'Legend II': 140,
    'Legend I': 145,
    'Mythic V': 150,
    'Mythic IV': 155,
    'Mythic III': 160,
    'Mythic II': 165,
    'Mythic I': 170,
    'Mythical glory': 200,
    'Majin': 350,
    'Demon lord seed': 700,
    'Demon lord': 1000,
    'True demon lord' 2500,
    'Octagram': 5000,
    'Older demon lord': 7500,
    'Great demon lord': 8500,
    'Strongest demon lord': 10000,
}

export function before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    
}