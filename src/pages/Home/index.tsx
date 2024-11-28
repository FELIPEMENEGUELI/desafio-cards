import { ButtonCustomer } from '../../components/ButtonCustomer'
import { Cards } from '../../components/Card'
import { Header } from '../../components/Header'
import { BoxMain, Container, ContainerCards, BoxSearch } from './style'

export const Home = () => {
  return (
    <Container>
      <Header />
      <BoxMain>
        <ContainerCards>
          <BoxSearch>
            <span>Resultados da busca</span>
            <ButtonCustomer />
          </BoxSearch>

          <Cards />
        </ContainerCards>
      </BoxMain>
    </Container>
  )
}

