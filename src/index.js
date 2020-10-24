module.exports = function toReadable (number) { // Прекрасно понимаю, что код плохой, длинный и совсем не красивый, изначально задумка была иная, но из-за нехватки времени и поздней ночи было решено сделать самым глупым способом
  if(number == 0 || number == undefined) {
      return "zero";
  }
  number = String(number)
  let num
    let result =""

      if(number.length == 3) {
          num = parseInt(parseInt(number)/100);
          switch (num) {
            case 1:
              result = "one hundred"
              break;
            case 2:
              result = "two hundred"
              break;
            case 3:
              result = "three hundred"
              break;
            case 4:
              result = "four hundred"
            break;
            case 5:
              result = "five hundred"
              break;
            case 6:
              result = "six hundred"
              break;
            case 7:
              result = "seven hundred"
              break;
            case 8:
              result = "eight hundred"
              break;
            case 9:
              result = "nine hundred"
              break;
          }
          number = String(number - (num * 100))

      }

      if(number.length == 2) {
        if(result != "") {
            result += " "
        }
          num = parseInt(parseInt(number)/10);
          switch (num) {
            case 1:
                number = parseInt(number);
            if(number < 10){
            break;
            } else {switch (number) {

                case 10:
                    result += "ten"
                break;
                case 11:
                    result += "eleven"
                break;
                case 12:
                    result += "twelve"
                break;
                case 13:
                    result += "thirteen"
                break;
                case 14:
                    result += "fourteen"
                break;
                case 15:
                    result += "fifteen"
                break;
                case 16:
                    result += "sixteen"
                break;
                case 17:
                    result += "seventeen"
                break;
                case 18:
                    result += "eighteen"
                break;
                case 19:
                    result += "nineteen"
                break;}
                number = ""
                break;
            }





            case 2:
              result += "twenty"
              break;
            case 3:
              result += "thirty"
              break;
            case 4:
              result += "forty"
            break;
            case 5:
              result += "fifty"
              break;
            case 6:
              result += "sixty"
              break;
            case 7:
              result += "seventy"
              break;
            case 8:
              result += "eighty"
              break;
            case 9:
              result = result + "ninety"
              break;

          }
          number = String(number - (num * 10))

    }
    if(number.length == 1 && number != 0) {
      num = parseInt(number);
      if(result != "") {
        result += " "
    }
      switch (num) {
        case 1:
          result += "one"
          break;
        case 2:
          result += "two"
          break;
        case 3:
          result += "three"
          break;
        case 4:
          result += "four"
        break;
        case 5:
          result += "five"
          break;
        case 6:
          result += "six"
          break;
        case 7:
          result += "seven"
          break;
        case 8:
          result += "eight"
          break;
        case 9:
          result += "nine"
          break;
      }}
    return result;
}

