export class Post
{
  "data": {
    "user": {
      "id": number;
      "name": string;
      "surname": string;
      "username": string;
      "photo": string;
      "admin": boolean;
    };
    "id": number;
    "text": string;
    "imagePath": string;
    "link": string;
    "likeCount": string;
    "fairPlayCount": string;
    "commentCount": string;
    "postDate": string;
    "imageWidth": number;
    "imageHeight": number;
    "type": number;
    "fairPlayed": boolean;
    "liked": boolean;
  };
  "errorCode": string;
  "errorMessage": string;
  "success": boolean;
}
