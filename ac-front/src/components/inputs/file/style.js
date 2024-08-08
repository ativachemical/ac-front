import styled from 'styled-components';

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0 0;
  gap:10px;
  user-select: none;
`;

export const UploadLabel = styled.label`
  padding: 10px 20px;
  background-color: var(--accent-color);
  color: var(--text-button);
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  &:hover {
    opacity: 0.8;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const ImageUploaderContainer = styled.div`
  display: flex;
  /* user-select: none; */
  width:100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  user-select: none;
  width: 230px;
  margin-bottom: 5px;
  border-radius: ${(props) => props.borderRadius};
  filter: drop-shadow(0px 0px 6px #2f334f8c);
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: 230px;
  align-items: center;
`