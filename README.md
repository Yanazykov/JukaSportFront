<a name="readme-top"></a>

<div align="center">

<a href="https://github.com/midudev/la-velada-web-oficial">
  <img width="100px" src="https://imgur.com/vtrXGWQ.png" alt="Logo" width="800" />
</a>

## Sistema **ERP** para Juka Sport

El proyecto ERP de Juka Sport transformará la gestión empresarial al integrar tareas operativas de distintos departamentos en una sola plataforma segura y eficiente.\
[Diseño de Figma](https://www.figma.com/file/7uUHCJ7YhJEoB24EZ00lXC/240405-LVDA-IV?type=design&node-id=0-1&mode=design&t=CUK9cH8DXhKXx31U-0)

</div>

<details>
<summary>Tabla de contenidos</summary>

-   [Sistema **ERP** para Juka Sport](#sistema-erp-para-juka-sport)
-   [Para empezar](#para-empezar)
    -   [Prerequisitos](#prerequisitos)
    -   [Instalación](#instalación)
-   [🛠️ Stack](#️-stack)
</details>

## Para empezar

### Prerequisitos

-   NVM (recomendado para asegurar versión de Node) ver [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

    ```sh
    nvm use
    # o
    nvm use <version>
    ```

    > Si quieres automatizar el proceso, puedes crear un script siguiendo la [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

<details>
	<summary>Pequeño script de automatización</summary>
	
- En Linux/MacOS:
	```sh
	# .bashrc | .zshrc | cualquier archivo de configuración
	# pequeño script para cambiar de version al entrar al directorio
	cd() {
  builtin cd "$@"
		if [[ -f .nvmrc ]]; then
			nvm use > /dev/null
			# Si quieres que te diga la versión
			nvm use
		fi
	}
	```

-   En Windows:

    ```powershell
    # $PROFILE
    function Change-Node-Version {
    	param($path)
    	& Set-Location $path
    	$pwd = pwd
    	if ( Test-Path "$pwd\\.nvmrc" ) {
    		$version = Get-Content .nvmrc
    		nvm use $version
    	}
    }
    New-Alias -Name cd -Value Change-Node-Version -Force -Option AllScope
    ```

    </details>

-   yarn (recomendación por su eficiencia y rapidez)

    ```sh
    npm install --global yarn

    ```

-   o NPM

    ```sh
    npm install npm@latest -g
    ```

### Instalación

1.  Clona el repositorio

    ```sh
    git clone https://github.com/EstebanSa25/JukaSportFront.git
    ```

2.  Instala los paquetes de NPM

        ```sh
        yarn install
        ```

    > [!WARNING]
    > Tener ejecutando el proyecto WebApi antes

3.  Ejecuta el proyecto

    ```sh
    yarn dev
    ```

> [!NOTE] Generar archivos de producción
> `yarn build`

 <p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## 🛠️ Stack

-   [![Vite][vite-badge]][vite-url] - Es una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos.
-   [![React][react-badge]][react-url] - La biblioteca para interfaces de usuario web y nativas.
-   [![Typescript][typescript-badge]][typescript-url] - JavaScript con sintaxis para Tipado.
-   [![Tailwind CSS][tailwind-badge]][tailwind-url] - Un marco CSS de utilidad para crear rápidamente diseños personalizados..
-   [![Jest][jest-badge]][jest-url] - Biblioteca de JavaScript de código abierto que permite crear, ejecutar y estructurar pruebas.
-   [![StoryBook][story-badge]][story-url] - Interfaz para crear componentes y páginas de interfaz de usuario de forma aislada.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

[vite-url]: https://vitejs.dev/
[react-url]: https://es.react.dev/
[typescript-url]: https://www.typescriptlang.org/
[tailwind-url]: https://tailwindcss.com/
[jest-url]: https://jestjs.io/es-ES/
[story-url]: https://storybook.js.org/
[vite-badge]: https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=for-the-badge
[react-badge]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%
[jest-badge]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[story-badge]: https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[tailwind-badge]: https://img.shields.io/badge/Tailwind-ffffff?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8
