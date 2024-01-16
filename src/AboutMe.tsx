import React,{ useEffect,useState } from 'react';
import './css/testCss.css';
import phoneIcon from './img/phone.png';
import userIcon from './img/user.png'
import careerIcon from './img/career.png';
import birthIcon from './img/birth.png';
import emailIcon from './img/email.png';
import academicIcon from './img/academic.png';
import jsp from './img/jsp.png';
import html5 from './img/html5.png';
import css from './img/css.png';
import ecmas6_2 from './img/ecmas6_2.png';
import react from './img/react.png';
import graphql_apollo from './img/53402609-b97a2180-39ba-11e9-8100-812bab86357c.png';
import mssql from './img/mssql.png';
import oracle from './img/oracle.png';
import java from './img/Javalogo.png';
import spring from './img/spring.png';
import typescript from './img/typescript.png';
import mybatis from './img/mybatis.png';
import rtk from './img/redux-toolkit.webp';
import jquery from './img/jquery.png';
import redux from './img/redux.webp';
import git from'./img/images_jhy979_post_a42a7905-a716-40b7-9c47-c5e2035925d1GIT.png'
import svn from'./img/subversion_logo_icon_170548.png'


const AboutMe: React.FC = () => {

useEffect(()=>{
    console.log('AboutMe');
},[]);

const [isHovered, setIsHovered] = useState(false);

const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};

