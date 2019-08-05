import React, { Component } from "react";
import SelectCountry from "./selectCountry";
import "react-bootstrap-typeahead/css/Typeahead.css";
import * as firebase from "firebase";
import SelectCity from "./selectCity";
import DateInput from "./DateInput";
import MonthInput from "./monthInput";
import BudgetSlider from "./budgetSlider";
import SelectOneCardQuestion from "./selectOneCardQuestion";
import AccomodationPreference from "./accomodationPreferance";
import FoodAndShoppingPref from "./foodAndShoppingPref";
import AnythingElse from "./anythingElse";
import PersonalDetails from "./personalDetails";
import Progress from "react-progressbar";

class MultiStepForm extends Component {
  state = {
    step: 1,
    countryData: [],
    selectedCountryArr: [],
    citiesData: [],
    selectedCityArr: [],
    recommendCities: false,
    datesQuestionArr: [
      { id: 1, option: "Yes, my dates are finalized" },
      { id: 2, option: "I know the month" }
    ],
    datesQuestionSelectedArr: [],
    fromDate: "",
    toDate: "",
    monthData: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    selectedMonth: "",
    yearData: ["2019", "2020", "2021"],
    selectedYear: "",
    travellingForData: [
      { id: 1, option: "Solo Trip" },
      { id: 2, option: "Honeymoon / Anniversary" },
      { id: 3, option: "Family Vacation" },
      { id: 4, option: "Trip with Friends" },
      { id: 5, option: "Business Trip" },
      { id: 6, option: "Bachelor Trip" },
      { id: 7, option: "Other" }
    ],
    selectedTravellingForArr: [],
    budgetPerPerson: { min: 50000, max: 100000 },
    numOfTravellers: "",
    budgetSuggestion: false,
    finalizedAccomodation: [
      { id: 1, option: "Yes, we have booked it" },
      { id: 2, option: "No, we need your suggestios" }
    ],
    selectedFinalizedAccomodationArr: [],
    accomodationTypeData: [
      {
        id: 1,
        option: "Hotel",
        img:
          "https://www.baglionihotels.com/wp-content/themes/baglioni-hotels-new/images/schema/baglioni-hotel-london.jpg"
      },
      {
        id: 2,
        option: "Bed & Breakfast",
        img:
          "https://hotelpropeller.com/wp-content/uploads/2013/04/Bed-and-Breakfast-Facebook-Page-660x427.jpg"
      },
      {
        id: 3,
        option: "Hostel",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/e/e8/Hostel_Dormitory.jpg"
      }
    ],
    selectedAccomodationType: [],
    roomBudgetData: [
      { id: 1, option: "Rs 1000 - Rs 5000" },
      { id: 2, option: "Rs 5000 - Rs 10000" },
      { id: 3, option: "Above Rs 10000" }
    ],
    selectedRoomBudgetData: [],
    activitiesData: [
      {
        id: 1,
        option: "Food & Beverages",
        img:
          "https://media-cdn.tripadvisor.com/media/photo-s/15/b0/05/1d/atlantic-sea-scallops.jpg"
      },
      {
        id: 2,
        option: "Must see attractions",
        img:
          "https://th.thgim.com/society/history-and-culture/q3go2j/article24103505.ece/alternates/FREE_660/08frcambodia4jpg"
      },
      {
        id: 3,
        option: "Museum Art",
        img:
          "https://media.vanityfair.com/photos/5a4e7bb6518d781e720e1059/master/pass/Metropolitan-Museum-of-Art-Tourist-Rate.jpg"
      },
      {
        id: 4,
        option: "Historical Building",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg"
      },
      {
        id: 5,
        option: "Spa & Wellness",
        img:
          "https://img.grouponcdn.com/iam/26tmLx8cJL3LyjGc1jkmWiimQCXQ/26-2048x1229/v1/c700x420.jpg"
      },
      {
        id: 6,
        option: "Outdoor and Wildlife",
        img: "https://www.nativeplanet.com/img/2019/01/coverpic-1546584613.jpg"
      },
      {
        id: 7,
        option: "Tours",
        img:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/00/a3/b4.jpg"
      },
      {
        id: 8,
        option: "Local Culture",
        img:
          "https://www.culturalindia.net/iliimages/Folk-Dances-Of-North-East-India-ili-473-img-1.jpg"
      },
      {
        id: 9,
        option: "Shopping",
        img:
          "https://www.welcometobratislava.eu/wp-content/uploads/2016/04/13001244_1145124578851486_1870631552465887468_n.jpg"
      },
      {
        id: 10,
        option: "Performance / Shows",
        img:
          "https://dancemagazine.com.au/wp-content/uploads/2015/09/GBT-Nutcracker-Richard-Calmes-2014.jpg"
      },
      {
        id: 11,
        option: "Nightlife",
        img:
          "https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2018/11/nightlife-beirut-lebanon-d5fdc8c5f912.jpg"
      },
      {
        id: 12,
        option: "Adventure",
        img:
          "http://www.thejumpingplace.com/wp-content/uploads/2014/09/cropped-Tandem-Skydiving-Exit-9-12.jpg"
      }
    ],
    selectedActivitiesDataArr: [],
    foodCostData: [
      { id: 1, option: "Inexpensive" },
      { id: 2, option: "Moderately Priced" },
      { id: 3, option: "Premium" }
    ],
    selectedFoodCostArr: [],
    diningEnvData: [
      { id: 1, option: "Casual" },
      { id: 2, option: "Fine dining" },
      { id: 3, option: "New & Trending" },
      { id: 4, option: "Cozy & Romantic" },
      { id: 5, option: "Where locals go" },
      { id: 6, option: "Good for groups" },
      { id: 7, option: "Vegetarian friendly" },
      { id: 8, option: "Alcohol available" }
    ],
    selectedDiningEnvArr: [],
    shoppingPrefData: [
      { id: 1, option: "Shopping Malls" },
      { id: 2, option: "Local Markets" },
      { id: 3, option: "Souvenir Shops" },
      { id: 4, option: "Not interested in Shopping" }
    ],
    selectedShoppingPrefArr: [],
    anythingElse: ""
  };

