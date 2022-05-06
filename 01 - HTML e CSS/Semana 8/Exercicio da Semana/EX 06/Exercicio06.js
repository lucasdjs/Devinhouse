var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, ativa, dono) {
        this.numero = numero;
        this.saldo = saldo;
        this.estaAtiva = ativa;
        this.dono = dono;
    }
    return Conta;
}());
var ContaEmpresa = /** @class */ (function (_super) {
    __extends(ContaEmpresa, _super);
    function ContaEmpresa(numero, saldo, ativa, dono) {
        var _this = _super.call(this, numero, saldo, ativa, dono) || this;
        _this.limiteDeDeposito = 1000;
        return _this;
    }
    ContaEmpresa.prototype.deposito = function (valor) {
        if (valor <= this.limiteDeDeposito) {
            this.saldo = this.saldo + valor;
            return this.imprimeValorConta(this.saldo);
        }
        else {
            return this.imprimeValorConta(this.saldo);
        }
    };
    ContaEmpresa.prototype.imprimeValorConta = function (valor) {
        console.log(valor);
    };
    return ContaEmpresa;
}(Conta));
var banco = new ContaEmpresa(1, 0, true, "Lucas");
banco.deposito(3500);
