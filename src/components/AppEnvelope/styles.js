import styled from '@emotion/styled'

export const AppEnvelopeWrapper = styled.div`

  width: 100%;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .app-envelope-content {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 0;
  }

  .app-envelope-top-bar {
    width: 100%;
    height: 100px;
    background-color: #222224;
    display: flex;
    align-items: center;
    padding: 10px;

    .logout-button {
      margin-left: auto;
    }

    .message-span {
      margin-left: 10px;
    }

  }

`;
