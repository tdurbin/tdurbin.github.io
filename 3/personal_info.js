lpTag.sdes = lpTag.sdes || [];
lpTag.sdes.push(
    {
        "type": "personal",  //MANDATORY
        "personal": {
            "firstname": "Tom",  // FIRST NAME
            "lastname": "Durbin",  // SURNAME
            "age": {
                "age": 49,  // AGE AS INTEGER
                "year": 1974,  // BIRTH YEAR
                "month": 7,  // BIRTH MONTH
                "day": 27  // BIRTH DAY
            },
            "contacts": [{
                "email": "tom.durbin@me.com",  // EMAIL
                "phone": "+35316718239",  // PHONE NUMBER
                "preferred": "EMAIL",  // EMAIL, PHONE
                "address": {
                    "country": "Ireland",  // COUNTRY
                    "region": "Dublin",  // REGION
                    "zipcode": "D02 AE19"  // ZIP OR POSTAL CODE
                },
            }],
            "gender": "MALE",  // MALE, FEMALE, OTHER
            "language": "en-UK",  // LANGUAGE 
            "company": "N/A"  // VISITOR COMPANY NAME
        }
    }
);