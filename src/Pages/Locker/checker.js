import {
  SHA1
} from "./crypt.js";
export class Result {
  constructor(password) {
    this.password = password;
    this.calculate_weight();
  }

  check_low_case(password) {
    return password.search(/[a-z]/) >= 0;
  }

  check_upper_case(password) {
    return password.search(/[A-Z]/) >= 0;
  }

  check_digits(password) {
    return password.search(/\d/) >= 0;
  }

  check_spec_symbols(password) {
    return password.search(/[^a-zA-Z0-9]/) >= 0;
  }


  calculate_weight() {
    this.bad_props = [];
    this.weight = this.get_length_weight(this.password);
    console.log("length weight = " + this.weight);
    if (this.weight < 20)
      this.bad_props.push("Длина пароля не менее 8 символов");

    if (this.check_low_case(this.password)) this.weight += 20;
    else this.bad_props.push("Использовать строчные буквы");

    if (this.check_upper_case(this.password)) this.weight += 20;
    else this.bad_props.push("Использовать прописные буквы");

    if (this.check_digits(this.password)) this.weight += 20;
    else this.bad_props.push("Использовать цифры");

    if (this.check_spec_symbols(this.password)) this.weight += 20;
    else this.bad_props.push("Использовать другие символы: точка, тире...");

    console.log("low case = " + this.check_low_case(this.password));
    console.log("upper case = " + this.check_upper_case(this.password));
    console.log("digits = " + this.check_digits(this.password));
    console.log("spec symbols = " + this.check_spec_symbols(this.password));
    console.log("weight = " + this.weight);
  }

  set_count_in_db(count) {
    this.count_in_db = count;
  }
  check_db() {
    this.set_count_in_db(password_in_db(this.password))
  }

  get_length_weight(password) {
    if (password.length < 6) return 0;
    if (password.length < 8) return 10;
    return 20;
  }

  make_decision() {
    this.check_db();
    if (this.weight <= 30 || this.count_in_db >= 50000) {
      this.password_quality = "Пароль слишком простой";
      this.is_hacked = true;
      this.hack_description = "Тебя было не сложно взломать\n";
      // if (this.count_in_db > 0)
      //   this.hack_description +=
      //   "Такой пароль был взломан как минимум " + this.count_in_db + " раз.";
    } else if (this.weight >= 70 && this.count_in_db === 0) {
      this.password_quality = "Пароль достаточно хороший";
      this.is_hacked = false;
      this.hack_description = "Взломать твой пароль очень сложно.";
    } else {
      let random_int = getRandomInt(0, 100);
      console.log("random_level = " + random_int);
      this.password_quality =
        "Пароль нормальный, но можно улучшить. Пока его можно вломать при небольшом везении";
      this.is_hacked = random_int > this.weight;
      this.hack_description = "Твой пароль не очень надёжный. ";
      if (this.is_hacked) {
        this.hack_description += "Хакеру-лисе повезло, тебя смогли взломать.\n";
      } else {
        this.hack_description +=
          "Хакеру-лисе не повезло, тебя не смогли взломать.\n";
      }

    }
    if (this.count_in_db > 0) {
      this.hack_description +=
        "Такой пароль был взломан как минимум " + this.count_in_db + " раз.";
    }
    console.log(this.password_quality);
    console.log("hacked = " + this.is_hacked);
    console.log("hack_description  = " + this.hack_description);
  }
}

//THIS IS ENTER POINT
function is_password_good(password) {
  let result = new Result(password);
  result.set_count_in_db(password_in_db(password));
  result.make_decision();
  console.log(result);
  return result;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

export const password_in_db = (password) => {
  console.log("check password = " + password);
  const xhr = new XMLHttpRequest();
  let hash = SHA1(password);
  console.log("hash = " + hash);
  xhr.open(
    "GET",
    "https://api.pwnedpasswords.com/range/" + hash.substring(0, 5),
    false
  );
  xhr.send(null);
  let count = 0;
  if (xhr.status === 200) {
    //console.log(xhr.responseText);
    count = get_count_by_response(xhr.responseText, hash.substring(5));
  }
  console.log("count = " + count);
  return count;
}

function get_count_by_response(text, hash5) {
  console.log("find = " + hash5 + ":");
  let strings = text.split("\n");
  let s;
  console.log("string count = " + strings.length);
  for (s of strings) {
    if (s.includes(hash5 + ":")) {
      console.log("found = " + s);
      return parseInt(s.split(":")[1]);
    }
  }
  return 0;
}