  nextStep = () => {
    const { step } = this.state;
    if (step === 7 && this.state.selectedFinalizedAccomodationArr[0].id === 1) {
      this.setState({ step: step + 2 });
    } else {
      this.setState({ step: step + 1 });
    }
  };

  prevStep = () => {
    const { step } = this.state;
    if (step === 9 && this.state.selectedFinalizedAccomodationArr[0].id === 1) {
      this.setState({ step: step - 2 });
    } else {
      this.setState({ step: step - 1 });
    }
  };

  recommendCitiesClicked = () => {
    const recommendCities = !this.state.recommendCities;
    this.setState({ recommendCities });
  };

  handleChange = input => e => {
    console.log(input, e);
    if (this.state.step === 1) {
      this.setState({ selectedCountryArr: e }, this.setCity);
    } //onChange City
    else if (this.state.step === 2) {
      this.setState({ [input]: e });
    } else if (
      this.state.step === 4 &&
      this.state.datesQuestionSelectedArr[0].id === 1
    ) {
      //Pick Dates
      if (input === "fromDate") {
        let date = e;
        this.setState({ fromDate: date });
        this.setState({ toDate: date });
      } else {
        let date = e;
        this.setState({ toDate: date });
      }
    } else if (
      this.state.step === 4 &&
      this.state.datesQuestionSelectedArr[0].id === 2
    ) {
      //month and year
      this.setState({ [input]: e });
    } else if (this.state.step === 6) {
      if (input === "budgetSuggestion") {
        console.log("in budget Suggestion");
        const budgetSuggestion = !this.state.budgetSuggestion;
        this.setState({ budgetSuggestion });
      } else {
        //budget Slider
        console.log(e.target.value);
        this.setState({ [input]: e.target.value });
      }
    } else if (this.state.step === 11) {
      //Anything else
      this.setState({ [input]: e.target.value });
    }
  };

