import styled from 'styled-components';

import { HotelImg, StarImg } from '../../assets/image';

interface CustomSlideProps {
  hotelName: string;
  hotelRoom: string;
  hotelBed: string;
}

const CustomSlide = (props: CustomSlideProps) => {
  const { hotelName, hotelRoom, hotelBed } = props;
  return (
    <ElementContainer>
      <ElementImg src={HotelImg} alt="이미지" />
      <DescriptionWrapper>
        <HotelDescription>
          <HotelName>{hotelName}</HotelName>
          <HotelInfoContainer>
            <HotelRoomInfo>{hotelRoom}</HotelRoomInfo>
            <HotelBedInfo>{hotelBed}</HotelBedInfo>
          </HotelInfoContainer>
        </HotelDescription>
        <HotelPriceStarContainer>
          <HotelStarContainer>
            <HotelStarImg src={StarImg} alt="별점" />
            <HotelStarRate>4.7</HotelStarRate>
            <HotelStarNum>(173)</HotelStarNum>
          </HotelStarContainer>
          <HotelPriceContainer>
            <HotelPrice>75,113원</HotelPrice>
            <HotelPerDay>/박</HotelPerDay>
          </HotelPriceContainer>
        </HotelPriceStarContainer>
      </DescriptionWrapper>
    </ElementContainer>
  );
};

export default CustomSlide;

const ElementContainer = styled.article`
  border: 0.1rem solid ${({ theme }) => theme.colors.skscanGrey200};
  border-radius: 1.6rem;
  width: 25rem;
  height: 30.8rem;
`;

const ElementImg = styled.img`
  border-radius: 0.1rem 0.1rem 0 0;
  width: 100%;
  height: 20.2rem;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  height: 10.6rem;
`;

const HotelDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const HotelName = styled.p`
  margin-bottom: 0.5rem;
  ${({ theme }) => theme.fonts.body05};
`;

const HotelInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  ${({ theme }) => theme.fonts.caption02};
`;

const HotelRoomInfo = styled.span`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.skscanGrey700};
`;
const HotelBedInfo = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey700};
`;

const HotelPriceStarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HotelStarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.9rem;
  ${({ theme }) => theme.fonts.caption02};
`;

const HotelStarImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const HotelStarRate = styled.span`
  padding: 0.35rem 0;
  color: ${({ theme }) => theme.colors.skscanBk};
`;

const HotelStarNum = styled.span`
  padding: 0.35rem 0 0.35rem 0.2rem;
  color: ${({ theme }) => theme.colors.skscanGrey700};
`;

const HotelPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

const HotelPrice = styled.span`
  margin-right: 0.2rem;
  color: ${({ theme }) => theme.colors.skscanBk};
  ${({ theme }) => theme.fonts.caption01};
`;

const HotelPerDay = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey700};
  ${({ theme }) => theme.fonts.caption02};
`;

// children으로 변경 필요
// 반응형 필요
// 반응형일시 화살표 포지션 정하기
