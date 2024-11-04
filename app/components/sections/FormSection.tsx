"use client";

import { requestConsultation } from "@/app/actions/request-consultation";
import styles from "@/app/page.module.css";
import { useState, useRef } from "react";

const FormSection = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [selectedGender, setSelectedGender] = useState<string>();
  const refMale = useRef<HTMLButtonElement>(null);
  const refFemale = useRef<HTMLButtonElement>(null);
  const [isConsentModalOpen, setIsConsentModalOpen] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1((prev) => !prev);
  };

  const onClickBtn = (gender: string) => {
    setSelectedGender(gender);
  };
  return (
    <section className={styles.formSection}>
      <div className={styles.section1Text}>
        고객님 가장 편하신 시간에
        <br />
        보험 전문가가 직접 찾아 뵙겠습니다.
      </div>
      <div className={styles.formBox}>
        <form
          action={async (formData: FormData) => {
            if (selectedGender === undefined) {
              alert("성별을 선택해주세요.");
              return;
            } else if (!isChecked1) {
              alert("약관에 동의해주세요.");
              return;
            }
            const result = await requestConsultation(formData);
            if (result.ok) {
              alert(result.message);
              window.location.reload();
            } else {
              alert(result.message);
            }
          }}
          className={styles.form}
        >
          <h4>기본 정보 입력</h4>

          <div className={styles.formContents}>
            <div className={styles.formRow}>
              <h5>이&nbsp;름</h5>
              <input
                type="text"
                name="name"
                className={`${styles.design} ${styles.input1}`}
                placeholder="예시 : 홍길동"
                required
              />
            </div>
            <div className={styles.formRow}>
              <h5>성&nbsp;별</h5>
              <div className={styles.halfRow}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    onClickBtn("male");
                  }}
                  ref={refMale}
                  className={selectedGender === "male" ? styles.on : ""}
                >
                  남성
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    onClickBtn("female");
                  }}
                  ref={refFemale}
                  className={selectedGender === "female" ? styles.on : ""}
                >
                  여성
                </button>
                <input type="hidden" name="gender" value={selectedGender} />
              </div>
            </div>
            <div className={styles.formRow}>
              <h5>생년월일</h5>
              <div className={styles.halfRow2}>
                <input
                  type="text"
                  name="birth"
                  className={`${styles.design} ${styles.input2}`}
                  placeholder="예시 : 19810227"
                  required
                />
                <span>&nbsp;&#40;60~95년생만 신청가능&#41;</span>
              </div>
            </div>
            <div className={styles.formRow}>
              <h5>전화번호</h5>
              <input
                type="text"
                name="phone"
                className={`${styles.design} ${styles.input1}`}
                placeholder="예시 : 01012345678"
                required
              />
            </div>
          </div>
          <div className={styles.checkArea}>
            <label
              htmlFor="check1"
              className={`${styles.customChk} ${
                isChecked1 ? styles.checked : ""
              }`}
            ></label>
            <input
              onChange={handleCheckboxChange1}
              type="checkbox"
              id="check1"
              name="consent"
            />
            <div className={styles.labelContainer}>
              <label htmlFor="check1">
                개인정보 수집&middot;이용 동의 및 제3자 제공 동의
              </label>
              <button
                type="button"
                className={styles.termBtn}
                onClick={() => setIsConsentModalOpen(true)}
              >
                [약관보기]
              </button>
            </div>
          </div>
          <button className={styles.submitBtn}>상담 신청하기</button>
        </form>
      </div>
      {isConsentModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeBtn}
              onClick={() => setIsConsentModalOpen(false)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </button>
            <div className={styles.text}>
              개인정보처리(취급)방침
              <br />
              케이지에이에셋(주)(이하 회사라 한다)는 「개인정보보호법」 제30조
              및 「정보통신망이용촉진 및 정보보호에 관한 법률」제27조의 2 등에
              따라 고객의 개인정보 및 권익을 보호하고 개인정보와 관련한
              정보주체의 고충을 원활하게 처리할 수 있도록 다음과 같은
              처리(취급)방침을 두고 있습니다.
              <br />
              <br />
              제1조(개인정보의 처리목적)
              <br />
              <br />
              ① 회사는 개인정보를 다음 각 호의 목적을 위해 처리합니다. 처리한
              개인정보는 목적외의 용도로는 사용되지 않으며 이용목적이 변경될
              시에는 사전동의를 구할 예정입니다.
              <br />
              <br />
              1. 금융거래와 관련한 개인정보는 신용조회회사 또는
              신용정보집중기관에 대한 개인신용정보의 조회, 금융거래 관계의
              설정여부의 판단, 금융거래 관계의 설정·유지·이행·관리, 금융사고
              조사, 민원처리, 분쟁해결, 법령상 의무이행 등의 목적으로 개인정보를
              처리합니다.
              <br />
              <br />
              2. 상품·서비스의 홍보 및 판매권유 등과 관련한 개인정보는 고객
              만족도 조사를 통한 신규 서비스 개발 및 맞춤 서비스 제공 제공,
              인구통계학적 특성에 따른 서비스 제공 및 광고의 게재, 서비스의
              유효성 확인, 경품지급, 사은행사 등 고객의 편의 및 참여기회 제공,
              접속빈도 파악, 회원의 서비스이용에 대한 통계 등의 목적으로
              개인정보를 처리합니다.
              <br />
              <br />
              3. 회원가입 및 관리와 관련한 개인정보는 회원가입, 회원제 서비스
              이용, 제한적 본인 확인제에 따른 본인확인, 개인식별, 부정이용방지,
              비인가 사용방지, 가입의사 확인, 만 14세 미만 아동 개인정보 수집시
              법정대리인 동의여부 확인, 추후 법정대리인 본인 확인, 금융사고
              조사, 민원처리, 분쟁해결 및 고지사항 전달 등의 목적으로 개인정보를
              처리합니다.
              <br />
              <br />
              4. 온라인 거래 관련한 개인정보는 「전자금융거래법」 제21조,
              제22조에 의해 전자금융거래의 내용 추적 및 검색, 보안정책 수립용
              통계자료로 활용 등을 목적으로 개인정보를 처리합니다.
              <br />
              <br />
              제2조(개인정보의 처리 및 보유기간)
              <br />
              <br />① 금융거래와 관련한 개인(신용)정보는 수집·이용 및 제공 등에
              관한 동의일로부터 금융거래 종료일까지 제1조의 이용목적을 위하여
              보유·이용됩니다. 단, 금융거래 종료일 이후에는 금융사고 조사,
              민원처리, 분쟁해결, 법령상 의무이행 및 회사의 리스크 관리업무만을
              위하여 보유·이용됩니다.
              <br />
              <br />② 개인(신용)정보의 조회를 목적으로 수집된 개인(신용)정보는
              수집·이용에 대한 동의일로부터 고객에 대한 신용정보 제공·조회
              동의의 효력기간까지 보유·이용됩니다. 단, 신용정보 제공·조회 동의의
              효력기간 종료 후에는 금융사고 조사, 민원처리, 분쟁해결, 법령상
              의무이행만을 위하여 보유·이용됩니다.
              <br />
              <br />③ 상품·서비스의 홍보 및 판매권유 등과 관련한
              개인(신용)정보는 수집·이용 에 관한 동의일로부터 동의 철회일까지
              보유·이용됩니다. 단, 동의 철회일 후에는 금융사고 조사, 민원처리,
              분쟁해결, 법령상 의무이행만을 위하여 보유·이용됩니다.
              <br />
              <br />④ 회원가입 및 관리 목적으로 수집된 개인(신용)정보는 고객의
              회원 가입일로부터 회원 탈퇴시까지 보유·이용하여야 한다. 단, 회원
              탈퇴일 후에는 금융사고 조사, 민원처리, 분쟁해결, 법령상
              의무이행만을 위하여 보유·이용됩니다.
              <br />
              <br />⑤ 온라인 거래 관련한 개인(신용)정보는 「전자금융거래법
              시행령」 제12조에서 정하는 기간까지 보유·이용됩니다.
              <br />
              <br />
              제3조(개인정보의 제3자 제공)
              <br />
              <br />① 회사는 원칙적으로 고객의 개인정보를 제1조에서 명시한 목적
              범위 내에서 처리하며, 고객의 사전 동의없이는 본래의 범위를
              초과하여 처리하거나 제3자에게 제공하지 않습니다. 단, 다음 각 호의
              경우에는 고객 또는 제3자의 이익을 부당하게 침해할 우려가 있을 때를
              제외하고는 개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게
              제공할 수 있습니다.
              <br />
              <br />
              1. 고객이 사전에 제3자 제공 및 공개에 동의한 경우
              <br />
              2. 다른 법률에 특별한 규정이 있는 경우
              <br />
              3. 고객 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나
              주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 고객 또는
              제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고
              인정되는 경우
              <br />
              4. 통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정
              개인을 알아볼 수 없는 형태로 개인정보를 제공하는 경우 ② 회사는
              다음 각 호와 같이 개인정보를 제공하고 있습니다.
              <br />
              <br />
              1. 제공받는 자<br />
              가. 신용조회회사: 서울신용평가정보(주)
              <br />
              나. 채권의 양수기관: 한국자산관리공사 등<br />
              다. 제휴업체 등: 보험회사 등<br />
              <br />
              2. 제공받는 자의 이용 목적
              <br />
              가. 신용조회회사
              <br />- 본인의 신용을 판단하기 위한 자료로 활용
              <br />
              나. 채권의 양수기관
              <br />- 양수인의 추심 및 관리, 양수가격 산정 등에 활용
              <br />
              다. 제휴업체 등<br />- 제휴계약 등에 따른 업무 수행
              <br />- 제휴 상품·서비스의 홍보 및 판매 권유
              <br />
              <br />
              3. 개인정보 제공 항목
              <br />
              가. 신용조회회사
              <br />- 개인식별정보, 신용평가를 위한 정보
              <br />
              나. 채권의 양수기관
              <br />- 양수인의 추심 및 관리, 양수가격 산정 등에 필요한 정보
              <br />
              다. 제휴업체 등<br />- 제휴계약 등에 따른 업무 수행에 필요한 정보
              <br />- 제휴업무 목적 달성을 위해 필요한 정보
              <br />
              <br />
              4. 개인정보 보유 기간
              <br />- 개인(신용)정보는 제공된 날로부터 동의 철회시 또는 제공된
              목적을 달성할 때 까지 보유·이용됩니다. 단, 동의 철회 또는
              제공된목적 달성 후에는 정보 이용목적과 관련된 금융사고 조사,
              민원처리, 분쟁해결, 법령상 의무이행만을 위하여 필요한 범위내에서
              보유·이용됩니다.
              <br />
              <br />
              제4조(고객의 권리·의무 및 그 행사방법)
              <br />
              <br />① 고객은 회사가 처리하는 본인 및 만 14세 미만
              아동(법정대리인만 해당)의 개인정보의 열람을 요구할 수 있습니다.
              <br />
              <br />② 본인의 개인정보를 열람한 고객은 사실과 다르거나 확인할 수
              없는 개인정보에 대하여 회사에 정정 또는 삭제를 요구할 수 있습니다.
              다만, 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는
              경우에는 그 삭제를 요구할 수 없습니다.
              <br />
              <br />③ 고객은 회사에 대하여 본인의 개인정보 처리의 정지를 요구할
              수 있습니다. 다만, 다음 각 호의 어느 하나에 해당하는 경우에는
              회사는 해당 사유를 고객에게 알리고 처리정지 요구를 거절할 수
              있습니다.
              <br />
              <br />
              1. 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여
              불가피한 경우
              <br />
              2. 다른 사람의 생명·신체를 해할 우려가 있거나 다른 사람의 재산과
              그 밖의 이익을 부당하게 침해할 우려가 있는 경우
              <br />
              3. 개인정보를 처리하지 아니하면 고객과 약정한 서비스를 제공하지
              못하는 등 계약의 이행이 곤란한 경우로서 고객이 그 계약의 해지
              의사를 명확하게 밝히지 아니한 경우
              <br />
              <br />
              제5조(처리하는 개인정보의 항목)
              <br />
              <br />① 회사는 (금융)거래의 설정·유지·이행·관리, 상품 및 서비스의
              제공에 필요한 최소한의 필수정보 및 선택정보를 다음 각 호와 같이
              수집하고 있습니다.
              <br />
              <br />
              1. 필수적 정보
              <br />
              가. 개인식별정보: 성명, 주민등록번호 등 고유식별정보, 직업, 주소,
              전자우편 주소, 전화번호 등 연락처
              <br />
              나. (금융)거래정보: 상품종류, 증권번호, 보험계약자, 피보험자,
              보험기간, 보험료, 보험금액 등 보험계약 내용
              <br />
              다. 기타 금융거래의 설정·유지·이행·관리를 위한 상담·채권관리 등을
              통해 생성되는 정보
              <br />
              <br />
              2. 선택적 정보
              <br />
              가. 보험청약서 등에 기재된 정보 또는 고객이 제공한 정보
              <br />- 가족사항, 결혼여부 등<br />
              <br />
              3. 수집방법
              <br />
              가. 회사에 내방한 고객으로부터 직접 수집
              <br />
              나. 홈페이지, 서면양식, 팩스, 전화, 이메일 등
              <br />
              다. 생성정보 수집 툴을 통한 수집
              <br />
              라. 고객센터를 통한 수집
              <br />
              <br />
              제6조(개인정보의 파기)
              <br />
              <br />① 회사는 개인정보의 보유기간이 경과된 경우에는 다음 각 호의
              사유가 없는 한 보유기간의 종료일로부터 5영업일 이내에, 개인정보의
              처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가
              불필요하게 되었을 때에는 다음 각 호의 사유가 없는 한 개인정보의
              처리가 불필요한 것으로 인정되는 날로부터 5영업일 이내에 그
              개인정보를 파기합니다.
              <br />
              <br />
              1. 신용조회회사가 개인의 신용도 등을 평가하기 위한 목적으로
              개인신용정보를 보유하는 경우
              <br />
              2. 신용정보회사 등이 민·형사상의 책임 또는 시효가 지속되거나
              분쟁의 입증자료로서 개인신용정보를 보유하는 경우
              <br />
              3. 상법 제33조 등 법령에 따라 보존하여야 하는 경우
              <br />
              4. 기타 이와 유사한 정당한 사유가 있는 경우
              <br />
              <br />② 개인정보가 기록된 출력물, 서면 등은 파쇄 또는 소각의
              방법으로 파기하고, 전자적 파일 형태의 개인정보는 복원이
              불가능하도록 영구 삭제하는 방법으로 파기합니다.
              <br />
              <br />
              제7조(개인정보의 안전성 확보조치)
              <br />
              <br />① 회사는 개인정보보호법 제29조에 따라 다음 각 호와 같이
              안전성 확보에 필요한 기술적, 관리적 및 물리적 조치를 하고
              있습니다.
              <br />
              <br />
              1. 개인정보의 암호화
              <br />- 고객의 비밀번호는 암호화되어 저장 및 관리되고 있어
              본인만이 알 수 있으며, 중요한 데이터 및 파일은 암호를 설정하는 등
              파일 잠금 기능을 활용하여 별도의 보안기능을 확보하고 있습니다.
              <br />
              2. 해킹 등에 대비한 기술적 대책
              <br />- 회사는 해킹이나 컴퓨터 바이러스 등에 대한 개인정보 유출·
              훼손을 막기 위하여 보안프로그램 및 백신 소프트웨어를 설치하여
              주기적인 갱신·점검을 하며, 외부로부터 접근이 통제된 구역에
              시스템을 설치하고 기술적·물리적으로 감시 및 차단하고 있습니다.
              <br />
              <br />
              3. 개인정보처리시스템 접근 제한
              <br />- 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의
              부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한
              조치를 하고 있으며 외부로부터 무단접근을 통제하고 있습니다.
              <br />
              <br />
              4. 개인정보 취급 직원의 최소화 및 교육
              <br />- 개인정보를 취급하는 직원을 지정하고 담당자를 한정시켜
              최소화 하여 개인정보관리에 철저를 기하고 있습니다.
              <br />
              <br />
              제8조(개인정보 처리(취급)방침의 변경)
              <br />
              <br />
              회사는 개인정보 처리(취급)방침을 변경하는 경우에는 변경 및 시행
              시기, 변경된 내용을 지속적으로 공개하며, 변경된 내용은 고객이 쉽게
              확인할 수 있도록 변경 전·후를 비교하여 공개합니다.
              <br />
              <br />
              제9조(권익침해 구제방법) 고객은 개인정보 침해로 인한 신고나 상담이
              필요하신 경우 아래 기관에 문의하시기 바랍니다.
              <br />
              <br />
              1. 개인정보분쟁조정위원회
              <br />- 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적
              해결)
              <br />- 홈페이지 : www.kopico.go.kr
              <br />- 전화 : (국번없이) 1833-6972
              <br />- 주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사
              12층
              <br />
              2. 한국인터넷진흥원 개인정보침해신고센터
              <br />- 소관업무 : 개인정보 침해 사실 신고, 상담 신청
              <br />- 홈페이지 : http://privacy.kisa.or.kr/
              <br />- 전화 : (국번없이) 118
              <br />- 주소 : (58324) 전남 나주시 진흥길 9(빛가람동)
              한국인터넷진흥원 개인정보침해 신고센터
              <br />
              3. 대검찰청 사이버범죄수사단(www.spo.go.kr, 02-3480-3573)
              <br />
              4. 경찰청 사이버안전국(http://cyberbureau.police.go.kr,182)
              <br />
              <br />
              제10조(개인정보 보호책임자 등) 회사의 개인정보보호법 제31조
              제1항에 따른 개인정보 보호책임자는 다음과 같습니다.
              <br />
              <br />
              개인정보 보호책임자 개인정보 담당부서
              <br />
              소속 준법감시인 준법경영본부
              <br />
              전화번호/FAX 전화 02-3472-0252 / FAX 02-3472-0254
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FormSection;
