* Обычно в root монорепозитория устанавливают только dev зависимости. Все же, что используется в проде нужно устанавлить внутри packages, несмотря на дубли зависимостей. Это делается для того, чтобы при обновлении основных зависимостей не нужно было рефакторить все пакеты.

* Кешируют только команды build и test с помощью команды `npx lerna add-caching`, и там же настройка, чтобы запускать build для каждого пакета, перед `lerna build` и `lerna dev`. `^build` запускать build для целевого пакета, где выполняется скрипт и всех зависимых пакетов. `build` запускать build только для целевого пакета перед тем как запускать скрипт.

* `npx nx graph`, чтобы посмотреть зависимости всех packages

**Литература**

* https://gist.github.com/Noktomezo/11a8f21e31bcdf1fae7ede5da322159f.
