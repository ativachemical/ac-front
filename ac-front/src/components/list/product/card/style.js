import styled from "styled-components";

export const List = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
gap:20px;
// padding:  0 0 45px 0;

@media (width < 768px) {
  display:flex;
  flex-direction:column;
}
`