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
                "day": 30  // BIRTH DAY
            },
            "contacts": [{
                "email": "tom.durbin@me.com",  // EMAIL
                "phone": "+447766367842",  // PHONE NUMBER
                "preferred": "EMAIL",  // EMAIL, PHONE
                "address": {
                    "country": "UK"  // COUNTRY
                   "region": "OXON"  // REGION
                   "zipcode": "OX26 6xa"  // ZIP OR POSTAL CODE
                },
            }],
            "gender": "MALE",  // MALE, FEMALE, OTHER
            "language": "en-UK",  // LANGUAGE 
            "company": "N/A"  // VISITOR COMPANY NAME
        }
    }
);