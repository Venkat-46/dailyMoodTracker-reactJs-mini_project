In this project let's build an **Daily Mood Tracker Application** by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a component, routing concepts, authentication and authorization, and adding responsiveness to the website

This is an individual assessment. All work must be your own. You can request for the feedback after your project submission in the discussions.

### Prerequisites

#### UI Prerequisites

<details>
<summary>Click to view</summary>

- What is Figma?
  - Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the <a href="https://www.figma.com/" target="_blank">website</a>
- Create a Free account in Figma.
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=hrHL2VLMl7g&t=37s" target="_blank">this</a> video to create a free Figma account. Watch the video upto **00:50**
- How to Check CSS in Figma?
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=B242nuM3y2s" target="_blank">this</a> video to check CSS in a Figma screen. Watch the video upto **02:45**.
- Export Images in Figma screen

  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=NpzL1MONwaw" target="_blank">this</a> video to export images from a Figma screen.
  - Click on the Export button to get Export options as shown in the below image.

  <div style="text-align:center;margin:10px 0px 0px 45px;width:200px;">
    <img src="https://assets.ccbp.in/frontend/react-js/figma-export-option.png" />
  </div>

- Upload your exported images from Figma to Cloudinary and get image URLs from Cloudinary. Refer <a href="https://learning.ccbp.in/projects/course?c_id=fe4c935d-3ad5-4bb8-a1a5-9b045ae70010&s_id=2f72d6fe-09a7-4c0a-b0db-196740c853a0&t_id=6535e48d-fb4e-45c4-9654-3da423c79e26" target="_blank">this</a> session for better understanding.

</details>

#### Design Files

<details>
<summary>Click to view</summary>

- You can check the **Design Files** for different devices <a href="https://www.figma.com/file/jVLTUaosvGC06wdUeGh6HD/React_JS-Exams?type=design&node-id=2421-16369&mode=design&t=OdbsXjT8f6wH409K-0" target="_blank">here</a>.

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>
The app must have the following functionalities

- **Login Route**

  - When an invalid credentials are provided and the **Login** button is clicked, then the respective error message received from the response should be displayed
  - When a valid credentials are provided and the **Login** button is clicked, then the page should be navigated to the Home Route
  - When an _unauthenticated_ user tries to access the Home Route, and Reports Route, then the page should be navigated to Login Route
  - When an _authenticated_ user tries to access the Home Route, and Reports Route, then the page should be navigated to the respective route
  - When an _authenticated_ user tries to access the Login Route, then the page should be navigated to the Home Route
  - When the **Show Password** checkbox is checked, then the password should be shown
  - When the **Show Password** checkbox is unchecked, then the password should be masked

- **Home Route**

  - When an authenticated user opens the Home Route,
    - Users should be able to see a list of dates for a month in a calendar view as shown in the Figma, with the ability to view and select days across different months, from January to December.
    - It should have a list of days (Sun to Sat) and their respective list of dates.
    - Users should be able to see the list of emojis.
    - The emojis are `Very Happy`, `Happy`, `Neutral`, `Sad`, and `Very Sad` each represented by a corresponding emoji.
    - Users should be able to click an emoji, then the respective emoji should become active.
    - Users should be able to click the date button,
      - If there is no emoji on the date, then the active emoji should be displayed on the date.
      - If the emoji in the date and the active emoji are not the same, then the emoji in the date should be replaced with the active emoji.
      - If the emoji in the date and active emoji are the same, then the emoji should be removed from the date.
    - Users should be able to see the 'emoji names' and 'days' as filters.
    - Users should be able to select the options in the 'emoji names' and 'days' filters and can see the filter count according to the number of selected emoji on the selected day.
    - After selecting options in the 'emoji names' and 'days' filters, the filter count should be dynamically calculated based on the number of selected emojis on the selected day of the currently active month. If the month is changed, the filter count should update to reflect the count of selected emojis on the selected day of the new month.
    - Initially, users should be able to see,
      - The `Very Happy` emoji displayed as the active emoji.
      - The `Very Happy` emoji name and `Sun` day options selected in the filters by default.
    - Selected date items and filter counts should persist for the user even when changing between months, ensuring continuity in user selections and filter application across different month views.

