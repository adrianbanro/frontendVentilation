//export class ProductService{

   //     getProducts(): string[] {
   //         return ["Learning React", "Learning Angular", "ASP.NET" ];
   //     }

   export class RoomService{
    getRooms() {
    return [
    {
    imageUrl: "http://loremflickr.com/150/150/professor?random=1",
    //imageUrl: "assets/Room_Images/IMG_20201026_120629.jpg",
    //imageUrl: "https://picsum.photos/200",

    id:1,
    roomName: "Room 1",
    releasedDate: "May 31, 2016",
    description: "Silent room overlooking the park,tables disposed projectworkwise... ",
    temperature: 23,
    humidity: 50
    },
    {
    imageUrl: "http://loremflickr.com/150/150/teacher?random=2",
   //imageUrl: "assets/Room_Images/IMG_20201026_120641.jpg",
    id:2,
    roomName: "Room 2",
    releasedDate: "October 31, 2016",
    description: "Noisy, tables disposed clasically... ",
    temperature: 20,
    humidity: 45
    },
    {
    imageUrl: "http://loremflickr.com/150/150/teacher?random=3",
    //imageUrl: "assets/Room_Images/IMG_20201026_120651.jpg",
    id:3,
    roomName: "Room 3",
    releasedDate: "July 30, 2016",
    description: "Quite OK, but disposed northwise,so needs more light... ",
    temperature: 18,
    humidity: 38
    }];
    }
   }
