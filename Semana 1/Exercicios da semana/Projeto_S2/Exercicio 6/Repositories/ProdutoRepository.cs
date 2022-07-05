using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GeraEstoque.Models;

namespace GeraEstoque.Repositories
{
    public class ProdutoRepository
    {
        public IList Produtos { get; private set; }

        public ProdutoRepository(IList produtos)
        {
            Produtos = produtos;
        }
    }
}
