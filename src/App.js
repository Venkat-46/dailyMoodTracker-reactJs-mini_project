import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ProjectContext from './ProjectContext'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Reports from './components/Reports'
import NotFound from './components/NotFound'
import './App.css'

// #region - Use these lists in your code.

const daysList = [
  {
    id: '3639dd44-a5d5-11ec-b909-0242ac120002',
    day: 'Sun',
    dayNumber: 1,
  },
  {
    id: '3639e17c-a5d5-11ec-b909-0242ac120002',
    day: 'Mon',
    dayNumber: 2,
  },
  {
    id: '3639e37a-a5d5-11ec-b909-0242ac120002',
    day: 'Tue',
    dayNumber: 3,
  },
  {
    id: '3639e532-a5d5-11ec-b909-0242ac120002',
    day: 'Wed',
    dayNumber: 4,
  },
  {
    id: '3639e8c0-a5d5-11ec-b909-0242ac120002',
    day: 'Thu',
    dayNumber: 5,
  },
  {
    id: '3639ea32-a5d5-11ec-b909-0242ac120002',
    day: 'Fri',
    dayNumber: 6,
  },
  {
    id: '3639eb90-a5d5-11ec-b909-0242ac120002',
    day: 'Sat',
    dayNumber: 0,
  },
]