  componentDidMount() {
    let db = firebase.firestore();
    const loadCountries = async () => {
      const snapshot = await db.collection("countries").get();
      this.setState({ countryData: snapshot.docs.map(doc => doc.data()) });
    };
    loadCountries();
  }

  setCity() {
    //console.log("set City");
    if (this.state.selectedCountryArr[0]) {
      if (this.state.selectedCountryArr[0]["cities"]) {
        const cityArr = this.state.selectedCountryArr[0]["cities"];
        this.setState({ citiesData: cityArr });
      } else {
        console.log("in else");
        let cityArr = [];
        const selectedCountry = this.state.selectedCountryArr[0];
        const countryData = this.state.countryData;
        selectedCountry["countriesArr"].forEach(countryId => {
          countryData.forEach(country => {
            if (country.id === countryId) {
              cityArr = cityArr.concat(country.cities);
            }
          });
        });
        console.log(cityArr);
        this.setState({ citiesData: cityArr });
      }
    }
    this.setState({ selectedCityArr: [] });
  }

  trendingCountryClicked = country => {
    let newSelectedArr = [];
    newSelectedArr.push(country);
    this.setState({ selectedCountryArr: newSelectedArr }, this.setCity);
  };

  cityCardClicked = city => {
    let newSelectedCityArr = this.state.selectedCityArr;
    newSelectedCityArr.push(city);
    this.setState({ selectedCityArr: newSelectedCityArr });
  };

  selectOneCard = (input, x) => {
    let selected = [];
    selected.push(input);
    this.setState({ [x]: selected });
  };

  selectManyCard = (object, x) => {
    let arr = this.state[x];
    if (arr.indexOf(object) === -1) {
      arr.push(object);
      this.setState({ x: arr });
    } else {
      arr = arr.splice(arr.indexOf(object), 1);
      this.setState({ x: arr });
    }
  };

  handleSlider = value => {
    console.log(value);
    this.setState({ budgetPerPerson: value.value });
  };

  updateNumOfTravellers = () => {
    if (
      this.state.selectedTravellingForArr[0].id === 1 &&
      this.state.numOfTravellers !== "1"
    ) {
      this.setState({ numOfTravellers: "1" });
    }
    if (
      this.state.selectedTravellingForArr[0].id === 2 &&
      this.state.numOfTravellers !== "2"
    ) {
      this.setState({ numOfTravellers: "2" });
    }
  };

  render() {
    return (
      <div>
        {/* <h1>Multi Step Form : step - {this.state.step}</h1> */}
        <Progress completed={(this.state.step / 12) * 100} />
        <br />
        {this.loadPageByStep()}
      </div>
    );
  }

