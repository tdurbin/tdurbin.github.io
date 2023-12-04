lpTag.sdes = lpTag.sdes||[];
lpTag.sdes.push(
   {
        "type": "mrktInfo",  //MANDATORY
            "info": {
            "channel": "1",  //ORIGINATING CHANNEL ENUM:
             // 0-Direct, 1-Search, 2-Social, 3-Email, 4-Referral, 5-Paid Search, 6-Display
            "affiliate": "Google",  //AFFILIATE NAME
            "campaignId": "Bill Pay iPhone 15"  //EXTERNAL ORIGINATING CAMPAIGN 
        }
   }
);