const initialMonthsList = [
  {
    month: 1,
    monthName: 'January',
    dates: [
      {
        id: '1cdb79c2-1ee4-4703-8deb-a18767dde08a',
        date: '01',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '2198473e-b125-4e57-a8e0-7acc351994aa',
        date: '02',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '1702545e-a1df-45b7-b82e-23a1e62b7569',
        date: '03',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0cf9bad1-16fa-4962-87e6-3ce52b5408b6',
        date: '04',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '98a7e9fc-3ba5-407b-8a08-cdb8f4f4ce75',
        date: '05',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '879b2ed2-94ee-4c23-9240-3cfd0d52c04d',
        date: '06',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '8e8015b2-67a5-4a80-8d86-d4d9646aece5',
        date: '07',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'b2087e86-6fb4-4f42-bf6c-0f7c40877c10',
        date: '08',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9b79445b-b3e4-43fe-9eb3-d1868a8d347d',
        date: '09',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '2d2aa993-67d7-4c6e-8d54-1779742a05a1',
        date: '10',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '17f437d2-b2b9-4ba6-afb0-1212213640f6',
        date: '11',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0a966601-316a-4685-b2be-99e0b98abaa0',
        date: '12',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'a5ebb416-8215-4208-910c-0a6927ef2cc5',
        date: '13',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'efdf381e-e41c-49a7-8fb7-5fcdbc41ba08',
        date: '14',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'ddd38f4f-0b90-4755-88b5-a33e495e0bac',
        date: '15',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '81d465e8-46ab-401b-b2fa-389dce00a2b4',
        date: '16',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e8e928b9-75ba-4bc3-9708-a23e7d87d8d8',
        date: '17',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '34f81df6-6eea-477a-859d-1c3151d2ea59',
        date: '18',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '5a707d1f-1ba9-491a-b9f2-2361137daebb',
        date: '19',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'b1e34bdc-2513-4f24-bb32-4a46b0099d8f',
        date: '20',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '5d304bd7-6f00-4ddd-a7d6-177937463c8b',
        date: '21',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '8ed9aa5e-06df-4abc-a7f5-952464751fe5',
        date: '22',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'b39fb424-cacf-4f22-94cc-5a513ab18369',
        date: '23',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '3d863eb7-3eda-43a9-9d73-29060afb1c37',
        date: '24',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'fd745d96-d9e4-4de9-ba00-615325a2eed0',
        date: '25',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '982f6571-caa7-4d14-8600-f57d1c073140',
        date: '26',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '987c1daa-1c49-4d6d-b237-37d1097c3f3a',
        date: '27',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '6d408472-b434-41ad-a4fe-79d40cd0fe0b',
        date: '28',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'f17c2ff1-c403-41cd-8da8-e9f01ea77921',
        date: '29',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'b99d2020-774d-40d4-9a1a-acb7a35d80b7',
        date: '30',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'd88fb45b-5b19-4b1e-bf44-44b26c976b58',
        date: '31',
        emojiUrl: '',
        emojiName: '',
      },
    ],
  },
  {
    month: 2,
    monthName: 'February',
    dates: [
      {
        id: '559d5937-10ce-468a-bb39-1fce753f4494',
        date: '01',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '6ae32019-f862-46ce-93fa-cb4d3e835e07',
        date: '02',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'a211e36d-5bf8-4d71-8258-138d9f4ee4a8',
        date: '03',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '8e699299-b73f-493c-ac09-03d309e293d5',
        date: '04',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '052502e9-f167-4f1d-ac58-60d4f69f2a9c',
        date: '05',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '2d249022-3e4a-428d-948a-c9994cd6fb44',
        date: '06',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '2ea5b7f6-8a20-4e43-9afd-15d67ad20364',
        date: '07',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'fa25cf41-f047-4512-902b-6088c2812548',
        date: '08',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '7c009e65-6d1b-4507-9c51-c4e47040c392',
        date: '09',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '5aa2f668-b5ca-41d5-b5da-be86a57aecac',
        date: '10',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0fe86e96-21e1-4119-9cfb-0def46fdc97b',
        date: '11',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '2ac2c4fb-215b-44e8-a683-e44086d0006e',
        date: '12',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '8514d7b7-7c5d-455b-b21d-20c29583f144',
        date: '13',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '6fb56894-4c2f-476b-9c6b-739fa3d40966',
        date: '14',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'cbcc82df-8fed-4d43-8260-451815d2bf14',
        date: '15',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '5c68b06e-c850-43ac-a514-0b65b54f472b',
        date: '16',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '7c3bad43-65ed-448c-a29a-371cc48e2446',
        date: '17',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '747388d4-aaca-4a28-8a29-4b2c940cdeab',
        date: '18',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'd7a918a5-83ff-4492-8375-0f381713e89e',
        date: '19',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'c5adaf8a-a04f-44e3-abdb-2e3d36d8b12a',
        date: '20',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'a0ffa2dd-14e8-420b-84db-cc417c243be9',
        date: '21',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '527dd4aa-e621-4774-9312-131888d7cca2',
        date: '22',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '2606c478-6fde-453a-a7ff-4d53eb9c4f4c',
        date: '23',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '87954f95-9251-4242-9eef-683dcd40053b',
        date: '24',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9a21e108-ef0c-4470-8d1c-66e0f4249324',
        date: '25',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e13a0d01-635c-4935-b843-77819dbe007a',
        date: '26',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '37d62481-65b5-4d64-9658-d53b7b8c90bb',
        date: '27',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '578c9144-d911-40ae-b396-c25719d870ca',
        date: '28',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '4dca2995-ca62-41ec-85b2-913b5ebddfd4',
        date: '29',
        emojiUrl: '',
        emojiName: '',
      },
    ],
  },
  {
    month: 3,
    monthName: 'March',
    dates: [
      {
        id: '038470f4-df27-403e-9e27-1adffda8267d',
        date: '01',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'ad2742ef-f5ca-42ef-b2d7-611b35ceacec',
        date: '02',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '304389d7-c927-48b3-a85d-f4056fac1696',
        date: '03',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '2befe994-5eaa-4c66-806a-736314ad2ac1',
        date: '04',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '4f466fbc-8011-42d2-a1fa-cae3444213f6',
        date: '05',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '161a2df3-89c4-431c-8b4a-af16ad5c4d0c',
        date: '06',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '45b252bb-8449-4373-b4db-f2321a1162b0',
        date: '07',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9abd4729-cb01-4f74-8501-83632043090f',
        date: '08',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '26f2e961-6efb-44fc-a2db-aabb95a0b6e5',
        date: '09',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '23446be0-e8e4-4bb7-beda-05b82b43ff68',
        date: '10',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e74f66c8-8d18-4aa1-99a8-0cc6fbe8b33b',
        date: '11',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'c34e6bec-047a-4fe5-9de5-cad5ee0212d7',
        date: '12',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '443ce2b6-e42d-474c-998f-d08ca16733e6',
        date: '13',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '12c5b485-eb7f-4944-ab47-0a76a5f5e9c5',
        date: '14',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9f6faa7f-e1d8-4c11-a50b-f47b539a1541',
        date: '15',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '2078dd02-f384-44e4-be38-c8b82e2cb87a',
        date: '16',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '26b603da-ce99-4cc5-8865-86ed064cf166',
        date: '17',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'f256fd88-3f44-4b55-a484-d2c72062ee33',
        date: '18',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'baa973ee-9edd-47ba-bce6-d8b98c4ba99e',
        date: '19',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e176fb82-5f30-4b06-a7a2-9c30720d3f3c',
        date: '20',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'cdcd4508-32ee-46c8-a6f2-161bd23009a9',
        date: '21',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'fd4f3479-4546-4a17-b5b0-7a85c0578d1c',
        date: '22',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '38d594d9-481d-4f25-bed2-2cf79a163fa2',
        date: '23',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '5468598d-f9b0-4c6f-89e3-c864721abc9d',
        date: '24',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'b440a023-2997-4b22-9920-56d0530240f3',
        date: '25',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '778ea05b-98f1-4db1-bf33-614adca11731',
        date: '26',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '5b979662-75e8-4d7e-b742-d1866aea9c94',
        date: '27',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'a33477ad-5541-4c97-a747-5f212d170ab1',
        date: '28',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0fac1d35-bf97-4a34-8cfc-e2c23e3db061',
        date: '29',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '79ef5d66-e7f7-4cb0-99ee-c3770f3f2858',
        date: '30',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '420a294c-3632-4d62-a944-d83f2bb9c243',
        date: '31',
        emojiUrl: '',
        emojiName: '',
      },
    ],
  },
  {
    month: 4,
    monthName: 'April',
    dates: [
      {
        id: 'ff9a3981-488e-453c-ab31-5b6d0757d268',
        date: '01',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'ca52164d-f060-4c33-8799-5dd0c8b406c1',
        date: '02',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'bb42babb-8b7c-495a-88ce-3709335e97e7',
        date: '03',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '343ae1d9-754c-4c88-937e-0b905e06d4d0',
        date: '04',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '7d5bd7fa-11ba-47ae-a094-b7dc38720b6d',
        date: '05',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '2c15f578-d09c-4581-8003-7008591d5f23',
        date: '06',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '315ea7f7-146b-4321-a899-d5ba60212e82',
        date: '07',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '098d4e1a-3823-4ef5-b100-dd380fd1dbd6',
        date: '08',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '00534524-2df4-4b5c-9d1e-55c84b6132e2',
        date: '09',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e7041b5e-b97e-4a46-b69e-68e6ee531f9c',
        date: '10',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '167b2753-4df3-4956-a8a4-b8b8d4773339',
        date: '11',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '51f45ce4-03ac-44bf-a8c8-f22596b525fb',
        date: '12',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'a315da97-27a2-4cde-9aa6-c0a2e7eca889',
        date: '13',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '7abab6bd-43b4-4d35-91b9-e62d1c5dd418',
        date: '14',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '6542ed2d-0a2c-4570-a4e8-84e3c6618b03',
        date: '15',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '6d2cfe67-4b8b-4956-9df2-ce9cad4063b8',
        date: '16',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'b0781ae6-b6b6-4c47-a4cf-126f7910f3d2',
        date: '17',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'c92f00cf-f202-468d-9da2-706019baba08',
        date: '18',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0e12b3fa-f6d9-4362-86b1-fb61b19165f1',
        date: '19',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '999d2d47-8e40-479e-96bc-a41703ac493b',
        date: '20',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '6e77f5c6-e95f-46e1-818e-7771d6454761',
        date: '21',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '01819285-e81e-48e0-a20c-df07514e5425',
        date: '22',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '2cf61b00-381e-454f-8724-6ef5641492a4',
        date: '23',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '31ccb293-405c-4c11-a0ce-73ada32de3c9',
        date: '24',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '2f5f71a5-594d-49cd-ab10-08687e0e22d6',
        date: '25',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '464d7dc4-ecf1-4700-93b5-a243fd80efa7',
        date: '26',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'd51c5b73-c086-4459-abcd-126a82b9afee',
        date: '27',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '14f60c1f-81a2-4dbe-9f7c-34ce21fffa39',
        date: '28',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'c66656e9-04a9-4778-b4be-18a4ca3b1e20',
        date: '29',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '607430e9-7b22-4452-a557-24c475c1052d',
        date: '30',
        emojiUrl: '',
        emojiName: '',
      },
    ],
  },
  {
    month: 5,
    monthName: 'May',
    dates: [
      {
        id: '63dc153d-7c68-4ee0-84f8-4506e6fdf558',
        date: '01',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e7732c9a-583c-42ab-ab11-c60f57e696a9',
        date: '02',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '742fee1e-cef5-414f-90e7-4d55b51be8c1',
        date: '03',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e3353306-5097-43f0-a33b-4d606c1c454e',
        date: '04',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'fa01f26c-6ff0-4665-b1c0-373ff52c494d',
        date: '05',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '8f7bad2b-1f46-4659-87ff-de19efe62282',
        date: '06',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'de0261ec-4e81-44f0-9194-972622421bb2',
        date: '07',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '1b6b80a6-f177-4171-b295-d135d81ce00d',
        date: '08',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '6ab782ac-015b-4a63-a4db-3a7976a56262',
        date: '09',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'd6ceb6ef-54cd-4e4e-be91-13fc5c9ac98b',
        date: '10',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '3c00d04f-a153-444e-a25c-d39c1dc6f82c',
        date: '11',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '64b0845b-fac8-4c15-87ab-18e789c8529f',
        date: '12',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'fb7ad7e7-2677-4494-834d-61e12b364db5',
        date: '13',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '3ce271cd-4dd7-421e-96fe-82a94aed39b1',
        date: '14',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9589def5-02bd-4237-9114-40e38fa016e7',
        date: '15',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e1608006-74de-49ab-96d7-f9ca83ca7d93',
        date: '16',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '76af698f-fc96-411c-a578-c318cf2482bd',
        date: '17',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '82c56b1d-9fd8-4de0-a42f-fa943b458a68',
        date: '18',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'c6fa0508-2692-4b39-abf2-6f0d5989ee90',
        date: '19',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'ad09ed48-ec90-4260-80c2-6b894af40dc1',
        date: '20',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'd7b3a9b2-bc49-4fd9-bba1-46c507490e01',
        date: '21',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '46118a25-dfd9-4c16-89d5-9d5973e03905',
        date: '22',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'acab7224-2c9c-403a-bc51-def2c1e44395',
        date: '23',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'cfe53010-f78a-47bf-a791-411ada6ec476',
        date: '24',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '61b8dc35-5181-40cc-98a1-971c78f7d602',
        date: '25',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '6e6b053a-ab7d-4b1a-bb8c-a5de62c156dd',
        date: '26',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'c71d13a6-518d-4e8f-b390-dc51fa18cf3b',
        date: '27',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'eae88d65-4340-485f-9fb1-1587376a2fbf',
        date: '28',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '602bd41a-7a62-41bc-803a-98ee7e518f18',
        date: '29',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'db5af6e4-4a5b-46b0-acf6-1d659d91fab3',
        date: '30',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '46d140a2-2b30-4fff-9371-c9033bd82fc7',
        date: '31',
        emojiUrl: '',
        emojiName: '',
      },
    ],
  },
  {
    month: 6,
    monthName: 'June',
    dates: [
      {
        id: '28786df2-3b3f-444a-b903-a212f92501f3',
        date: '01',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '3329971f-5bb5-4ce0-97d8-3b32bcc8866e',
        date: '02',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'ebc2f93f-f93b-4ce1-827a-a4f832e6c76b',
        date: '03',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'c94a29d9-fb10-48a2-b8f1-2f713575becd',
        date: '04',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'b3a1684b-17e8-4910-9878-5dda5a61706e',
        date: '05',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '93f4c717-8803-4d21-b11a-b7ef52e7c011',
        date: '06',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '6daa0b20-d1e3-4c1a-98fd-0ebf4b2f2284',
        date: '07',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'c325142a-0f3f-4398-9512-1fafc0b6b988',
        date: '08',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '2b45d2f5-8ab7-435e-8f69-d39bc4391468',
        date: '09',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '2ee60b71-ab89-4727-8ef0-73e0f3ca7a51',
        date: '10',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '6f6317dd-2b88-474c-b76b-86cc3394d43b',
        date: '11',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'a30a6518-7e3e-4726-aaad-b3e40055f7de',
        date: '12',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '5dcb70ce-4336-4db9-bf95-1db5b66ba1cf',
        date: '13',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '750d3115-354d-4788-9cac-8eb540b3123b',
        date: '14',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '5d67dccc-4a97-4c62-b2cb-b3a6069f673c',
        date: '15',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '3253ffe0-6731-437f-b973-72bdaf6153de',
        date: '16',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '56482943-58b0-48c3-9df6-b4c319ae2be8',
        date: '17',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e8961c53-b9a3-4bc8-8eaf-0b7336750dfb',
        date: '18',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9f55e2e3-68b2-4ac1-8012-a26899b838b8',
        date: '19',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '58c83241-f14a-4ea4-80a3-5e04682d928d',
        date: '20',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '8c46b1c2-1a78-45a1-88eb-2b7adc06e4bc',
        date: '21',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '323b68ad-49ce-4d5a-baf5-6cfca0626905',
        date: '22',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '42924f04-54fd-4fd5-8a1a-66cae5c8ba19',
        date: '23',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'f8181c4c-ee74-4bcb-87a7-fad9e610b566',
        date: '24',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '63d91361-a14d-4fbc-a1cf-42d69d259a47',
        date: '25',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '88cb3ab6-1baa-4001-9430-ecebc482e534',
        date: '26',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'ade27b06-4e99-4148-b644-5cb47135bdda',
        date: '27',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '4daa9e1f-b776-43eb-bb94-17a51cd5bf00',
        date: '28',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'd20fdaf1-c8cb-48be-a597-2ab7ed4437bc',
        date: '29',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0337f8a1-aa2d-4691-bd53-f65443458ac7',
        date: '30',
        emojiUrl: '',
        emojiName: '',
      },
    ],
  },
  {
    month: 7,
    monthName: 'July',
    dates: [
      {
        id: '0aadc43e-aa7e-4606-b5fa-dc20175a9a33',
        date: '01',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '7ffb643b-bf69-4c18-b2a0-4cf8a1319e4d',
        date: '02',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '01988547-531c-44ba-acd1-06a62690b12e',
        date: '03',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'b3ee13a3-8f70-49ee-bbec-806b346812dc',
        date: '04',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '313e8ade-a6da-411c-a04c-8a4d6d06ff00',
        date: '05',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0ec65979-d7e5-4134-87ea-9451c17522f1',
        date: '06',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'c81425d5-ce98-4e80-9987-ea1389133a94',
        date: '07',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'f583624d-6ab2-487f-9df3-3a4ae453045b',
        date: '08',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '647e7a6b-285b-46e7-a084-0d4dd1ab1bd7',
        date: '09',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9f427227-0758-4277-a766-5bb6dd8c563a',
        date: '10',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'bc22912b-6b06-46d8-91b4-1ad9d77c724c',
        date: '11',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '12dc47c2-d3a9-40fa-8f00-d7233b4cf014',
        date: '12',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'fe3229a8-b294-47e5-8b98-e9c8d992da53',
        date: '13',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'b9c872de-1819-4811-b1bb-5d57a4d19257',
        date: '14',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '8edfb78d-7e70-41db-96a7-972281bfcd3e',
        date: '15',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '769e06e7-4238-431f-b358-ac67be9ff6e0',
        date: '16',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'a38853e8-3cf5-48a9-8da0-cb376cfdddb6',
        date: '17',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'd6f388b4-03ee-4787-9973-49ef94adcd03',
        date: '18',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '7fa7a410-b6c3-419c-b366-12ab5c3fda49',
        date: '19',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '30e4b052-b7fa-45bf-bd21-bbafcef2866a',
        date: '20',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'bc65047a-1902-47ab-8933-cbc97af1c8b3',
        date: '21',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '6991e3a3-24ab-4496-9355-f73f4ae92290',
        date: '22',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'd0bd6c70-a30f-4570-ab23-861a7a78f3fe',
        date: '23',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e53f6fe5-48ba-4e2b-a827-0016468db022',
        date: '24',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0ae88087-8a93-4fc5-bbcc-3d5bc31f9062',
        date: '25',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0042dcd0-65a1-42f5-a688-e60e1bb31ff2',
        date: '26',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9ef44ac2-37b6-4d71-9346-c402f745a3c1',
        date: '27',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '793545ef-6f7a-47c2-9960-e03e5e128df2',
        date: '28',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9b9f591e-6af4-412c-81d5-0480e93814bd',
        date: '29',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'ded6d4f0-776c-484f-98c6-24580a72a2f6',
        date: '30',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'deee16d1-5b1f-4fb7-86ad-698893154f51',
        date: '31',
        emojiUrl: '',
        emojiName: '',
      },
    ],
  },
  {
    month: 8,
    monthName: 'August',
    dates: [
      {
        id: '2d595e13-401a-4ab8-8e65-38ee53fd5c32',
        date: '01',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '681da0dc-acde-4c4e-83b0-468c248bd1db',
        date: '02',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '132f1881-a460-4399-889e-7febb19f4470',
        date: '03',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'a65aecf7-2368-4853-aaff-030b3405f09e',
        date: '04',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '482a0336-769c-4188-9427-4380379c6b18',
        date: '05',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '37b16c9f-2f3e-4d22-b51e-934dc8dc1cac',
        date: '06',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'd39b0ba3-9ca8-47c7-8d30-85884e6ab719',
        date: '07',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '002387a1-917d-4cba-bb60-c54f6c8fda5b',
        date: '08',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '440ff3b2-5f94-4c3c-89a3-643e2fdfb270',
        date: '09',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0c6916ed-eba8-4c99-a08c-7a251b571365',
        date: '10',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '64b9cd27-49fd-4ae3-90b1-c2bd55645aa9',
        date: '11',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '246f3ef8-219f-4bb4-b926-08a8f8ad82f2',
        date: '12',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'c89a8159-8b02-40ae-bf11-6972705f5dbc',
        date: '13',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '10fd51c6-d770-4826-aead-3149fff625fb',
        date: '14',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '4229f303-2355-48bb-a24c-be0179c289e7',
        date: '15',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '1056d2a4-214a-4835-b310-711b77bc3cff',
        date: '16',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'f225c6d0-7c16-4fd6-b969-1a67d602066f',
        date: '17',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'fa1815e5-279f-4781-821d-22602cd8c4e3',
        date: '18',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '5235e476-ace3-43b4-ba95-fe550cd388f7',
        date: '19',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'dfa90e80-7a60-4e63-8781-28ce404a4f62',
        date: '20',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '2071c85d-e82c-4bb5-a31a-33b33ae2fceb',
        date: '21',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '516699e6-0bbe-44e9-a36a-31af6ff28823',
        date: '22',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '7fc39a1e-41cc-4e10-aa22-03a07e01445b',
        date: '23',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'a7c8176a-5db0-4cdd-998c-97319c710e00',
        date: '24',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9a651578-76bb-41fa-8f3e-ecc56c88a508',
        date: '25',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e1e8c60a-f615-4df7-9411-59a08100260d',
        date: '26',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '79d49c41-55c6-424e-950b-6c8109782371',
        date: '27',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '8211ac3d-33b2-4fc2-876f-344caa11cbd1',
        date: '28',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0f666efa-a4c7-4ebd-8c0f-9eda2ad5d830',
        date: '29',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'ca87c58e-89fc-41df-bde5-15df35ee9b2f',
        date: '30',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '66098293-8b3d-4ca5-ad73-ff773eb10c79',
        date: '31',
        emojiUrl: '',
        emojiName: '',
      },
    ],
  },
  {
    month: 9,
    monthName: 'September',
    dates: [
      {
        id: '42223290-f742-46ac-bc1a-a83e50c2eef5',
        date: '01',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '281dd17b-1e9f-4f4d-8d11-7522c061db14',
        date: '02',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'a54795c9-32a8-4357-ad92-ffdd46f071c4',
        date: '03',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e999d09e-c2e5-4b8d-a24a-ac730e1079d9',
        date: '04',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '64d48ba6-0524-44b9-a80c-74f685f1986b',
        date: '05',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'c612312b-e24f-42cf-b122-c9e42cf55720',
        date: '06',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'bf2dcbe0-12c6-4e06-96bb-371974e87d79',
        date: '07',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9b65c60a-2d08-4f50-923d-7f9b33d4f721',
        date: '08',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '680e9cfe-b590-43d4-ad9a-bccbcdf9b731',
        date: '09',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '7d479fbf-d20b-4ec0-a242-7fa462e69239',
        date: '10',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0752f36f-f758-44f6-bbdc-306b78ea798c',
        date: '11',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'ac0330bb-fa3d-421e-bfe0-7e304f45a8ed',
        date: '12',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'a8ccb12e-c7e9-4dcd-a416-5c8903029aa1',
        date: '13',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'da252aba-bdec-4b53-9fa2-ced8ac0f5682',
        date: '14',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '3188d44b-4cd4-46ba-9875-d8007d49099b',
        date: '15',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'aad9b0a9-1f15-465f-9f5a-25d876feefa3',
        date: '16',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '4e818bb3-9fe7-4551-9c73-6705b4be5ee4',
        date: '17',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '761db470-969b-4d00-b928-cdf043472eb7',
        date: '18',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'c9304afc-08bc-4a93-bc3c-6cd0febfcb91',
        date: '19',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '29e1b4cd-d99b-4da2-8d6f-93be25a58ab3',
        date: '20',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '387fbd9d-9363-4c54-a96f-8699efd5d41f',
        date: '21',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0ce5e81f-5799-4380-9ada-7f8aefb3b2bf',
        date: '22',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '96d23afb-5e3a-4956-912e-e438eb35ccf6',
        date: '23',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'cbf2cb91-dabe-49bb-844d-c37820c02502',
        date: '24',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'f7b6a9cb-643b-40c3-99f7-6a9965931f75',
        date: '25',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'bc0608bc-8c81-43df-91dc-a8fc4551955b',
        date: '26',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'dbc744e7-931d-416e-be70-428a707d10dc',
        date: '27',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '38f14124-a56c-46f9-adce-d6b3d1dd9044',
        date: '28',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'ae2d8e1a-a0a5-4289-84d7-fdb2df5a7329',
        date: '29',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '60c047dd-6c14-4c4c-8f67-d4aef49dee69',
        date: '30',
        emojiUrl: '',
        emojiName: '',
      },
    ],
  },
  {
    month: 10,
    monthName: 'October',
    dates: [
      {
        id: '4da984c3-578a-49e8-a60d-f2068483fe99',
        date: '01',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9b01f25e-7afe-4534-b7a7-d6cec3c8fa2d',
        date: '02',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e703d9a4-1f3d-41cc-8461-401cd0f11084',
        date: '03',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'a296e513-d7bc-4cdb-939d-7cbf94ffa1b8',
        date: '04',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'bd7b6784-89c4-40af-85dd-296992b3a247',
        date: '05',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '564901fd-cf87-4cac-a26a-01ff70c8b0df',
        date: '06',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '86b6e767-5ae4-444e-8a94-6c1d6d75fcea',
        date: '07',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '74940f93-87ac-4067-883a-b14090db1b15',
        date: '08',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9a003b59-7116-4971-88e4-997f00ee0a5a',
        date: '09',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '38216d18-3455-4904-8a89-e0b4d2326f2f',
        date: '10',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '3f235f40-cee9-4093-aaf1-704748526f72',
        date: '11',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '8838903e-14b5-4c8a-a37c-73a7743a71ea',
        date: '12',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '03f42e78-bb1e-4351-91ca-501d2e5ff74b',
        date: '13',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'f3ef8b9d-9044-4bc1-bd7f-ecce2417b048',
        date: '14',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e8857f6f-89a7-4ba9-9537-0631ce642c0f',
        date: '15',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '3d1ca757-a9cb-49f2-9281-8a43776c2fbb',
        date: '16',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '98876711-65e1-46ff-9c1b-8670bcfaa2e6',
        date: '17',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '6be334fa-70cb-45ec-a604-f656f5ea3b74',
        date: '18',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '5db5163e-eb47-4d30-947c-d1fe17b4c4c1',
        date: '19',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0e0d11b4-b466-4838-9abe-97a29d7f7bc9',
        date: '20',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'f62c049d-596a-473a-a8eb-ecb6e191db4e',
        date: '21',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'bb62d4c2-30e0-4cc2-9594-a25c4c612771',
        date: '22',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'd94282fb-c64e-4ec0-8ac8-3d6cf21bfa97',
        date: '23',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '91f611db-15f9-4cef-b629-b981046a3a19',
        date: '24',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'bb04311c-b59e-4e56-b5aa-04faa78cdc2e',
        date: '25',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '062d5602-1d41-4717-a004-e2403657b138',
        date: '26',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '944f2cb1-524d-4e64-a14c-b0e9756e4e0f',
        date: '27',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '13834a2b-09e1-4744-bf54-95de2bf1332f',
        date: '28',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'b45578f8-fbf2-4b57-9f17-c68ef353d35a',
        date: '29',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'a697b1d0-7142-4574-bf93-32bd46fff1f7',
        date: '30',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '11d26ed9-83bc-4795-8e21-ce67a227ea7d',
        date: '31',
        emojiUrl: '',
        emojiName: '',
      },
    ],
  },
  {
    month: 11,
    monthName: 'November',
    dates: [
      {
        id: '17b7b1a7-09ad-4f13-b5e8-5d992bf2819b',
        date: '01',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '983925cb-3292-40ee-b4ba-1adc6a9a9bc8',
        date: '02',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '6994f02b-4ddb-499f-9971-3ea798b9dd29',
        date: '03',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'ac585430-3d92-4c9c-90e9-ae39bf94f70e',
        date: '04',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'b56d0d9f-e9c7-4b69-8b1c-59468828d8d0',
        date: '05',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'd29fc29b-b621-47ad-8bae-49dea26f8029',
        date: '06',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '47225c7f-9a7b-479c-b32b-41bf8ce46602',
        date: '07',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9e8b7814-fb01-4a5a-91ea-f912b39f8d3c',
        date: '08',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'f92c6583-d756-4e39-b11d-872f76e4fc98',
        date: '09',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '3275ca10-ec81-4190-b4f4-c0d96bff1b05',
        date: '10',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '293b379f-8c48-4007-bb0b-a8016084d466',
        date: '11',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '1b02404c-b875-4ef5-a70e-fcc164a46d04',
        date: '12',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '5d9f3f2b-ae8d-4bf7-9216-c591c7ebc047',
        date: '13',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '83db3d88-13be-41dc-9671-8e280e0e67fd',
        date: '14',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'f4a31ddf-23e7-45fe-a1b1-51c2928fca18',
        date: '15',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '716e3f0e-1d5d-47c4-b30e-f9745b5c6625',
        date: '16',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'f901de4c-dbd1-4e3d-b894-63fbc3a9b699',
        date: '17',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'b66feafe-7694-45f9-9b57-1548c099ebc5',
        date: '18',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'b549c633-d347-42a8-8f0c-55e157e20e0c',
        date: '19',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9b221843-7d52-43d7-97cd-49b4a9cd20ea',
        date: '20',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '5b3a3502-42c6-44cd-b5df-e0e52cb47317',
        date: '21',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '53d8bcc1-b059-4c7e-bd02-21962aa9690a',
        date: '22',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0b7e9a4c-12ac-4167-a5f5-76ab111263c4',
        date: '23',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '174fe0f5-33ff-4231-8e28-741f80f446aa',
        date: '24',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '9fe70d59-7bca-4945-8a27-2e5b5b21712f',
        date: '25',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '532b207f-1d8f-46ce-ab10-baae315a5984',
        date: '26',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '8c6c53d7-dd64-4d79-9e61-e02a59dd504c',
        date: '27',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'ae04cda3-cc4e-481d-a2d3-2b5824a7ba25',
        date: '28',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '006ccc59-e4a8-43e1-91fa-16a3bcc2851a',
        date: '29',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '7899919d-b3ea-4e81-9be4-15415230a34a',
        date: '30',
        emojiUrl: '',
        emojiName: '',
      },
    ],
  },
  {
    month: 12,
    monthName: 'December',
    dates: [
      {
        id: 'c1b28388-4841-4980-8383-8308ae674e3c',
        date: '01',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '8e96ea3f-780a-411c-8f96-5d92241da972',
        date: '02',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'a864e2b0-72bc-4a5e-a53a-094b68ca281a',
        date: '03',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '19a891da-f761-4507-a38a-5d4d83860e54',
        date: '04',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'ae32bf69-cea9-4821-a012-937a9b92c4b0',
        date: '05',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '4dddd589-b32a-48c4-ba59-99eec8b7edb7',
        date: '06',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e616725a-f2ff-4545-8182-b63f45f62a04',
        date: '07',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '46508856-13e0-4425-8f85-21410f24ddd7',
        date: '08',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '4fd964ef-f8b7-4cd1-9e2f-8789cabb6419',
        date: '09',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '5a4b5595-cc49-452a-b7dc-f7af86d3b98d',
        date: '10',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'f91e2a10-9d36-451b-a0b5-fa8faa29272b',
        date: '11',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '69111b61-2e3c-4e26-916d-0fa95b69759d',
        date: '12',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '7272344e-7f3d-4334-934f-6a1620fb7eaf',
        date: '13',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '6d6b46d0-2fbb-424a-9aa2-80fe392d25a0',
        date: '14',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'd9f9dede-6afc-42d7-9bf6-e88d445d28d0',
        date: '15',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'ba8b35f6-98a1-42cf-84be-f37f7c9f564d',
        date: '16',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'f2087495-d4c0-45c1-8391-b48256e15bb5',
        date: '17',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '79b2df74-28e4-40aa-b1c6-10feca4c7e74',
        date: '18',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '117207a6-1d8a-4c6c-942c-70ddd4cb3307',
        date: '19',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '18119ffd-0df5-4575-93e3-4a39e8c42ecf',
        date: '20',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e7bc5fa4-7a97-428a-aafb-218ae6d9fa0c',
        date: '21',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'd4006b67-b5b4-4693-870d-66f66db28c8f',
        date: '22',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'e79f54e3-0140-4afa-92fb-d00b6ecd1730',
        date: '23',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '5284db8e-9a6e-4f73-81e3-bf7fcb5a72a9',
        date: '24',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'bdea36f5-5c3a-41f3-aa23-d64abbe37012',
        date: '25',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '6b7a953a-3b5b-4b76-8b8a-e7ac5015a3aa',
        date: '26',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '7056dc83-343d-4e20-ba28-82569810c1cf',
        date: '27',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: 'eaf00961-1f65-4960-b293-88c1f9cec08c',
        date: '28',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '5e68d47b-6a92-4efa-98eb-e511381af47d',
        date: '29',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '2ec5c8ae-4534-4c8d-a9c5-9722579be776',
        date: '30',
        emojiUrl: '',
        emojiName: '',
      },
      {
        id: '0f709ed6-7dc1-49d1-88b2-846652452164',
        date: '31',
        emojiUrl: '',
        emojiName: '',
      },
    ],
  },
]

