# cypress/e2e/api.feature

Feature: Consulta de produtos

  Scenario: Validar consulta do produto HeadPhone H2310
    Given que o produto esteja cadastrado na base
    When realizar consulta com palavra chave
    Then a resposta deve ter o status 200
    And a resposta deve conter o produto pesquisado