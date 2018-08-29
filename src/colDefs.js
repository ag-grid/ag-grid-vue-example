const colDefs = [
{"headerName":"$type","field":"$type", "suppressMenu": false, "suppressFilter":true, "cellClass": "word-cell"},

{"headerName":"LnSymbol","field":"LnSymbol", "enableRowGroup": true, "cellClass": "word-cell"},

{"headerName":"IndicationId","field":"IndicationId", "enableRowGroup": true, "cellClass": "number-cell"},

{"headerName":"Sequence","field":"Sequence", "cellClass": "number-cell"},

{"headerName":"LnWorkingQuantity","field":"LnWorkingQuantity", "cellClass": "number-cell"},

{"headerName":"LnMatchingQuantity","field":"LnMatchingQuantity", "cellClass": "number-cell"},

{"headerName":"LnCompletionPercentage","field":"LnCompletionPercentage", "cellClass": "percent-cell"}, //"cellRendererFramework": "CompletionPercentageRenderer", 

{"headerName":"LnCompletedQuantity","field":"LnCompletedQuantity", "cellRenderer":"agAnimateShowChangeCellRenderer", "cellClass": "number-cell"},

{"headerName":"QuantityTolerance","field":"QuantityTolerance", "cellClass": "number-cell"},

{"headerName":"AdvTolerance","field":"AdvTolerance", "cellClass": "number-cell"},

{"headerName":"AdvToleranceInShares","field":"AdvToleranceInShares", "cellClass": "number-cell"},

{"headerName":"NegotiationContraId","field":"NegotiationContraId", "cellClass": "number-cell"},

{"headerName":"TotalLnPlacementQuantity","field":"TotalLnPlacementQuantity", "cellClass": "number-cell"},

{"headerName":"MinimumQuantity","field":"MinimumQuantity", "cellClass": "number-cell"},

{"headerName":"MinimumPrincipal","field":"MinimumPrincipal", "cellClass": "number-cell"},

{"headerName":"MoMaximumTargetQuantity","field":"MoMaximumTargetQuantity", "cellClass": "number-cell"},

{"headerName":"IndicationRemovedReason","field":"IndicationRemovedReason", "cellClass": "number-cell"},

{"headerName":"InvalidStatusReason","field":"InvalidStatusReason", "cellClass": "word-cell"},

{"headerName":"EnhancedStatus","field":"EnhancedStatus", "cellClass": "number-cell"},

{"headerName":"InTheMarketFlag","field":"InTheMarketFlag", "cellClass": "number-cell"},

{"headerName":"PotentialLiquidity","field":"PotentialLiquidity", "cellClass": "boolean-cell"},

{"headerName":"AverageExecutionPrice","field":"AverageExecutionPrice", "cellClass": "number-cell"},

{"headerName":"LotPreference","field":"LotPreference", "cellClass": "word-cell"},

{"headerName":"Actionable","field":"Actionable", "cellClass": "boolean-cell"},

{"headerName":"IndicationCoverage","field":"IndicationCoverage", "cellClass": "object-cell"},

{"headerName":"MoCanResumeOrAdd","field":"MoCanResumeOrAdd", "cellClass": "boolean-cell"},

{"headerName":"MoCanResumeOrAddReason","field":"MoCanResumeOrAddReason", "cellClass": "word-cell"},

{"headerName":"EnhancedMoStatus","field":"EnhancedMoStatus", "cellClass": "word-cell"},

{"headerName":"ShortSellAffirmStatus","field":"ShortSellAffirmStatus", "cellClass": "word-cell"},

{"headerName":"BoardLotSize","field":"BoardLotSize", "cellClass": "number-cell"},

{"headerName":"MinimumExecutionType","field":"MinimumExecutionType", "cellClass": "number-cell"},

{"headerName":"UtcActiveStatusTime","field":"UtcActiveStatusTime", "cellClass": "time-cell"},

{"headerName":"TraderLimitPrice","field":"TraderLimitPrice", "cellClass": "number-cell"},

{"headerName":"H2oBlockCoverage","field":"H2oBlockCoverage", "cellClass": "object-cell"},

{"headerName":"UtcCreationTime","field":"UtcCreationTime", "cellClass": "time-cell"},

{"headerName":"MoCanAdd","field":"MoCanAdd", "cellClass": "boolean-cell"},

{"headerName":"MoCanAddReason","field":"MoCanAddReason", "cellClass": "word-cell"},

{"headerName":"OmsUncommitedQuantity","field":"OmsUncommitedQuantity", "cellClass": "number-cell"},

{"headerName":"MopoMode","field":"MopoMode", "cellClass": "word-cell"},

{"headerName":"LockedBrokerOfCredit","field":"LockedBrokerOfCredit", "cellClass": "word-cell"},

{"headerName":"MoStrategyParameters","field":"MoStrategyParameters", "cellClass": "object-cell"},

{"headerName":"AuxTraderInfo","field":"AuxTraderInfo", "cellClass": "empty-cell"},

{"headerName":"OrderCore","field":"OrderCore", "cellClass": "object-cell"},

{"headerName":"IsInsiderAccount","field":"IsInsiderAccount", "cellClass": "boolean-cell"},

{"headerName":"IsSignificantShareholder","field":"IsSignificantShareholder", "cellClass": "boolean-cell"},

{"headerName":"AvailableStrategies","field":"AvailableStrategies", "cellClass": "object-cell"},

{"headerName":"HasMatchPopupAlert","field":"HasMatchPopupAlert", "cellClass": "boolean-cell"},

{"headerName":"OmsType","field":"OmsType", "cellClass": "word-cell"},

{"headerName":"ToleranceValueInShares","field":"ToleranceValueInShares", "cellClass": "number-cell"},

{"headerName":"ToleranceText","field":"ToleranceText", "cellClass": "object-cell"},

{"headerName":"ToleranceTooltipText","field":"ToleranceTooltipText", "cellClass": "object-cell"},

{"headerName":"CanClearAvailableStrategies","field":"CanClearAvailableStrategies", "cellClass": "boolean-cell"},

{"headerName":"QuantityToleranceInShares","field":"QuantityToleranceInShares", "cellClass": "number-cell"},

{"headerName":"MoAvailableQuantity","field":"MoAvailableQuantity", "cellClass": "number-cell"},

{"headerName":"ToleranceType","field":"ToleranceType", "cellClass": "word-cell"},

{"headerName":"MinimumMatchingQuantity","field":"MinimumMatchingQuantity", "cellClass": "number-cell"},

{"headerName":"MinMatchingPctAdv","field":"MinMatchingPctAdv", "cellClass": "number-cell"},

{"headerName":"ReviewedByOwner","field":"ReviewedByOwner", "cellClass": "boolean-cell"},

{"headerName":"LnListId","field":"LnListId", "cellClass": "empty-cell"},

{"headerName":"DefaultBrokerOfCredit","field":"DefaultBrokerOfCredit", "cellClass": "word-cell"},

{"headerName":"InvalidStatusReasonCode","field":"InvalidStatusReasonCode", "cellClass": "number-cell"},

{"headerName":"TargetedInvitationMinPctAdv","field":"TargetedInvitationMinPctAdv", "cellClass": "number-cell"},

{"headerName":"OwnershipDisclaimerStatus","field":"OwnershipDisclaimerStatus", "cellClass": "word-cell"},

{"headerName":"ToleranceCapInShares","field":"ToleranceCapInShares", "cellClass": "number-cell"},

{"headerName":"TargetedInvitationMinMatchingQuantity","field":"TargetedInvitationMinMatchingQuantity", "cellClass": "number-cell"},

{"headerName":"PostBlockOrderAllowed","field":"PostBlockOrderAllowed", "cellClass": "boolean-cell"},

{"headerName":"TiDisabledReason","field":"TiDisabledReason", "cellClass": "number-cell"},

{"headerName":"MoTargetQuantity","field":"MoTargetQuantity", "cellClass": "number-cell"},

{"headerName":"MoFillsQuantity","field":"MoFillsQuantity", "cellClass": "number-cell"},

{"headerName":"MoLeavesQuantity","field":"MoLeavesQuantity", "cellClass": "number-cell"},

{"headerName":"MoMinimumExecutionSize","field":"MoMinimumExecutionSize", "cellClass": "number-cell"},

{"headerName":"MemberOrderId","field":"MemberOrderId", "cellClass": "number-cell"},

{"headerName":"MoOwner","field":"MoOwner", "cellClass": "word-cell"},

{"headerName":"MoLimitPrice","field":"MoLimitPrice", "cellClass": "number-cell"},

{"headerName":"MoMarketInstructions","field":"MoMarketInstructions", "cellClass": "word-cell"},

{"headerName":"MoStatusReason","field":"MoStatusReason", "cellClass": "word-cell"},

{"headerName":"MoInTheMarket","field":"MoInTheMarket", "cellClass": "number-cell"},

{"headerName":"MoStrategyId","field":"MoStrategyId", "cellClass": "word-cell"},

{"headerName":"MoUtcCreationTime","field":"MoUtcCreationTime", "cellClass": "time-cell"},

{"headerName":"MoAveragePrice","field":"MoAveragePrice", "cellClass": "number-cell"},

{"headerName":"MoType","field":"MoType", "cellClass": "word-cell"},

{"headerName":"MoBrokerOfCredit","field":"MoBrokerOfCredit", "cellClass": "word-cell"},

{"headerName":"MoAlgoTargetQuantity","field":"MoAlgoTargetQuantity", "cellClass": "number-cell"},

{"headerName":"MoAlgoFillsQuantity","field":"MoAlgoFillsQuantity", "cellClass": "number-cell"},

{"headerName":"MoAlgoLimitPrice","field":"MoAlgoLimitPrice", "cellClass": "number-cell"},

{"headerName":"MoAlgoCondTargetQuantity","field":"MoAlgoCondTargetQuantity", "cellClass": "number-cell"},

{"headerName":"MoAlgoCondFillsQuantity","field":"MoAlgoCondFillsQuantity", "cellClass": "number-cell"},

{"headerName":"MoAlgoCondLimitPrice","field":"MoAlgoCondLimitPrice", "cellClass": "number-cell"},

{"headerName":"MoMinimumTargetQuantity","field":"MoMinimumTargetQuantity", "cellClass": "number-cell"},

{"headerName":"MoAlgoLeavesQuantity","field":"MoAlgoLeavesQuantity", "cellClass": "number-cell"},

{"headerName":"MoAlgoCondLeavesQuantity","field":"MoAlgoCondLeavesQuantity", "cellClass": "number-cell"},

{"headerName":"MoPriceInstruction","field":"MoPriceInstruction", "cellClass": "number-cell"},

{"headerName":"LseRestricted","field":"LseRestricted", "cellClass": "boolean-cell"},

{"headerName":"LseSector","field":"LseSector", "cellClass": "word-cell"},

{"headerName":"LseSegment","field":"LseSegment", "cellClass": "word-cell"}]

export default colDefs