  loadPageByStep() {
    switch (this.state.step) {
      case 1:
        return (
          <SelectCountry
            handleChange={this.handleChange}
            data={this.state.countryData}
            nextClicked={this.nextStep}
            prevClicked={this.prevStep}
            selected={this.state.selectedCountryArr}
            trendingCountryClicked={this.trendingCountryClicked}
          />
        );
      case 2:
        return (
          <SelectCity
            countryName={this.state.selectedCountryArr[0].name}
            handleChange={this.handleChange}
            data={this.state.citiesData}
            nextClicked={this.nextStep}
            prevClicked={this.prevStep}
            selected={this.state.selectedCityArr}
            recommendCities={this.state.recommendCities}
            recommendCitiesClicked={this.recommendCitiesClicked}
            cityCardClicked={this.cityCardClicked}
          />
        );
      case 3:
        return (
          <SelectOneCardQuestion
            question="Are your travel dates finalized?"
            name="datesQuestionSelectedArr"
            cardWidth="col-md-6"
            data={this.state.datesQuestionArr}
            selected={this.state.datesQuestionSelectedArr}
            onClick={this.selectOneCard}
            nextClicked={this.nextStep}
            prevClicked={this.prevStep}
          />
        );
      case 4: {
        if (this.state.datesQuestionSelectedArr[0].id === 1) {
          return (
            //show date input
            <DateInput
              fromDate={this.state.fromDate}
              toDate={this.state.toDate}
              handleChange={this.handleChange}
              nextClicked={this.nextStep}
              prevClicked={this.prevStep}
            />
          );
        } else {
          //show month input
          return (
            <MonthInput
              monthOptions={this.state.monthData}
              handleChange={this.handleChange}
              selectedMonth={this.state.selectedMonth}
              yearOptions={this.state.yearData}
              selectedYear={this.state.selectedYear}
              nextClicked={this.nextStep}
              prevClicked={this.prevStep}
            />
          );
        }
      }
      case 5: {
        //Travelling for?
        return (
          <SelectOneCardQuestion
            question="What are you travelling for?"
            name="selectedTravellingForArr"
            cardWidth="col-md-6"
            data={this.state.travellingForData}
            selected={this.state.selectedTravellingForArr}
            onClick={this.selectOneCard}
            nextClicked={this.nextStep}
            prevClicked={this.prevStep}
          />
        );
      }
      case 6: {
        // Budget slider & number of ppl travelling
        this.updateNumOfTravellers();
        return (
          <BudgetSlider
            value={this.state.budgetPerPerson}
            handleSlider={this.handleSlider}
            numOfTravellers={this.state.numOfTravellers}
            handleChange={this.handleChange}
            nextClicked={this.nextStep}
            prevClicked={this.prevStep}
            budgetSuggestion={this.state.budgetSuggestion}
          />
        );
      }
      case 7: {
        return (
          //accomodation question?
          <SelectOneCardQuestion
            question="Have you finalized your Accomodation?"
            name="selectedFinalizedAccomodationArr"
            cardWidth="col-md-6"
            data={this.state.finalizedAccomodation}
            selected={this.state.selectedFinalizedAccomodationArr}
            onClick={this.selectOneCard}
            nextClicked={this.nextStep}
            prevClicked={this.prevStep}
          />
        );
      }
      case 8: {
        return (
          <AccomodationPreference
            accomodationTypeData={this.state.accomodationTypeData}
            selectedAccomodationType={this.state.selectedAccomodationType}
            roomBudgetData={this.state.roomBudgetData}
            selectedRoomBudgetData={this.state.selectedRoomBudgetData}
            onClick={this.selectManyCard}
            nextClicked={this.nextStep}
            prevClicked={this.prevStep}
          />
        );
      }
      case 9: {
        return (
          <SelectOneCardQuestion
            question="What do you like to do while travelling? (select atleast one)"
            name="selectedActivitiesDataArr"
            cardWidth="col-md-3"
            data={this.state.activitiesData}
            selected={this.state.selectedActivitiesDataArr}
            onClick={this.selectManyCard}
            nextClicked={this.nextStep}
            prevClicked={this.prevStep}
          />
        );
      }
      case 10: {
        return (
          <FoodAndShoppingPref
            foodCostData={this.state.foodCostData}
            selectedFoodCostArr={this.state.selectedFoodCostArr}
            onFoodCostClick={this.selectOneCard}
            diningEnvData={this.state.diningEnvData}
            selectedDiningEnvArr={this.state.selectedDiningEnvArr}
            onDiningEnvClicked={this.selectManyCard}
            shoppingPrefData={this.state.shoppingPrefData}
            selectedShoppingPrefArr={this.state.selectedShoppingPrefArr}
            onShoppingPrefClicked={this.selectManyCard}
            nextClicked={this.nextStep}
            prevClicked={this.prevStep}
          />
        );
      }
      case 11: {
        return (
          <AnythingElse
            data={this.state.anythingElse}
            handleChange={this.handleChange}
            nextClicked={this.nextStep}
            prevClicked={this.prevStep}
          />
        );
      }
      case 12: {
        return <PersonalDetails />;
      }
    }
  }
}

export default MultiStepForm;
