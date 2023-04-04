import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public categorias = [
    { codigo: 1, nome: 'Boi'    },
    { codigo: 2, nome: 'Porco'  },
    { codigo: 3, nome: 'Frango'   },
    { codigo: 4, nome: 'Peixes' }
  ]

  public slideOpts = {
    slidesPerView: 2
  }

  public produtos = [
    { codigo: 1, categoria: 3, descricao: 'Que tal experimentar as asas de frango mais crocantes e saborosas da cidade? Aqui na nossa loja, nós preparamos asas de frango fresquinhas todos os dias, com ingredientes selecionados e receitas exclusivas que vão fazer você se apaixonar. Não perca mais tempo e venha experimentar as melhores asas de frango da região. Estamos esperando por você!', nome: 'Asa', valor: 15.90, imagens: ['asa2.png', 'asa1.png'], visibled: false },
    { codigo: 2, categoria: 3, descricao: 'Você sabia que as coxas de frango podem ser uma opção deliciosa e saudável para incluir na sua alimentação diária? Aqui na nossa loja, nós selecionamos as melhores coxas de frango fresquinhas, para que você possa saborear um prato saboroso e nutritivo. Então não perca mais tempo e venha experimentar as melhores coxas de frango da região. Aqui na nossa loja, nós garantimos que você irá se surpreender com o sabor e a qualidade dos nossos produtos. Estamos esperando por você!', nome: 'Coxa', valor: 13.99, imagens: ['coxa1.png', 'coxa2.png'], visibled: false },
    { codigo: 3, categoria: 3, descricao: 'Você está procurando uma opção saudável e saborosa para incluir na sua alimentação diária? Então experimente o peito de frango da nossa loja! Aqui nós selecionamos os melhores peitos de frango fresquinhos, para que você possa saborear um prato nutritivo e delicioso. Então não perca mais tempo e experimente o peito de frango da nossa loja. Garantimos que você irá se surpreender com o sabor e a qualidade dos nossos produtos. Venha nos visitar e descubra por que somos a escolha preferida dos amantes de frango saudável e saboroso!', nome: 'Peito', valor: 13.90, imagens: ['peito1.png' , 'peito2.png' ], visibled: false },
    { codigo: 4, categoria: 3, descricao: 'Que tal experimentar os melhores drumets da cidade? Aqui na nossa loja, nós selecionamos os melhores pedaços de frango para que você possa saborear um prato delicioso e crocante. Não perca mais tempo e venha experimentar os melhores drumets da região. Estamos esperando por você aqui na nossa loja, prontos para oferecer uma experiência gastronômica única e inesquecível!', nome: 'Drumet', valor: 12.90, imagens: ['drumet1.png' , 'drumet2.png' ], visibled: false },
    { codigo: 5, categoria: 1, descricao: 'A picanha é um dos cortes de carne mais populares e apreciados no Brasil e em todo o mundo. Com sua textura macia, suculência e sabor inigualável, a picanha é um prato perfeito para aqueles que buscam uma experiência gastronômica excepcional. Se você é um amante da carne ou está procurando um prato especial para uma ocasião especial, a picanha é uma escolha clássica que nunca decepciona. Experimente e saboreie a riqueza do seu sabor!', nome: 'Picanha', valor: 79.90, imagens: ['picanha1.png' , 'picanha2.png'], visibled: false },
    { codigo: 6, categoria: 1, descricao: 'A alcatra é uma carne magra, com baixo teor de gordura e alto teor de proteínas, o que a torna uma ótima opção para quem busca uma alimentação saudável e equilibrada. Se você ainda não experimentou a alcatra, não perca mais tempo! Compre agora mesmo essa deliciosa carne e prepare receitas incríveis para a sua família e amigos. A alcatra é uma escolha certa para quem busca uma carne de qualidade e sabor incomparável. Aproveite! ', nome: 'Alcatra',        valor: 44.90, imagens: ['alcatra1.png' , 'alcatra2.png' ], visibled: false },
    { codigo: 7, categoria: 1, descricao: 'Com sua textura macia e sabor suave, é uma carne que agrada a todos os paladares. Ideal para preparar pratos requintados e sofisticados, o filé mignon é a escolha perfeita para uma ocasião especial. Se você quer surpreender os seus convidados em um jantar especial, o filé mignon é a escolha certa. Com ele, você pode preparar deliciosos pratos como medalhões, carpaccios, rosbifes, espetinhos, entre outros. Aproveite a oportunidade e experimente o sabor incomparável do filé mignon. Com certeza, você não vai se arrepender!', nome: 'Filé Mignon', valor: 69.90, imagens: ['file1.png' , 'file2.png' ], visibled: false },
    { codigo: 8, categoria: 1, descricao: 'A costela é uma das carnes mais saborosas e suculentas que existe. Com seu sabor defumado e textura macia, é a opção perfeita para um churrasco ou uma refeição em família. Além disso, a costela é uma carne rica em nutrientes e proteínas, o que a torna uma escolha saudável para os amantes de carne. Com a costela, é possível preparar diversos pratos, como o tradicional churrasco, a famosa costela no bafo, o assado de tira, o brisket e muitos outros. Se você é um amante de carne, não pode deixar de experimentar a costela. Com certeza, será amor à primeira mordida!', nome: 'Costela', valor: 35.90, imagens: ['costela1.png' , 'costela2.png' ], visibled: false },
    { codigo: 9, categoria: 2, descricao: 'Prove agora a nossa deliciosa linguiça, um produto de qualidade e sabor incomparável! Feita com carne suína selecionada e temperos especiais, nossa linguiça é perfeita para quem busca um produto de qualidade para acompanhar aquele churrasco ou para o lanche do dia a dia. Com uma textura macia e sabor marcante, nossa linguiça é produzida com ingredientes frescos e de alta qualidade, garantindo um produto saudável e saboroso para toda a família. Seja na churrasqueira, na frigideira ou no forno, nossa linguiça é versátil e combina com diversas preparações.', nome: 'Linguiça',      valor: 19.90, imagens: ['linguica1.png' , 'linguica2.png' ], visibled: false },
    { codigo: 10, categoria: 2, descricao: 'Descubra agora o sabor irresistível do nosso lombo de porco, um corte nobre e suculento que vai conquistar o seu paladar! Com sua textura macia e sabor marcante, o lombo é perfeito para os amantes de um bom churrasco ou para quem busca uma opção saudável e saborosa para o dia a dia.', nome: 'Lombo',     valor: 24.90, imagens: ['lombo1.png' , 'lombo2.png' ], visibled: false },
    { codigo: 11, categoria: 2, descricao: 'Experimente agora o sabor irresistível do nosso pernil de porco, um corte suculento e saboroso que vai encantar o seu paladar! Com sua carne macia e suculenta, o pernil é perfeito para preparar aquele almoço especial em família ou para um delicioso churrasco com amigos. Nosso pernil de porco é produzido com carne suína selecionada e temperado com especiarias de alta qualidade, que garantem um sabor único e marcante em cada mordida. Além disso, nossos cortes são embalados a vácuo para manter a qualidade e o sabor por mais tempo.', nome: 'Pernil',       valor: 18.90, imagens: ['pernil1.png' , 'pernil2.png' ], visibled: false },
    { codigo: 12, categoria: 2, descricao: '"Experimente agora a nossa paleta de porco, um corte suculento e saboroso que vai conquistar o seu paladar! Com sua carne macia e gordura na medida certa, a paleta é perfeita para preparações assadas, cozidos e preparações com molhos. Nosso corte de paleta de porco é produzido com carne suína selecionada e temperado com especiarias de alta qualidade, que garantem um sabor único e marcante em cada mordida. Além disso, nossos cortes são embalados a vácuo para manter a qualidade e o sabor por mais tempo. Com a nossa paleta de p', nome: 'Paleta',       valor: 16.90, imagens: ['paleta1.png' , 'paleta2.png' ], visibled: false },
    { codigo: 13, categoria: 4, descricao: 'Nossos filés são cuidadosamente selecionados para garantir o sabor e a textura perfeitos. Preparamos cada filé com ingredientes frescos e saudáveis, garantindo um prato delicioso e nutritivo. O filé de tilápia é uma opção ideal para quem busca uma alimentação saudável, pois é uma fonte de proteína magra e contém uma série de nutrientes importantes, como ômega-3, vitamina D e selênio.', nome: 'Filé de tilápia', valor: 41.90, imagens: ['tilapia1.png' , 'tilapia2.png' ], visibled: false },
    { codigo: 14, categoria: 4, descricao: 'Que tal experimentar o salmão mais fresco e saboroso que você já provou? Aqui na nossa loja, oferecemos filés de salmão de qualidade premium, criados de maneira sustentável e preparados na hora para garantir a máxima frescura e sabor. O salmão é um peixe rico em ômega-3 e outros nutrientes importantes, que fazem bem para a saúde do coração, cérebro e corpo como um todo. Além disso, o salmão é uma opção versátil e saborosa que pode ser preparada de várias maneiras, desde grelhado ou assado até defumado ou cru.', nome: 'Salmão', valor: 84.90, imagens: ['salmao1.png' , 'salmao2.png' ], visibled: false },
    { codigo: 15, categoria: 4, descricao: 'Se você é fã de peixes brancos e leves, precisa experimentar o delicioso filé de merluza que temos na nossa loja. Nossos filés são cuidadosamente selecionados e preparados na hora para garantir a frescura e o sabor perfeitos. A merluza é um peixe com carne branca e macia, com um sabor suave e delicado que agrada a todos os paladares. Além disso, ela é uma fonte rica em proteínas, vitaminas e minerais, sendo uma ótima opção para quem busca uma alimentação saudável e balanceada.', nome: 'Merluza', valor: 35.90, imagens: ['merluza1.png' , 'merluza2.png' ], visibled: false },
    { codigo: 16, categoria: 4, descricao: 'Já provou a nossa deliciosa sardinha? Se ainda não experimentou, está perdendo a chance de saborear um peixe cheio de sabor e benefícios para a saúde. A sardinha é um peixe rico em ômega-3, vitaminas e minerais, que ajudam a fortalecer o sistema imunológico, proteger o coração e melhorar a saúde do cérebro. Além disso, ela tem um sabor inconfundível, que agrada a todos os paladares.', nome: 'Sardinha', valor: 48.90, imagens: ['sardinha1.png' , 'sardinha2.png' ], visibled: false },
  ]

  public pathImgs = '../../assets/img/';

  public selected = 0;

  constructor(private navCtrl: NavController) {
    this.setSelected(1);
  }

  public formataValor(valor) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public setSelected(codigoCategoria) {
    this.selected = codigoCategoria;

    this.produtos.map(el => el.visibled = false);

    this.produtos
    .filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);
  }

  public goProduto(produto) {
    this.navCtrl.navigateForward('produto', {
      queryParams: { produto: produto }
    });
  }

}