const emojisList = [
  {
    id: '380e6284-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
  },
  {
    id: '380e64f0-a454-11ec-b909-0242ac120002',
    emojiName: 'Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-happy.png',
  },
  {
    id: '380e6626-a454-11ec-b909-0242ac120002',
    emojiName: 'Neutral',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-neutral.png',
  },
  {
    id: '380e6748-a454-11ec-b909-0242ac120002',
    emojiName: 'Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-sad.png',
  },
  {
    id: '380e69c8-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-sad.png',
  },
]

// #endregion

class App extends Component {
  state = {
    activeEmojiID: emojisList[0].id,
    monthsList: initialMonthsList,
    emojiList: emojisList,
    days: daysList,
    activeMonth: initialMonthsList[0].monthName,
    monthlyReportData: [],
    userSelectDay: daysList[0].dayNumber,
    userSelectEmoji: emojisList[0].id,
    activeDate: 1,
    count: 0,
  }

  componentDidMount() {
    this.getMonthlyreportData()
  }

  getReportItem = eachItem => {
    const {activeMonth, monthsList} = this.state
    const {emojiName} = eachItem
    let count = 0

    monthsList.map(each => {
      if (each.monthName === activeMonth) {
        each.dates.map(every => {
          if (every.emojiName === emojiName) {
            count += 1
          }
          return every
        })
      }
      return each
    })

    return {
      name: emojiName,
      monthlyCount: count,
    }
  }