- **Reports Route**

  - When the **Reports** button in the Header is clicked, then the **Reports** view should be displayed as shown in the Figma.
  - Emoji cards within the Reports view should aggregate and display the sum of the selected mood emojis.

- **Not Found Route**

  - When a random path is provided as the URL, then the page should navigate to the Not Found Route

</details>

<details>
<summary>API Requests & Responses</summary>
<br/>

**loginApiUrl**

#### API: `https://apis.ccbp.in/login`

#### Method: `POST`

#### Request:

```json
{
  "username": "rahul",
  "password": "rahul@2021"
}
```

#### Description:

Returns a response based on the credentials provided

#### Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9. nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- For Mini Projects, You have to use HTML elements to style the React Components. Usage of `styled-components` (CSS in JS) to style React components are not supported in Mini Projects. Test cases won't be passed, if you use styled components.
- Refer to the below Example for the usage of `data-testid` in the HTML elements

  - Example: `<div data-testid="questionItem" className="question-item"/>`

- **Routes**

  - `Login` Route should consist of `/login` in the URL path
  - `Home` Route should consist of `/` in the URL path
  - `Reports` Route should consist of `/reports` in the URL path

- **Home Route**

  - The emoji image will be displayed in the emoji items should have alt attribute value as the value of the key `emojiName` from the **emojisList** provided.
  - The days will be displayed in the day items should have the text value as the value of the key `day` from the **daysList** provided.
  - The days option elements will be displayed in the day items should have the text value as the value of the key `day` from the days list provided.
  - When any date item in the dates list is clicked, then the active emoji should be displayed in the respective date item. The emoji image which is displayed in the date items should have alt attribute value as the value of the key `date` from the **initialMonthsList** provided.
  - Kindly follow the details as shown in figma.
  - The Next icon button which is used to display the next month should contain the test id with value as `next-button`.
  - The Previous icon button which is used to display the previous month should contain the test id with value as `previous-button`.

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/nxt-slides/monthly-emojis-bg.png](https://assets.ccbp.in/frontend/react-js/nxt-slides/monthly-emojis-bg.png) **background image**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #1c1a28; width: 150px; padding: 10px; color: white">Hex: #1c1a28</div>
<div style="background-color: #ffbe38; width: 150px; padding: 10px; color: black">Hex: #ffbe38</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #42404d; width: 150px; padding: 10px; color: white">Hex: #42404d</div>
<div style="background-color: #4e5d72; width: 150px; padding: 10px; color: white">Hex: #4e5d72</div>
<div style="background-color: #cbd5e1; width: 150px; padding: 10px; color: black">Hex: #cbd5e1</div>
<div style="background-color: #343243; width: 150px; padding: 10px; color: white">Hex: #343243</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

### User Credentials

<details>
<summary>Click to view user credentials</summary>

<br/>

**You can use any one of the following credentials**

```text
  username: aakash
  password: sky@007
```

```text
  username: agastya
  password: myth#789
```

```text
  username: advika
  password: world@5
```

```text
  username: binita
  password: modest*6
```

```text
  username: chetan
  password: vigor$life
```

```text
  username: deepak
  password: lightstar@1
```

```text
  username: harshad
  password: joy@85
```

```text
  username: kapil
  password: moon$008
```

```text
 username: rahul
 password: rahul@2021
```

```text
  username: shravya
  password: musical#stone
```

```text
  username: saira
  password: princess@9
```

<br/>
</details>

### Project Submission Instructions

- For Mini Projects, you can submit the test cases at your own pace. But we suggest you to submit the code to know the percentage of completion through test cases and that score will be considered for your interviews.

- Also it's important to publish your code frequently using `Step - 4` in the Instructions tab.

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
