
export class User{
  "data": {
          "user":
                {
                "id": number;
                "name": string;
                "surname": string;
                "username": string;
                "photo": string;
                "team": {
                        "id": number;
                        "name": string;
                        "logo": string;
                        };
                "admin": boolean;
              };
            "token": string;
          };
  "errorCode": string;
  "errorMessage": string;
  "success": boolean;
}
