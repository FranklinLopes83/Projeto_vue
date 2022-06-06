const app = Vue.createApp({
    data(){
        return{
            bloco:{
                inicio:true,
                idade:false,
                cambio:false,
                diaSemana:false,
                desconto:false
            }, 
            mensagem: {
                idade : "Cálculo da idade a partir do ano de nascimento inserido pelo usuário",
                cambio: "Cálculo do valor em reais a partir de um valor em dólar e cotação inserida pelo usuário",
                diaSemana : "Exibir o dia da semana a partir de uma data inserida pelo usuário",
                desconto : "Calcular  o  resultado  a  partir  de  um  valor  base  e  o percentual de desconto indicados pelo usuário"
            },
            textoInicial:'Olá, Seja Bem Vindo ao Nosso Sistema',
            campoIdade:'', 
            resultado:'',
            info:'',
            dolar:'',
            cotacao:'',
            data:'',
            statusTolltip: false // Para verificar se o tolltip foi ativado
        }
    },
    methods:{
        verificarLink(classe){
            //console.log(classe[1])
            let itens = classe[1]// classe é um parâmetro que irá conter um vetor com as classes da tag na qual a função está sendo chamada.

            // for..in permite percorrer um objeto
            for(elementos in this.bloco){
                //console.log(elementos)
                if(itens == elementos){
                    this.bloco[elementos] = true
                    this.textoInicial = this.mensagem[elementos]
                }
                else{
                    this.bloco[elementos] = false
                }
            }
        },
        calcularIdade(){
            let anoAtual = new Date().getFullYear()// Estou pegando o ano atual
            if(this.validarIdade()){
                let resposta = anoAtual - this.campoIdade
            console.log(resposta)
            this.resultado = `Você possui ${resposta} anos`
            }
            
        },

        validarIdade(){
                if (this.campoIdade < 1900 || this.campoIdade > 2050){
                this.info = "Voce precisa informar um valor entre 1900 e 2050"
                this.resultado = "" //Irá retirar a mensagem do calculo da idade
                return  false// Significa que oo usuuario infomou um valor errado.
            }

            else{
                this.info = ""
                return true // Sigmifica que o usuario digitou o valor correto

            }
        },
        converterDolar(){
            let padrao = /^[0-9]+(\.([0-9]{2}))?$/
            if(padrao.test(this.dolar) && padrao.test (this.cotacao)){
                let resposta = this.dolar * this.cotacao 
                this.resultado = `U$${this.dolar} convertido para real é R$${resposta}`
                this.info = "" //retirando a mensgem d erro após informa resultado correto
            }

            else{
                this.info = "Inserir apenas nýmeros com 2 xasas decimais"
                this.resultado = ""
            }

            },

            verificarDiaSemana(){
                let dias = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", 'Sabádo', "Domingo"]
                let diaSemana = new Date(this.data).getDay() // getday() retorna o dia da semanasendo 0 para segunda e 6 para o domingo
                if(this.data != ""){
                    this.resultado = `Essa data é ${dias[diaSemana]}`
                    this.info = ""
                }
                else{
                    this.info = "Informe uma data Valoida"
                    this.resultado = ""
                }
                this.resultado = dias[diaSemana] 
                
            },

            ativarTooltip(){
                if(!this.statusTolltip){
                    const diaSemana = document.querySelector('#diaSemana')
                const tooltip = new bootstrap.Tooltip(diaSemana)
                this.statusTooltip = true
                }
                

            }
            
    }
})

app.mount("#app")