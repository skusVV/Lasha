
import styled from 'styled-components';

export const StyledCar = styled.div`
  width: 15%;
  overflow: hidden;
  background: #222222;
  border-radius: 25px;
  cursor: pointer;
  margin-right: 24px;
  margin-top: 24px;
  color: white;

  .car-card {
    &-img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        transition: all 100ms ease-in;

        &:hover {
            transform: scale(1.05);
        }
      }

      &-content {
        padding: 16px;
      }

      &-city {
        color: rgb(190, 191, 195);
      }

      &-info {
        margin-top: 12px;
      }
    
      &-price {
        margin-top: 12px;
      }

      &-labels {
        margin-top: 12px;
        border-top: 1px solid rgb(190, 191, 195);
        padding-top: 12px;
      }
    
      &-label {
        background: #222222;
        border: 1px solid white;
        padding: 4px 8px;
        margin-right: 12px;
        border-radius: 12px;
      }
  }
`;