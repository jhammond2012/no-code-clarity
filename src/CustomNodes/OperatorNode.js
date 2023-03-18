import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';


export default memo(({ data, isConnectable }) => {
  return (
    <div className='bg-white rounded-md overflow-hidden'>
      <div
        className='bg-[#7a40ee] w-full text-white text-xs font-bold p-2 pl-6'
      >Operator Node</div>
      <div className='p-2 pt-0'>
        <select name="operator_type" id="" className='w-full outline-none mt-2 text-xs'>
          <option value="" disabled selected>Select an operator</option>
          <option value="* (multiply)">* (multiply)</option>
          <option value="+ (add)">+ (add)</option>
          <option value="- (subtract)">- (subtract)</option>
          <option value="/ (divide)">/ (divide)</option>
          <option value="< (less than)">&lt; (less than)</option>
          <option value="<= (less than or equal)">&lt;= (less than or equal)</option>
          <option value="> (greater than)">&gt; (greater than)</option>
          <option value=">= (greater than or equal)">&gt;= (greater than or equal)</option>
          <option value="and">and</option>
          <option value="append">append</option>
          <option value="as-contract">as-contract</option>
          <option value="as-max-len?">as-max-len?</option>
          <option value="asserts!">asserts!</option>
          <option value="at-block">at-block</option>
          <option value="begin">begin</option>
          <option value="bit-and">bit-and</option>
          <option value="bit-not">bit-not</option>
          <option value="bit-or">bit-or</option>
          <option value="bit-shift-left">bit-shift-left</option>
          <option value="bit-shift-right">bit-shift-right</option>
          <option value="bit-xor">bit-xor</option>
          <option value="buff-to-int-be">buff-to-int-be</option>
          <option value="buff-to-int-le">buff-to-int-le</option>
          <option value="buff-to-uint-be">buff-to-uint-be</option>
          <option value="buff-to-uint-le">buff-to-uint-le</option>
          <option value="concat">concat</option>
          <option value="contract-call?">contract-call?</option>
          <option value="contract-of">contract-of</option>
          <option value="default-to">default-to</option>
          <option value="define-constant">define-constant</option>
          <option value="define-data-var">define-data-var</option>
          <option value="define-fungible-token">define-fungible-token</option>
          <option value="define-map">define-map</option>
          <option value="define-non-fungible-token">define-non-fungible-token</option>
          <option value="define-private">define-private</option>
          <option value="define-public">define-public</option>
          <option value="define-read-only">define-read-only</option>
          <option value="define-trait">define-trait</option>
          <option value="element-at">element-at</option>
          <option value="element-at?">element-at?</option>
          <option value="err">err</option>
          <option value="filter">filter</option>
          <option value="fold">fold</option>
          <option value="from-consensus-buff?">from-consensus-buff?</option>
          <option value="ft-burn?">ft-burn?</option>
          <option value="ft-get-balance">ft-get-balance</option>
          <option value="ft-get-supply">ft-get-supply</option>
          <option value="ft-mint?">ft-mint?</option>
          <option value="ft-transfer?">ft-transfer?</option>
          <option value="get">get</option>
          <option value="get-block-info?">get-block-info?</option>
          <option value="get-burn-block-info?">get-burn-block-info?</option>
          <option value="hash160">hash160</option>
          <option value="if">if</option>
          <option value="impl-trait">impl-trait</option>
          <option value="index-of">index-of</option>
          <option value="index-of?">index-of?</option>
          <option value="int-to-ascii">int-to-ascii</option>
          <option value="int-to-utf8">int-to-utf8</option>
          <option value="is-eq">is-eq</option>
          <option value="is-err">is-err</option>
          <option value="is-none">is-none</option>
          <option value="is-ok">is-ok</option>
          <option value="is-some">is-some</option>
          <option value="is-standard">is-standard</option>
          <option value="keccak256">keccak256</option>
          <option value="len">len</option>
          <option value="let">let</option>
          <option value="list">list</option>
          <option value="log2">log2</option>
          <option value="map">map</option>
          <option value="map-delete">map-delete</option>
          <option value="map-get?">map-get?</option>
          <option value="map-insert">map-insert</option>
          <option value="map-set">map-set</option>
          <option value="match">match</option>
          <option value="merge">merge</option>
          <option value="mod">mod</option>
          <option value="nft-burn?">nft-burn?</option>
          <option value="nft-get-owner?">nft-get-owner?</option>
          <option value="nft-mint?">nft-mint?</option>
          <option value="nft-transfer?">nft-transfer?</option>
          <option value="not">not</option>
          <option value="ok">ok</option>
          <option value="or">or</option>
          <option value="pow">pow</option>
          <option value="principal-construct?">principal-construct?</option>
          <option value="principal-destruct?">principal-destruct?</option>
          <option value="principal-of?">principal-of?</option>
          <option value="print">print</option>
          <option value="replace-at?">replace-at?</option>
          <option value="secp256k1-recover?">secp256k1-recover?</option>
          <option value="secp256k1-verify">secp256k1-verify</option>
          <option value="sha256">sha256</option>
          <option value="sha512">sha512</option>
          <option value="sha512/256">sha512/256</option>
          <option value="slice?">slice?</option>
          <option value="some">some</option>
          <option value="sqrti">sqrti</option>
          <option value="string-to-int?">string-to-int?</option>
          <option value="string-to-uint?">string-to-uint?</option>
          <option value="stx-account">stx-account</option>
          <option value="stx-burn?">stx-burn?</option>
          <option value="stx-get-balance">stx-get-balance</option>
          <option value="stx-transfer-memo?">stx-transfer-memo?</option>
          <option value="stx-transfer?">stx-transfer?</option>
          <option value="to-consensus-buff?">to-consensus-buff?</option>
          <option value="to-int">to-int</option>
          <option value="to-uint">to-uint</option>
          <option value="try!">try!</option>
          <option value="tuple">tuple</option>
          <option value="unwrap!">unwrap!</option>
          <option value="unwrap-err!">unwrap-err!</option>
          <option value="unwrap-err-panic">unwrap-err-panic</option>
          <option value="unwrap-panic">unwrap-panic</option>
          <option value="use-trait">use-trait</option>
          <option value="var-get">var-get</option>
          <option value="var-set">var-set</option>
          <option value="xor">xor</option>
        </select>
      </div>

      <div className='text-xs pr-6 pb-2 text-right'>Target</div>
      
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ bottom: 'auto', left: 10, top: 16, background: '#555', width: 8, height: 8 }}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="operator_target"
        style={{ top: 'auto', right: 10, bottom: 8, background: '#555', width: 8, height: 8 }}
        isConnectable={isConnectable}
      />
    </div>
  );
});