const styleFlex = {
  flex : 1
}

  const introductionData = [
    { label: '이름', value: '조성민', icon: userIcon},
    { label: '생년월일', value: '1991-11-13', icon: birthIcon },
    { label: '경력', value: '3년 11개월', icon: careerIcon },
    { label: '학력', value: '동국대학교 중퇴 학점은행제 학사 취득예정' , icon: academicIcon },
    { label: '이메일', value: 'chos1909@gmail.com', icon: emailIcon },
    { label: '전화번호', value: '010-4093-9680', icon: phoneIcon },
  ];

  const skills = [
    {label :'html5',       icon : html5,    skillcategory:'publishing'},
    {label :'css',        icon : css,       skillcategory:'publishing'},
    {label :'javascript', icon : ecmas6_2,  skillcategory:'publishing'},
    {label :'javascript', icon : ecmas6_2,  skillcategory:'frontend'},
    {label :'react',      icon : react,     skillcategory:'frontend'},
    {label :'jsp',        icon : jsp,       skillcategory:'frontend'},
    {label :'graphql_apollo',    icon : graphql_apollo,   skillcategory:'frontend' },
    {label :'typescript', icon : typescript,skillcategory:'frontend' },
    {label :'redux',        icon : redux,skillcategory:'frontend' },
    {label :'jquery',        icon : jquery,skillcategory:'frontend' },
    {label :'javascript', icon : jsp,       skillcategory:'backend' },
    {label :'java',       icon : java,       skillcategory:'backend' },
    {label :'mssql',      icon : mssql,       skillcategory:'backend' },
    {label :'spring',     icon : spring,       skillcategory:'backend' },
    {label :'oracle',     icon : oracle,       skillcategory:'backend' },
    {label :'mybatis',    icon : mybatis,       skillcategory:'backend' },

    {label :'git',    icon : git,       skillcategory:'srccontrol' },
    {label :'svn',    icon : svn,       skillcategory:'srccontrol' },
  ]

  const projects = [
    {title : '스마트뱅킹 채널 개발업무', 
      employ_period : '2023.12 - 2024.01',
      customerCompany : '우리은행' ,
      pjt_contents : '우리은행 채널계 CMS React 컨버전',
      skill_spec : [
         {name : 'frontend', content : 'react, jsp ,javascript'}
        ,{name : 'Backend' , content : 'java, spring' }
      ]
    },
    
    {title : 'FANC Wallet 리뉴얼 개발',
      employ_period : '2023.02 - 2023.06',
      customerCompany : 'FANC COIN',
      pjt_contents : 'FANC Wallet 리뉴얼 개발 프론트 엔드 담당',
      skill_spec : [
        {name : 'Frontend', content : 'react, javascript, Apollo'}
     ]
    },
    
    {title : 'SK 렌터카 시스템 리뉴얼 개발',
    employ_period : '2022.12 - 2023.01',
    customerCompany : 'SK 렌터카' ,
    pjt_contents : 'SK 렌터카 고객 CMS VUE 컨버젼',
    skill_spec : [
       {name : 'Frontend', content : 'react, jsp ,javascript'}
      ,{name : 'Backend' , content : 'java, spring' }
    ]
  },
  
    {title : '신한카드 TM시스템 고도화 개발',
    employ_period :'2022.03 - 2022.11',
    customerCompany :'신한카드',
    pjt_contents : '보고서 메뉴 (admin, 통계) 담당 쿼리튜닝',
    skill_spec : [
       {name : 'Frontend' , content : 'jsp, javascript, corebase'}
      ,{name : 'Backend'  , content : 'Java, SpringFramework, MSSQL,mybatis' }
    ]},
    {title : 'NH 스마트뱅킹 공인인증서 개발',
    employ_period :'2021.09 - 2022.02',
    customerCompany :'농협',
    pjt_contents : 'NH 스마트뱅킹 제휴사(3자) 사설인증 로그인 개발',
    skill_spec : [
       {name  : 'Frontend' , content : 'jsp ,javascript'}
      ,{name : 'Backend'  , content : 'java, spring' }
    ]},
    {title : '라인 광고플랫폼 개발',
    employ_period :'2021.01 - 2021.09',
    customerCompany :'라인',
    pjt_contents : 'admin 개발 (포인트 펀드관리, 주문 목록, 보상정책..)',
    skill_spec : [
       {name  :'Frontend', content : 'react(redux), javascript'}
      ,{name :'Backend'  , content : 'java, springboot, oracle' }
    ]},
  
    {title : '롯데마트 M쿠폰 결제모듈 API개발',
    employ_period :'2020.07 - 2021.01',
    customerCompany :'롯데마트',
    pjt_contents : '롯데 M쿠폰 장바구니 파트 API 개발',
    skill_spec : [
      {name : 'Backend' , content : 'java, spring, oracle,mybatis, postman' }
    ]},
    {title : '효성그룹 ERP 개발',
    employ_period :'2020.04 - 2020.06',
    customerCompany :'효성',
    pjt_contents : '교육 파트 개발(교육 결과보고서, 수강 목록, 수강생 점수 조회)',
    skill_spec : [
       {name : 'Frontend', content : 'react, jsp ,javascript,realgrid'}
      ,{name : 'Backend' , content : 'java, spring' }
    ]},
  
    {title : '영화진흥위원회 KOFIC,KOBIS 유지보수 프로젝트',
    employ_period :'2019.11 - 2020.03',
    customerCompany :'영화진흥위원회',
    pjt_contents : 
    'KOFIC(영진위) 신규 개발 및 유지보수 \n KOBIS(통합전산망) 테마 통계 개발 및 유지보수 \n 중계서버 관리\n고객 요구 통계 데이터 출력',
    skill_spec : [
      {name : 'Frontend', content : 'react, jsp ,javascript'}
      ,{name : 'Backend' , content : 'java, spring' }
    ]}
  ]

  


  return (
    <>
    <article className='highest-container'>
      <div className='highest-container-layout'>
        <h1>Web Developer 조성민의 포트폴리오 입니다.</h1>
      </div>
        <div className='pageTitle'><h1>자기소개 페이지</h1></div>
        <div className="introduction-container">
          {introductionData?.map((item, index) => (
            <div key={index} className="introduction-item" > 
              <img src={item.icon} alt={item.label} className="icon"/>
              <div className="label">{item.label}</div>
              <div className="value" >{item.value}</div>
            </div>
          ))}
        </div>
    </article>

    <article className='skills'>
        <div className='skill_publish'>
        <h2>publishing</h2>
          {
            skills?.map((e=>(
                e.skillcategory ==='publishing' ? 
                  <img src={e.icon} className='img_skill'></img>
                  :
                  <></>
            )))
          }
        </div>
        <div className='skill_frontend'>
          <h2>frontend</h2>
          {
            skills?.map((e=>(
                 e.skillcategory ==='frontend' ? 
                 <img src={e.icon} className='img_skill'></img> :<></>
            )))
          }
        </div>
        <div className='skill_backend'>
          <h2>backend</h2>
          {
            skills?.map((e=>(
                 e.skillcategory ==='backend' ? 
                 <img src={e.icon} className='img_skill'></img> :<></>
            )))
          }
        </div>
        <div className='source_control'>
          <h2>source controll</h2>
          {
            skills?.map((e=>(
                 e.skillcategory ==='srccontrol' ? 
                 <img src={e.icon} className='img_skill'></img> :<></>
            )))
          }
        </div>
    </article>
    <article>
      <div className='career'>
      <h1>Project</h1>
    {
      projects.map((e)=>
          <div className='content'>
            <div className='content_title'>
              <h3>{e.title}</h3>  
                {e.customerCompany} <br/>
              <div className='period'>
                {e.employ_period}
              </div>   <br/>
                {e.pjt_contents.split('\n').map((e,idx)=><>{e}<br/></>)}
            </div>
            <div className='spec'>
              {e.skill_spec?.map((s)=>
              s.name ==='Frontend' ? 
                <div className='skill_block'>
                  <div className='left'>
                     {s.name}
                  </div>  
                  <div className='right'> {s.content}</div>
                </div>
                :
                <div className='skill_block'>
                  <div className='left'> {s.name}</div>  
                  <div className='right'> {s.content}</div>
                </div>
              )}
            </div>
          </div>
      )
    }
    </div>
    </article>
    </>
  );
};

export default AboutMe;