  getMonthlyreportData = () => {
    const report = emojisList.map(eachItem => this.getReportItem(eachItem))
    this.setState({monthlyReportData: report})
  }

  onUpdateEmoji = id => {
    this.setState({activeEmojiID: id})
  }

  onUpdateMonth = month => {
    this.setState(
      {activeMonth: month, activeDate: 1, count: 0},
      this.getMonthlyreportData,
    )
  }

  getFilterCount = date => {
    const {
      activeDate,
      userSelectDay,
      userSelectEmoji,
      activeEmojiID,
    } = this.state

    const isDayMatch = date % 7 === parseInt(userSelectDay)
    const isEmojiMatch = activeEmojiID === userSelectEmoji
    console.log(isDayMatch, isEmojiMatch, activeDate % 7)

    if (isDayMatch && isEmojiMatch) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  onUpdateUserSelectedDay = day => {
    this.setState({userSelectDay: day, count: 0})
  }

  onUpdateUserSelectedEmoji = id => {
    this.setState({userSelectEmoji: id, count: 0})
  }

  onUpdateMonthsList = (dateID, emojiID, month, date) => {
    const emojiObj = emojisList.find(each => each.id === emojiID)
    const updateEmojiName = emojiObj.emojiName
    const updateEmojiUrl = emojiObj.emojiUrl
    this.setState(
      prevState => ({
        monthsList: prevState.monthsList.map(eachItem => {
          if (eachItem.month === month) {
            return {
              ...eachItem,
              dates: eachItem.dates.map(each => {
                if (each.id === dateID && each.emojiUrl !== updateEmojiUrl) {
                  return {
                    ...each,
                    emojiUrl: updateEmojiUrl,
                    emojiName: updateEmojiName,
                  }
                }
                if (each.id === dateID && each.emojiUrl === updateEmojiUrl) {
                  return {
                    ...each,
                    emojiUrl: '',
                    emojiName: '',
                  }
                }
                return {...each}
              }),
            }
          }
          return {...eachItem}
        }),
      }),
      this.getMonthlyreportData,
    )
    this.getFilterCount(date)
  }

  render() {
    const {
      activeEmojiID,
      monthsList,
      emojiList,
      days,
      monthlyReportData,
      activeDate,
      userSelectDay,
      userSelectEmoji,
      count,
    } = this.state

    console.log(activeDate, userSelectDay, count)

    return (
      <ProjectContext.Provider
        value={{
          activeEmojiID,
          monthsList,
          emojiList,
          days,
          activeDate,
          count,
          userSelectDay,
          userSelectEmoji,
          monthlyReportData,
          onUpdateMonth: this.onUpdateMonth,
          onUpdateEmoji: this.onUpdateEmoji,
          onUpdateMonthsList: this.onUpdateMonthsList,
          getMonthlyreportData: this.getMonthlyreportData,
          onUpdateUserSelectedDay: this.onUpdateUserSelectedDay,
          onUpdateUserSelectedEmoji: this.onUpdateUserSelectedEmoji,
        }}
      >
        <div className="app-container">
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/reports" component={Reports} />
            <ProtectedRoute exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </ProjectContext.Provider>
    )
  }
}

export default App
