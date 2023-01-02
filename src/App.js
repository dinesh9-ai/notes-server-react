import { Router, Switch, Route } from "react-router-dom";
import './App.css';
import { BrowserRouter,Routes} from "react-router-dom";
import Page from "./Components/Subject/Page";
import Contributor from "./Components/Contributor/Contributor";
// import LeftNav from './Components/LeftNav/LeftNav';
const Nav = require('./Components/Navt/Nav').default;

const a='unit-1',b='unit-2',c='unit-3',d='unit-4',e='unit-5';

const sidebarData=[
  {Name:"Home",
  cName: "nav-text",
  number:0,
  path:"/"
  },

  {Name:"H&S",
  cName: "nav-text",
  number:2,
  path:"/h-s",
  func:'showH',
  state:"hs",
  sems:["Full Year"],
  count:[2],
  units:[['Applied Physics','Mathematics-2' ]],
  dict:{'unit':{'Applied Physics':[a,b,c,d,d,d,e,e,e],
       'Mathematics-2':[a,a,b,c,d,d,e]},
      'link':{'Mathematics-2':['https://drive.google.com/file/d/13MHR78brpvf9R3ME1Kyb5DxssAdL7Hrz/view?usp=sharing',"https://drive.google.com/file/d/11IQ8TGAq53gZTyRZEOlGYJ7Y_P6Kc2Vt/view?usp=sharing","https://drive.google.com/file/d/1N18oUNy6uGNufelCOwTSfgJ5nw5ptKfR/view?usp=sharing","https://drive.google.com/file/d/1N18oUNy6uGNufelCOwTSfgJ5nw5ptKfR/view?usp=sharing","https://drive.google.com/file/d/1N18oUNy6uGNufelCOwTSfgJ5nw5ptKfR/view?usp=sharing","https://drive.google.com/file/d/1eDf3QHi_WknjIw4o0QAf4TY6pHMTFzTI/view?usp=sharing","https://drive.google.com/file/d/1N18oUNy6uGNufelCOwTSfgJ5nw5ptKfR/view?usp=sharing"],
      'Applied Physics':["https://drive.google.com/file/d/1aaB7vOEw_Wn9puVUfyH53xWdBgHObCc4/view?usp=sharing","https://drive.google.com/file/d/1aaB7vOEw_Wn9puVUfyH53xWdBgHObCc4/view?usp=sharing","https://drive.google.com/file/d/1aaB7vOEw_Wn9puVUfyH53xWdBgHObCc4/view?usp=sharing","https://drive.google.com/file/d/1aaB7vOEw_Wn9puVUfyH53xWdBgHObCc4/view?usp=sharing","https://drive.google.com/file/d/1y7l-o2O2ZlteW9TZQxbUNC0CjlKAN6c8/view?usp=sharing","https://drive.google.com/file/d/1QN3kJ8S6_oL9svTMcY1Dz3BZfNhtFonY/view?usp=sharing","https://drive.google.com/file/d/1aaB7vOEw_Wn9puVUfyH53xWdBgHObCc4/view?usp=sharingf","https://drive.google.com/file/d/1QN3kJ8S6_oL9svTMcY1Dz3BZfNhtFonY/view?usp=sharing","https://drive.google.com/file/d/1NxESUPPWa-1RfN6GWFU7oOizhtjz87gK/view?usp=sharing"]}
    }},

  {Name:"CSE",
  cName: "nav-text",
  number:6,
  path:"/cse",
  func:'showC',
  state:"cs",
  sems:["2-1","2-2","3-1","3-2","4-1","4-2"],
  count:[0,5,5,0,0,0],
  units:[[],['Computer Networks','Formal Language and Automata Theory','Numerical and Statistical Methods','Operating Systems','Softwar Design and Engineering'],
          ['Artifical intelligence','Compiler Design','Design and Analysis of Algorithms','Data Mining and Analytics','Web Technologies'],
          [],[],[]],
  dict:{'unit':{'Computer Networks':[a,c,d,e],
  'Formal Language and Automata Theory':[a,a,c],
  'Numerical and Statistical Methods':[a,b,c],
  'Operating Systems':[a,b,b,b,d,e],
  'Softwar Design and Engineering':[a,b,c,d],
  'Artifical intelligence':[a,a,b,c,d,e],
  'Compiler Design':[b,d,e],
  'Design and Analysis of Algorithms':[a],
  'Data Mining and Analytics':[a,a,a,b,b,c,c,e],
  'Web Technologies':[a,a,b,b,c,c,d,e,e]},
  'link':{'Computer Networks':["https://docs.google.com/document/d/1NPgr5qu_Gx54dyKnTT7bL8di9OnsYEQm/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://drive.google.com/file/d/1E1on9CO5Ljcs2wJOYvzHaaqx65XkFu2m/view?usp=sharing","https://drive.google.com/file/d/1oOrbJIOX8ocd3-6jbLYCR_gdMkPHD2JP/view?usp=sharing","https://drive.google.com/file/d/1oOrbJIOX8ocd3-6jbLYCR_gdMkPHD2JP/view?usp=sharing"],
  'Formal Language and Automata Theory':["https://drive.google.com/file/d/1-cMt7R6sB1KDrXETaylhiUqmn6xPWP6Y/view?usp=sharing","https://drive.google.com/file/d/1YLWf95JN6SzgLHlmiJ3b8ppFboaHD3GO/view?usp=sharing","https://drive.google.com/file/d/1ekqUXToRqKveAILcKTr43T6z9lVftxxP/view?usp=sharing"],
  'Numerical and Statistical Methods':["https://drive.google.com/file/d/1cyw7c0gcvcd9ZgMXIa4312diu-cEgo1e/view?usp=sharing","https://drive.google.com/file/d/1cyw7c0gcvcd9ZgMXIa4312diu-cEgo1e/view?usp=sharing","https://drive.google.com/file/d/1OGImrOG9PfDORjxFeMKgY2QiuYUIJLam/view?usp=sharing"],
  'Operating Systems':["https://docs.google.com/presentation/d/1WAmki46Voeu8U5gt_8fqi5CxCdSFG51e/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/1HJABtztOCbrvS56FD-3cY4b7Og-ToNhi/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/18ueoPGpzpgvWUWvo7M0oDwgwLgYPR2Vx/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://drive.google.com/file/d/1WayBkvw7LT4CLXLNaCLUjITe5rVSUmbj/view?usp=sharing","https://docs.google.com/document/d/1hUrVxC6u9RjGGTEXY577se0eaG-WlUaj/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/document/d/15l7TkdIR1BWW9Do_-PE5r8HvdcW-XQ1T/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true"],
  'Softwar Design and Engineering':["https://docs.google.com/document/d/1FSNO1ORRY_uG4pzKz5OZtOFZGQ05x2D2/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/document/d/1r01me5Odvv8HNMaS9q5vzuxBFra1i-Jr/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/document/d/16yUeakrsyjAZbexwhC1QRgngh3EpNbLa/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/document/d/1QgrCFPDhZ0PLehKjozVHg-ZmWVlQx550/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/document/d/1p_kc3aA4ymvlHIIaXrDtfLACStOK04o4/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true"],
  'Artifical intelligence':["https://docs.google.com/presentation/d/1Pqx0B9nGaIguQYWS2LtPir3RoFXLaLPi/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://drive.google.com/file/d/1c8qWSa8-upKZpIDoj9lythmWIJz3Ti7f/view?usp=sharing","https://docs.google.com/presentation/d/1zRi5hQPs_klj0ODYHfdov0xzLewHDPMy/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/11AYC7RR6v-oxzPJXMOL6YvS8sJXn0oft/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/1dT0zVqO3OsEVVnUU8q2MNLcZYIpwlMiK/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/1-p4rup_sLBAp1TAkXazOd6jlOrSDL8Ad/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true"],
  'Compiler Design':["https://drive.google.com/file/d/16Gr0u_hFvWPeWzX_0XFJ6CSbD7RPAqxf/view?usp=sharing","https://drive.google.com/file/d/1aU3Tlby1hr6fURSGADZwT-JOc1KxSe5N/view?usp=sharing","https://drive.google.com/file/d/1kLsgzgRmssLCmfDi3Xc8Jh_8YbsvOJfe/view?usp=sharing"],
  'Design and Analysis of Algorithms':["https://drive.google.com/file/d/1Qi3zB412MFCkNbIxN1RjgbKaSPgUEo-N/view?usp=sharing"],
  'Data Mining and Analytics':["https://drive.google.com/file/d/1_he4IdQXEek1PmDp7I5jCQrAK7xv8FnM/view?usp=sharing","https://drive.google.com/file/d/1sCQ0uSNljortMBtPIs-0raeZnWnFuXw0/view?usp=sharing","https://drive.google.com/file/d/1kZwxx0eizI6qe8epgoJ7rOjSqix-CeLD/view?usp=sharing","https://drive.google.com/file/d/1kZwxx0eizI6qe8epgoJ7rOjSqix-CeLD/view?usp=sharing","https://drive.google.com/file/d/1bvdCNYVDKROLTaYlxdJEElSM2PamLA3o/view?usp=sharing","https://drive.google.com/file/d/1kZwxx0eizI6qe8epgoJ7rOjSqix-CeLD/view?usp=sharing","https://drive.google.com/file/d/1A3q8VkduxVHf_8OLjNkqnx5ZBeOIAh6h/view?usp=sharing","https://drive.google.com/file/d/1Qks5pDK6hiqROVXSeh0rmurJ-zbgb1o9/view?usp=sharing"],
  'Web Technologies':["https://docs.google.com/document/d/1y4PJI2h6fpKre_rPhq1_KUalLUfjORY8/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/15PboHJ-oyVT3W7WLq6r41-Vgt3KvGU_F/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/1SzZ95kj83YqCajpjX1V6axbsfgbylXGr/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/1GCH0fIiSdcNxJjCweR47UGf-TdKfzJdN/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/1JorDz3SIlbOigCCnFIyb4XDDYA94qCz6/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/1Soy0pJxlhdX57hk2yoctlhwoJVQv_Qzd/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/1o-y-Xn0WbED00ToEmRXCYmLO5qZ6L5MF/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/19mw_ySDSWA8UxQvH4MNGMBdu0W1q6Nzm/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/17UfbLuf49ysZqzewnEAjgPilL7Kn2QqX/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true"],
  }
  }},

  {Name:"ECE",
  cName: "nav-text",
  number:6,
  path:"/ece",
  func:'showE',
  state:"es",
  sems:["2-1","2-2","3-1","3-2","4-1","4-2"],
  count:[5,5,5,5,0,0],
  units:[['NMCA','Network and Measurements','PTSP','Analog Electronics','Signals and systems'],
          ['Pulse and Digital Circuits','LDICA','EMTL','DDCO','Control Systems'],
          ['Analog and Digital Circuits','AWP','Digital Signal Processing','MPMC','Internet Of Things'],
          ['Microwave Engineering','VLSI','AI','Digital Image Processing','Java'],
          [],[]],
  dict:{unit:{'NMCA':[a,b,c,d,e],
  'Network and Measurements':[a,b,c,d,d,e],
  'PTSP':[a,a,b,d],
  'Analog Electronics':[a,b,c,d,e],
  'Signals and systems':[a,b,c,c,d,e],
  'Pulse and Digital Circuits':[a,b,c,d,e],
  'LDICA':[a,a,b,b,c,c,d,d,d,e],
  'EMTL':[a,b,c,d,e],
  'DDCO':[a,a,b,c,d,e],
  'Control Systems':[a,b,c,e,e],
  'Analog and Digital Circuits':[a,b,c,d,e],
  'AWP':[a,b,c,c,d,e],
  'Digital Signal Processing':[a,b,c,d,e],
  'MPMC':[a,b,c,c,d,e],
  'Internet Of Things':[a,b],
  'Microwave Engineering':[a,b],
  'VLSI':[a,a,b,c],
  'AI':[a,b,c,d,e],
  'Digital Image Processing':['None'],
  'Java':['None']
  },
  'link':{'NMCA':["https://drive.google.com/file/d/1Af9DvZO_j2ZtjZJyUkyCQJfZDQK4LJcv/view?usp=sharing","https://drive.google.com/file/d/1bXMZfAKmmJ5jr9qn58ECxA7YnxeZcpbf/view?usp=sharing","https://drive.google.com/file/d/1kEoSdE3XUfV8dtMigU6Hm-pT2YLqki5X/view?usp=sharing","https://drive.google.com/file/d/1fsK5WxvPyrH6QseVkO2APOFp50eKdc7y/view?usp=sharing","https://drive.google.com/file/d/1Tqtcl302OwlJVluUs3q-9AHQ5epbesws/view?usp=sharing"],
  'Network and Measurements':["https://drive.google.com/file/d/1buOXd9kdP2uyol3a1lTg-ObDIL-HMT38/view?usp=sharing","https://drive.google.com/file/d/147oM9OgmU8Krv9YK0Uw3T8fdDiZ6xI68/view?usp=sharing","https://drive.google.com/file/d/1pq6ToDIim56fdebIKK0swSbbxCLwkkac/view?usp=sharing","https://drive.google.com/file/d/196hElqnFmK2cC0jlyhugW30AkCy6zfjL/view?usp=sharing","https://drive.google.com/file/d/1L3uGlK5lWsnuCiupB6x-M_aCiIfSzAbd/view?usp=sharing","https://docs.google.com/document/d/1cmcEj99UWgA0_xDWoccqU7jviZhH-1Cr/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true"],
  'PTSP':["https://docs.google.com/presentation/d/159xIiY1c9p35PZbtigtMTIGBMjqRJaCK/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/1in4oA3Pl5rRnya53qmf5EO_OUcJzQTbc/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://drive.google.com/file/d/1nVkhOc5XebCFlBxl85F_2PbQWMcnNvUz/view?usp=sharing","https://docs.google.com/presentation/d/1Gyr1zmAX7XYPYpPNXeYjJa2S69xtpjJd/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true"],
  'Analog Electronics':["https://drive.google.com/file/d/1T3GGfgsro-mZLiGNLyNPTCMJU87Dz5Vh/view?usp=sharing","https://drive.google.com/file/d/1829SN78VBNVnBHgTXetkIgcggFgCTYBD/view?usp=sharing","https://drive.google.com/file/d/1bXAQJ-cwgMKRQz-e5OuatEvvMLm_BkYR/view?usp=sharing","https://drive.google.com/file/d/1dexfonZ_DnkiIMt9pp5fMZymW5Mu6UnQ/view?usp=sharing","https://drive.google.com/file/d/1o8zBlRvMvcyCOjoZEU0TmLL8EduJwWhW/view?usp=sharing"],
  'Signals and systems':["https://docs.google.com/presentation/d/1qQRa2nQeQqUqQv7dGnQ7YTda2elIHLwe/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://drive.google.com/file/d/1NmbcCgsOa1IkaEujWIaGc_zzroU-QDeB/view?usp=sharing","https://drive.google.com/file/d/1O9Ytww-WdECCt7b05ufkZcaDKojQMVWt/view?usp=sharing","https://drive.google.com/file/d/1vC6h3A5WlW7y8QE6QmStkoZjSDEPAFri/view?usp=sharing","https://drive.google.com/file/d/1hRa5_awI5X9GQy1tUstCtFvY-YYzVAgV/view?usp=sharing","https://drive.google.com/file/d/10PvhbSbrpBwPA9h0ogL9tfpzZA-w8I9K/view?usp=sharing"],
  'Pulse and Digital Circuits':["https://drive.google.com/file/d/1x1y171aZgamTu8l_tz5shhj9vGmS6uEO/view?usp=sharing","https://drive.google.com/file/d/1zVF-P_v8lVD_D5WtTslMiWitXWSx-4kg/view?usp=sharing","https://drive.google.com/file/d/1eGmeMhdBA28RR1QcP6Jetx3D6EJtVPKB/view?usp=sharing","https://drive.google.com/file/d/1AqDb1DIuoPJGO4mL6_KhpsCjznbnYq2-/view?usp=sharing","https://drive.google.com/file/d/1ltkM1HSI_6uNuqv1VeuCDpUYDUPWdx7B/view?usp=sharing"],
  'LDICA':["https://drive.google.com/file/d/1b5BN-yfX9Y7tXCRCSbE2xJiAvKaerOLY/view?usp=sharing","https://drive.google.com/file/d/1SMpEClMthvlHGqI841KnH0L3r2lkLplO/view?usp=sharing","https://drive.google.com/file/d/1JNRwWo9TzaxbSovB5goq-rSM6rST-23f/view?usp=sharing","https://drive.google.com/file/d/1Yr6EjaLRp2FSDzczEui-9lbK_oNn5_Uz/view?usp=sharing","https://drive.google.com/file/d/1SscSzp2h35IBUpNa2rhgBeeLxD1cPf_U/view?usp=sharing","https://drive.google.com/file/d/1a6vOGzmYqkIz-bfLt5rTnxEfUAqNj8ux/view?usp=sharing","https://drive.google.com/file/d/1FPcD_wWWOEWE9vBe9GLCe5eORZiX3dex/view?usp=sharing","https://drive.google.com/file/d/1zvB22h_5uCkKx8uf-tbuHXs9RI4bARD9/view?usp=sharing","https://docs.google.com/presentation/d/1d2bjPbBcGsZzQS8zhT--LmtcwUBVAE_0/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/1DF_GCO1Dvcfnfde4y40lzmxoDxTo1Oq-/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true"],
  'EMTL':["https://drive.google.com/file/d/1Ub_faVKnxK27Bu5xolDoMequLj1yj_v3/view?usp=sharing","https://drive.google.com/file/d/1yNdCBZTZeKR4JL0LBuIBLNh8TRXd8vlD/view?usp=sharing","https://drive.google.com/file/d/10_NYGMJ8O5u5MsEGy3o-6_6dMewaBJn6/view?usp=sharing","https://drive.google.com/file/d/1ctmhZFkHT8Rt1D7-2wR6jq3FLNjj97gl/view?usp=sharing","https://drive.google.com/file/d/17FxB5NSdzqYXu0gC1vy51gEog65inr1U/view?usp=sharing"],
  'DDCO':["https://drive.google.com/file/d/1pHw8oHpa8i_SnCgPfyxx86I0NxtXO-a5/view?usp=sharing","https://drive.google.com/file/d/1Aqm9BR1WBUvyXin4l7XMaJO6UH3gQ3rb/view?usp=sharing","https://drive.google.com/file/d/1Z_vWSRS2YJRV5L2DyVAVMpuXQG-OWLGs/view?usp=sharing","https://drive.google.com/file/d/1sq30Td73Dg12aaoKunHNJIk1iO-avGVv/view?usp=sharing","https://drive.google.com/file/d/1i4dp-wgW3xdVceCHxXYo74RT3fKQ4JOt/view?usp=sharing","https://drive.google.com/file/d/1WU1w3zWIgBmBCEvL5znynO9XvyrIVR68/view?usp=sharing"],
  'Control Systems':["https://drive.google.com/file/d/15lFzHFgss0lbaMKkHsej9dQQw4d339O6/view?usp=sharing","https://drive.google.com/file/d/13b2CFFiujD7DYKklAzMmqtLhO0s0gxSh/view?usp=sharing","https://drive.google.com/file/d/1lYttjj_SSxWBaJOAT5ttECYiRBhF_PGJ/view?usp=sharing","https://drive.google.com/file/d/1ICha4Xlk8002XNA6pVo6L7nbxc6IKduC/view?usp=sharing","https://drive.google.com/file/d/1XmZRgQUzbZ9JemaALjkBM5yk33nM-3tz/view?usp=sharing"],
  'Analog and Digital Circuits':["https://drive.google.com/file/d/1naXqBDL2XAmvvep6yaznCsG6ZABRb1dH/view?usp=sharing","https://drive.google.com/file/d/1yQS4ZYp0M-21XGUPRjybkxizFdH0KIBE/view?usp=sharing","https://drive.google.com/file/d/1AiM_IIZOvYFN6hp5dKehp4qeJZ77cR_9/view?usp=sharing","https://drive.google.com/file/d/1u4noQl4O7x_AZdaxFsBp-M2i4sQLXN3p/view?usp=sharing","https://drive.google.com/file/d/1abDWNDjZpxBTOkuN11aTNX4Mahj2wTTp/view?usp=sharing"],
  'AWP':["https://drive.google.com/file/d/18zfBVCa_H-en3Yf7tbYBW0t0wFyVvnM1/view?usp=sharing","https://drive.google.com/file/d/18zfBVCa_H-en3Yf7tbYBW0t0wFyVvnM1/view?usp=sharing","https://drive.google.com/file/d/1oj-BM74B0iiy-4VxYWxmYyaIYoATf1-7/view?usp=sharing","https://drive.google.com/file/d/1crahhokLmkN5RWCWXNuPzEXN-eY4hLx7/view?usp=sharing","https://drive.google.com/file/d/1crahhokLmkN5RWCWXNuPzEXN-eY4hLx7/view?usp=sharing","https://drive.google.com/file/d/1156MgFgwPOey2BB7vIvTMosPYASj2n9f/view?usp=sharing"],
  'Digital Signal Processing':["https://drive.google.com/file/d/1awxG1KSpQcIdFBc3JEqT44QFaLHCrlun/view?usp=sharing","https://drive.google.com/file/d/1QczV_q6X8vAoSxd5GTCEMo-YNEhnj8zJ/view?usp=sharing","https://drive.google.com/file/d/1glMSPRTJtlDcAaqstHJrm2B6JO-raKwn/view?usp=sharing","https://drive.google.com/file/d/13hpjIdGJdwRrSaqvpCROPRA32YsjDcue/view?usp=sharing","https://drive.google.com/file/d/1YvG8KPehZHgNM0vvxjSdHb1qIMtv6wVA/view?usp=sharing"],
  'MPMC':["https://docs.google.com/presentation/d/1_dsguR5hHnT5g8kIOG-tBb0trJ8fHWoC/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/1D2lSkcbRy2_SHI7Wcgo3sEhffHQe9qSQ/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/1p8hPoCbTkAK_LDudFAH9pE66NXMdWOob/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://drive.google.com/file/d/1VxBi-4rznTxYVcOxdva1ycm8peGXq1mO/view?usp=sharing","https://docs.google.com/presentation/d/1g_fu3BNexqbHspqR5lZIrVHhqrnLLXdB/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/1V96LBBySlayrvb9w9gHCfGCFnfCWVzXy/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true"],
  'Internet Of Things':["https://drive.google.com/file/d/1YCmC0NwKMy0O0Ck0rohvT2yyMMQLEfDZ/view?usp=sharing","https://docs.google.com/document/d/15upCShCpp6wn0Kp7zXhQ-sPA2uWaMFiC/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true"],
  'Microwave Engineering':["https://docs.google.com/document/d/1YeiybvHnYg3K_zCK1rEbNRfQk04dEEuo/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/document/d/1SnmbiJ0WZKvYUlHBPxpoLbAcgXXw5Sfp/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true"],
  'VLSI':["https://drive.google.com/file/d/1Ak-VwKW3qhhQDQoW86mxPS7JyAx_sDYa/view?usp=sharing","https://drive.google.com/file/d/1Bd3LbEab9u7GogspvUeJ-oD_3N0bqREb/view?usp=sharing","https://drive.google.com/file/d/1Bd3LbEab9u7GogspvUeJ-oD_3N0bqREb/view?usp=sharing","https://drive.google.com/file/d/1Bd3LbEab9u7GogspvUeJ-oD_3N0bqREb/view?usp=sharing"],
  'AI':["https://docs.google.com/presentation/d/1Pqx0B9nGaIguQYWS2LtPir3RoFXLaLPi/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://drive.google.com/file/d/1c8qWSa8-upKZpIDoj9lythmWIJz3Ti7f/view?usp=sharing","https://docs.google.com/presentation/d/1zRi5hQPs_klj0ODYHfdov0xzLewHDPMy/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/11AYC7RR6v-oxzPJXMOL6YvS8sJXn0oft/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/1dT0zVqO3OsEVVnUU8q2MNLcZYIpwlMiK/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true","https://docs.google.com/presentation/d/1-p4rup_sLBAp1TAkXazOd6jlOrSDL8Ad/edit?usp=sharing&ouid=100729378787125194756&rtpof=true&sd=true"],
  'Digital Image Processing':[],
  'Java':[]}
}},

  {Name:"MECH",
  cName: "nav-text",
  number:6,
  path:"/mech",
  func:'showM',
  state:"ms",
  sems:["2-1","2-2","3-1","3-2","4-1","4-2"],
  count:[0,0,0,0,0,0],
  units:[[],[],[],[],[],[]],
  dict:{}},

  {Name:"CIVIL",
  cName: "nav-text",
  number:6,
  path:"/civil",
  func:'showCi',
  state:"cis",
  sems:["2-1","2-2","3-1","3-2","4-1","4-2"],
  count:[0,0,0,0,0,0],
  units:[[],[],[],[],[],[]],
  dict:{}},

  {Name:"Contributor",
  cName: "nav-text",
  number:0,
  path:"/"
  },
]


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" />
      <Route path="/h&s-FullYear" element={<Page array={sidebarData[1]['units'][0]} dict={sidebarData[1]['dict']['unit']} unit={sidebarData['units']} link={sidebarData[1]['dict']['link']} />} ></Route>

      <Route path="/cse-2-1" element={<Page array={sidebarData[2]['units'][0]} dict={sidebarData[2]['dict']['unit']} unit={sidebarData[2]['units']} link={sidebarData[2]['dict']['link']} />} ></Route>
      <Route path="/cse-2-2" element={<Page array={sidebarData[2]['units'][1]} dict={sidebarData[2]['dict']['unit']} unit={sidebarData[2]['units']} link={sidebarData[2]['dict']['link']} />} ></Route>
      <Route path="/cse-3-1" element={<Page array={sidebarData[2]['units'][2]} dict={sidebarData[2]['dict']['unit']} unit={sidebarData[2]['units']} link={sidebarData[2]['dict']['link']} />} ></Route>
      <Route path="/cse-3-2" element={<Page array={sidebarData[2]['units'][3]} dict={sidebarData[2]['dict']['unit']} unit={sidebarData[2]['units']} link={sidebarData[2]['dict']['link']} />} ></Route>
      <Route path="/cse-4-1" element={<Page array={sidebarData[2]['units'][4]} dict={sidebarData[2]['dict']['unit']} unit={sidebarData[2]['units']} link={sidebarData[2]['dict']['link']} />} ></Route>
      <Route path="/cse-4-2" element={<Page array={sidebarData[2]['units'][5]} dict={sidebarData[2]['dict']['unit']} unit={sidebarData[2]['units']} link={sidebarData[2]['dict']['link']} />} ></Route>


      <Route path="/ece-2-1" element={<Page array={sidebarData[3]['units'][0]} dict={sidebarData[3]['dict']['unit']} unit={sidebarData[3]['units']} link={sidebarData[3]['dict']['link']} />} ></Route>
      <Route path="/ece-2-2" element={<Page array={sidebarData[3]['units'][1]} dict={sidebarData[3]['dict']['unit']} unit={sidebarData[3]['units']} link={sidebarData[3]['dict']['link']} />} ></Route>
      <Route path="/ece-3-1" element={<Page array={sidebarData[3]['units'][2]} dict={sidebarData[3]['dict']['unit']} unit={sidebarData[3]['units']} link={sidebarData[3]['dict']['link']} />} ></Route>
      <Route path="/ece-3-2" element={<Page array={sidebarData[3]['units'][3]} dict={sidebarData[3]['dict']['unit']} unit={sidebarData[3]['units']} link={sidebarData[3]['dict']['link']} />} ></Route>
      <Route path="/ece-4-1" element={<Page array={sidebarData[3]['units'][4]} dict={sidebarData[3]['dict']['unit']} unit={sidebarData[3]['units']} link={sidebarData[3]['dict']['link']} />} ></Route>
      <Route path="/ece-4-2" element={<Page array={sidebarData[3]['units'][5]} dict={sidebarData[3]['dict']['unit']} unit={sidebarData[3]['units']} link={sidebarData[3]['dict']['link']} />} ></Route>
      
      <Route path="/mech-2-1" element={<Page array={sidebarData[4]['units'][0]} dict={sidebarData[4]['dict']['unit']} unit={sidebarData[4]['units']} link={sidebarData[4]['dict']['link']} />} ></Route>
      <Route path="/mech-2-2" element={<Page array={sidebarData[4]['units'][1]} dict={sidebarData[4]['dict']['unit']} unit={sidebarData[4]['units']} link={sidebarData[4]['dict']['link']} />} ></Route>
      <Route path="/mech-3-1" element={<Page array={sidebarData[4]['units'][2]} dict={sidebarData[4]['dict']['unit']} unit={sidebarData[4]['units']} link={sidebarData[4]['dict']['link']} />} ></Route>
      <Route path="/mech-3-2" element={<Page array={sidebarData[4]['units'][3]} dict={sidebarData[4]['dict']['unit']} unit={sidebarData[4]['units']} link={sidebarData[4]['dict']['link']} />} ></Route>
      <Route path="/mech-4-1" element={<Page array={sidebarData[4]['units'][4]} dict={sidebarData[4]['dict']['unit']} unit={sidebarData[4]['units']} link={sidebarData[4]['dict']['link']} />} ></Route>
      <Route path="/mech-4-2" element={<Page array={sidebarData[4]['units'][5]} dict={sidebarData[4]['dict']['unit']} unit={sidebarData[4]['units']} link={sidebarData[4]['dict']['link']} />} ></Route>

      <Route path="/civil-2-1" element={<Page array={sidebarData[4]['units'][0]} dict={sidebarData[4]['dict']['unit']} unit={sidebarData[5]['units']} link={sidebarData[5]['dict']['link']} />} ></Route>
      <Route path="/civil-2-2" element={<Page array={sidebarData[4]['units'][1]} dict={sidebarData[4]['dict']['unit']} unit={sidebarData[5]['units']} link={sidebarData[5]['dict']['link']} />} ></Route>
      <Route path="/civil-3-1" element={<Page array={sidebarData[4]['units'][2]} dict={sidebarData[4]['dict']['unit']} unit={sidebarData[5]['units']} link={sidebarData[5]['dict']['link']} />} ></Route>
      <Route path="/civil-3-2" element={<Page array={sidebarData[4]['units'][3]} dict={sidebarData[4]['dict']['unit']} unit={sidebarData[5]['units']} link={sidebarData[5]['dict']['link']} />} ></Route>
      <Route path="/civil-4-1" element={<Page array={sidebarData[4]['units'][4]} dict={sidebarData[4]['dict']['unit']} unit={sidebarData[5]['units']} link={sidebarData[5]['dict']['link']} />} ></Route>
      <Route path="/civil-4-2" element={<Page array={sidebarData[4]['units'][5]} dict={sidebarData[4]['dict']['unit']} unit={sidebarData[5]['units']} link={sidebarData[5]['dict']['link']} />} ></Route>


      <Route path='/contributor' element={<Contributor  item={1}/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
