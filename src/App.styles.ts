import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-color: #081a22;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2000' height='2000' viewBox='0 0 800 800'%3E%3Cg fill='none' %3E%3Cg stroke='%23123166' stroke-width='17'%3E%3Cline x1='-8' y1='-8' x2='808' y2='808'/%3E%3Cline x1='-8' y1='792' x2='808' y2='1608'/%3E%3Cline x1='-8' y1='-808' x2='808' y2='8'/%3E%3C/g%3E%3Cg stroke='%23123063' stroke-width='16'%3E%3Cline x1='-8' y1='767' x2='808' y2='1583'/%3E%3Cline x1='-8' y1='17' x2='808' y2='833'/%3E%3Cline x1='-8' y1='-33' x2='808' y2='783'/%3E%3Cline x1='-8' y1='-783' x2='808' y2='33'/%3E%3C/g%3E%3Cg stroke='%23133060' stroke-width='15'%3E%3Cline x1='-8' y1='742' x2='808' y2='1558'/%3E%3Cline x1='-8' y1='42' x2='808' y2='858'/%3E%3Cline x1='-8' y1='-58' x2='808' y2='758'/%3E%3Cline x1='-8' y1='-758' x2='808' y2='58'/%3E%3C/g%3E%3Cg stroke='%23132f5c' stroke-width='14'%3E%3Cline x1='-8' y1='67' x2='808' y2='883'/%3E%3Cline x1='-8' y1='717' x2='808' y2='1533'/%3E%3Cline x1='-8' y1='-733' x2='808' y2='83'/%3E%3Cline x1='-8' y1='-83' x2='808' y2='733'/%3E%3C/g%3E%3Cg stroke='%23142e59' stroke-width='13'%3E%3Cline x1='-8' y1='92' x2='808' y2='908'/%3E%3Cline x1='-8' y1='692' x2='808' y2='1508'/%3E%3Cline x1='-8' y1='-108' x2='808' y2='708'/%3E%3Cline x1='-8' y1='-708' x2='808' y2='108'/%3E%3C/g%3E%3Cg stroke='%23142e56' stroke-width='12'%3E%3Cline x1='-8' y1='667' x2='808' y2='1483'/%3E%3Cline x1='-8' y1='117' x2='808' y2='933'/%3E%3Cline x1='-8' y1='-133' x2='808' y2='683'/%3E%3Cline x1='-8' y1='-683' x2='808' y2='133'/%3E%3C/g%3E%3Cg stroke='%23142d53' stroke-width='11'%3E%3Cline x1='-8' y1='642' x2='808' y2='1458'/%3E%3Cline x1='-8' y1='142' x2='808' y2='958'/%3E%3Cline x1='-8' y1='-158' x2='808' y2='658'/%3E%3Cline x1='-8' y1='-658' x2='808' y2='158'/%3E%3C/g%3E%3Cg stroke='%23152c50' stroke-width='10'%3E%3Cline x1='-8' y1='167' x2='808' y2='983'/%3E%3Cline x1='-8' y1='617' x2='808' y2='1433'/%3E%3Cline x1='-8' y1='-633' x2='808' y2='183'/%3E%3Cline x1='-8' y1='-183' x2='808' y2='633'/%3E%3C/g%3E%3Cg stroke='%23152c4d' stroke-width='9'%3E%3Cline x1='-8' y1='592' x2='808' y2='1408'/%3E%3Cline x1='-8' y1='192' x2='808' y2='1008'/%3E%3Cline x1='-8' y1='-608' x2='808' y2='208'/%3E%3Cline x1='-8' y1='-208' x2='808' y2='608'/%3E%3C/g%3E%3Cg stroke='%23152b49' stroke-width='8'%3E%3Cline x1='-8' y1='567' x2='808' y2='1383'/%3E%3Cline x1='-8' y1='217' x2='808' y2='1033'/%3E%3Cline x1='-8' y1='-233' x2='808' y2='583'/%3E%3Cline x1='-8' y1='-583' x2='808' y2='233'/%3E%3C/g%3E%3Cg stroke='%23162a46' stroke-width='7'%3E%3Cline x1='-8' y1='242' x2='808' y2='1058'/%3E%3Cline x1='-8' y1='542' x2='808' y2='1358'/%3E%3Cline x1='-8' y1='-558' x2='808' y2='258'/%3E%3Cline x1='-8' y1='-258' x2='808' y2='558'/%3E%3C/g%3E%3Cg stroke='%23162943' stroke-width='6'%3E%3Cline x1='-8' y1='267' x2='808' y2='1083'/%3E%3Cline x1='-8' y1='517' x2='808' y2='1333'/%3E%3Cline x1='-8' y1='-533' x2='808' y2='283'/%3E%3Cline x1='-8' y1='-283' x2='808' y2='533'/%3E%3C/g%3E%3Cg stroke='%23172940' stroke-width='5'%3E%3Cline x1='-8' y1='292' x2='808' y2='1108'/%3E%3Cline x1='-8' y1='492' x2='808' y2='1308'/%3E%3Cline x1='-8' y1='-308' x2='808' y2='508'/%3E%3Cline x1='-8' y1='-508' x2='808' y2='308'/%3E%3C/g%3E%3Cg stroke='%2317283d' stroke-width='4'%3E%3Cline x1='-8' y1='467' x2='808' y2='1283'/%3E%3Cline x1='-8' y1='317' x2='808' y2='1133'/%3E%3Cline x1='-8' y1='-333' x2='808' y2='483'/%3E%3Cline x1='-8' y1='-483' x2='808' y2='333'/%3E%3C/g%3E%3Cg stroke='%23172739' stroke-width='3'%3E%3Cline x1='-8' y1='342' x2='808' y2='1158'/%3E%3Cline x1='-8' y1='442' x2='808' y2='1258'/%3E%3Cline x1='-8' y1='-458' x2='808' y2='358'/%3E%3Cline x1='-8' y1='-358' x2='808' y2='458'/%3E%3C/g%3E%3Cg stroke='%23182736' stroke-width='2'%3E%3Cline x1='-8' y1='367' x2='808' y2='1183'/%3E%3Cline x1='-8' y1='417' x2='808' y2='1233'/%3E%3Cline x1='-8' y1='-433' x2='808' y2='383'/%3E%3Cline x1='-8' y1='-383' x2='808' y2='433'/%3E%3C/g%3E%3Cg stroke='%23182633' stroke-width='1'%3E%3Cline x1='-8' y1='392' x2='808' y2='1208'/%3E%3Cline x1='-8' y1='-408' x2='808' y2='408'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: sans-serif;
    }
    
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> p {
		color: #fff;
	}

	.score {
		color: #fff;
		font-size: 2rem;
		margin: 0;
	}

	h1 {
		font-family: Fascinate Inline;
		background-image: linear-gradient(180deg, #fff, #87f1ff);
		font-weight: 400;
		background-size: 100%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
		filter: drop-shadow(2px 2px #0085a3);
		font-size: 70px;
		text-align: center;
		margin: 20px;
	}
	.start,
	.next {
		cursor: pointer;
		background: linear-gradient(180deg, #ffffff, #ffcc91);
		border: 2px solid #d38558;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		height: 40px;
		margin: 20px 0;
		padding: 0 40px;
	}
	.start {
		max-width: 200px;
	}
`;
