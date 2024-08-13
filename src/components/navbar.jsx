function Navbar() {

    return (
        <>
            <div id="Rest">
                <h1>REST<span className="vermelho">URANTE</span></h1>
            </div>
            <div>
                <input type="text" placeholder="Pesquisar" value='Pesquisar'/>
                <input type="submit" placeholder="buscar" value="buscar"/>
            </div>
            <div id="lista">
                <a href="italiana.html">ITALIANA</a>
                <a href="chinesa.html">CHINESA</a>
                <a href="brasileira.html">BRASILEIRA</a>

                <div className="cadastro">
                    <form >
                        <div>
                            <input type="text" name="login" placeholder="Login" />
                        </div>
                        <div>
                            <input type="text" name="senha" placeholder="Senha" />
                        </div>
                        <div>
                            <input type="submit" value='Entrar' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Navbar